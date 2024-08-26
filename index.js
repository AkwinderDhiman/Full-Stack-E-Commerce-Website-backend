const port = 4000;
const cors = require('cors');
const express = require('express');
const app = express(); // Correctly instantiate the express application
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_LOCAL;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('', userRoutes);
app.use('', productRoutes);

//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage})
app.use('/images',express.static('upload/images'))

app.post('/image/upload',upload.single('product'),(req,res)=>{
    res.status(201).json({
    success:true,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
})
})

// Route to get all images
app.get('/all-images', (req, res) => {
    const directoryPath = path.join(__dirname, 'upload/images');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Unable to scan directory' });
        }

        const imageUrls = files.map(file => `http://localhost:${port}/images/${file}`);
        res.status(201).json({ success: true, images: imageUrls });
    });
});


// API creation
app.listen(PORT, () => {
    console.log(`Listening on port -- ${PORT}`);
});
