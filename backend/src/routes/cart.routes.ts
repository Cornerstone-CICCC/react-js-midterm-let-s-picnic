import { Router } from "express";
import cartController from "../controllers/cart.controller";

const cartRouter = Router()

cartRouter.get('/', cartController.getAllCarts)
cartRouter.post('/', cartController.createCartByUser)
cartRouter.get('/:userId', cartController.getCartByUserId)
// cartRouter.put('/:userId')
// cartRouter.delete('/:userId')

export default cartRouter