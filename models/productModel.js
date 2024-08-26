const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // description: {
    //     type: String,
    //     required: true
    // },
    category: {
        type: String,
        required: true
    },
    // brand: {
    //     type: String,
    //     required: true
    // },
    sku: {
        type: String,
        // unique: true,
        // required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    // currency: {
    //     type: String,
    //     default: 'USD'
    // },
    // tax: {
    //     type: String,
    //     default: 'Included'
    // },
    // stockQuantity: {
    //     type: Number,
    //     required: true
    // },
    // stockStatus: {
    //     type: String,
    //     default: 'In Stock'
    // },
    // warehouseLocation: {
    //     type: String
    // },
    // images: {
    //     type: [String] // Array of image URLs
    // },
    // videos: {
    //     type: [String] // Array of video URLs
    // },
    // specifications: {
    //     dimensions: {
    //         type: String
    //     },
    //     weight: {
    //         type: String
    //     },
    //     color: {
    //         type: String
    //     },
    //     material: {
    //         type: String
    //     },
    //     modelNumber: {
    //         type: String
    //     }
    // },
    // variants: {
    //     size: {
    //         type: [String]
    //     },
    //     color: {
    //         type: [String]
    //     },
    //     other: {
    //         type: [String]
    //     }
    // },
    // shipping: {
    //     shippingWeight: {
    //         type: String
    //     },
    //     shippingDimensions: {
    //         type: String
    //     },
    //     shippingCost: {
    //         type: Number
    //     },
    //     shippingTime: {
    //         type: String
    //     }
    // },
    // customerInfo: {
    //     reviews: [{
    //         rating: {
    //             type: Number,
    //             // required: true
    //         },
    //         comment: {
    //             type: String
    //         },
    //         reviewer: {
    //             type: String
    //         }
    //     }],
    //     averageRating: {
    //         type: Number
    //     },
    //     faq: [{
    //         question: {
    //             type: String,
    //             // required: true
    //         },
    //         answer: {
    //             type: String,
    //             // required: true
    //         }
    //     }]
    // },
    // additionalInfo: {
    //     tags: {
    //         type: [String]
    //     },
    //     relatedProducts: {
    //         type: [mongoose.Schema.Types.ObjectId], // References to other products
    //         ref: 'Product'
    //     },
    //     warranty: {
    //         type: String
    //     },
    //     returnPolicy: {
    //         type: String
    //     }
    // },
    // seoInfo: {
    //     metaTitle: {
    //         type: String
    //     },
    //     metaDescription: {
    //         type: String
    //     },
    //     metaKeywords: {
    //         type: [String]
    //     },
    //     slug: {
    //         type: String,
    //         unique: true,
    //         // required: true
    //     }
    // }
}, 
{ timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
