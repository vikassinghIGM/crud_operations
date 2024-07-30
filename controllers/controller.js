
import { validateProduct } from '../validations/productValidations.js';
import Product from "../models/model.js";

export const readProducts = async (req, res) => {
    try {
        let query = {};

        // if (req.params) {
        //     query = req.params;
        // }
        // console.log('Query:', query);
        const products = await Product.find();
        res.status(200).json(products);
        console.log('Request body:', req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('Error:', error);
    }
};

export const updateProduct = async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).send("product not found")
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        // console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send("product not found")
        }
        // const updatedProduct = await Product.findById(id); 
        res.status(200).json({ message: "product deleted successfully" });
        // console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// export const findProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         // console.log(typeof(id))
//         const products = await Product.findById(id);
//         if(!products){
//          res.status(404).json({message:"product not found"})
//         }else
//         res.status(200).json(products);
//         // console.log(id)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//         console.log(error)
//     }
// }

//test code 
export const createProduct = async (req, res) => {
    // Validate the request body
    const { error } = validateProduct(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product created successfully" });
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};