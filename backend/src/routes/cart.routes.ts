import { Router } from "express";
import cartController from "../controllers/cart.controller";

const cartRouter = Router()

cartRouter.get('/', cartController.getAllCarts)
cartRouter.get('/item', cartController.getAllCartItems)
cartRouter.post('/', cartController.createCartByUser)
cartRouter.post('/item/:userId', cartController.addCartItemByUserId) 
cartRouter.get('/:userId', cartController.getCartByUserId)
cartRouter.put('/item/:userId', cartController.editCartByUserId) 
cartRouter.put('/:userId', cartController.updateCartStatusByUserId)
cartRouter.delete('/item/:userId', cartController.deleteCartByUserId) 

export default cartRouter

