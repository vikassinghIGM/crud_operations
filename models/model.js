import mongoose from 'mongoose';
import Joi from 'joi' ;

const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "required a name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    image: {
        type: String,
        required: false,
        default: 0
    }
})

const Product = mongoose.model("product",ProductSchema);

export default Product;