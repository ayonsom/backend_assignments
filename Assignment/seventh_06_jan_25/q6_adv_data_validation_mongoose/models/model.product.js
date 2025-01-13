const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
    maxlength: [50, 'Product name cannot exceed 50 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number']
  },
  category: {
    type: String,
    required: [true, 'Category is required, must be one these:- "Electronics" "Clothing" "Books" "Home Appliances"'],
    enum: ['Electronics', 'Clothing', 'Books', 'Home Appliances'],
    message: 'Category must be one of the following: Electronics, Clothing, Books, Home Appliances'
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock quantity cannot be negative']
  },
  SKU: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    match: [/^PROD-[a-zA-Z0-9]{7}$/, 'SKU must follow the pattern PROD-XXXX000']
  },
  tags: {
    type: [String, 'Must be be repitative, useful for searching this product.'],
    validate: {
      validator: function(v) {
        return v.every(tag => /^[a-zA-Z0-9]+$/.test(tag)) && (new Set(v)).size === v.length;
      },
      message: 'Tags must be non-empty strings without special characters and must not contain duplicates'
    }
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = {Product};
