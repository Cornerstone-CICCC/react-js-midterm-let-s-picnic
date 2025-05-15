import { Request, Response } from "express";
import cartModel from "../models/cart.model";
import { Cart } from "../types/cart";

// get all cart
const getAllCarts = async (req: Request, res: Response) => {
  try {
    const carts = await cartModel.getAllCarts()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch carts" });
  }
}

// create cart by userId (If there is not active-status record, insert new record by active-status, if there is active-status record, update that record)
const createCartByUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.body.userId)
    if (isNaN(userId)) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." })
      return
    }
    const cart = await cartModel.createCartByUserId(userId)
    res.status(200).json(cart)
    return
  } catch (err) {
    res.status(500).json({ error: "Failed to creat cart" });
  }
}

// get cart by userId (just show status: "active")
const getCartByUserId = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId)
  if (isNaN(userId)) {
    res.status(400).json({ error: "Invalid user ID. Must be a number." })
    return
  }
  try {
    const cart = await cartModel.getCartByUserId(userId)
    if (!cart) {
      res.status(404).json({ error : "Cart not found"})
      return
    }
    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
}

//  edit cart by userId (just edit status: "active")
const editCartByUserId = async (req: Request, res: Response) => {
  try {

  } catch (err) {
    res.status(500).json({ error: "Failed to edit cart" });
  }
}

// delete cart by userId (delete is change status to "delete")
const deleteCartByUserId = async (req: Request, res: Response) => {
  try {

  } catch (err) {
    res.status(500).json({ error: "Failed to delete cart" });
  }
}

export default {
  getAllCarts,
  createCartByUser,
  getCartByUserId,
  editCartByUserId,
  deleteCartByUserId
}