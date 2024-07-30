import express from 'express';
// import Product from '../models/model.js';
const router = express.Router();
import * as productController from '../controllers/controller.js';

//Read all products  
router.get('/', productController.readProducts);

//update/edit a product  
router.put('/:id', productController.updateProduct);

//delete a product  
router.delete('/:id', productController.deleteProduct);

//find a product  
// router.get('/:id', productController.findProduct);

//create a product  
router.post('/', productController.createProduct);

export default router