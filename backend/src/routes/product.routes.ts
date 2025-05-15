import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router()

productRouter.get('/', productController.getAllProducts) // ok
productRouter.post('/', productController.addProduct) // ok
productRouter.put('/:productId', productController.editProduct) // ok
productRouter.delete('/:productId', productController.deleteProduct) // ok
productRouter.get('/category/:categoryId', productController.getProductsByCategoryId)
productRouter.get('/search/:productName', productController.getProductByName)
productRouter.get('/:productId', productController.getProductById) // ok http://localhost:3000/product/1

export default productRouter