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

// get all cart items
const getAllCartItems = async (req: Request, res: Response) => {
  try {
    const cartItems = await cartModel.getAllCartItems()
    res.status(200).json(cartItems)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
}

// create cart by userId 
const createCartByUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.body.userId)
    if (isNaN(userId)) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." })
      return
    }
    const cart = await cartModel.createCartByUserId(userId)
    res.status(201).json(cart)
    return
  } catch (err) {
    res.status(500).json({ error: "Failed to creat cart" });
  }
}

// creat cart item
const addCartItemByUserId = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId)
    const { productId, quantity } = req.body
    if (isNaN(userId)) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." })
      return
    }
    const cartItem = await cartModel.addCartItem(userId, productId, quantity)
    res.status(201).json(cartItem)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Failed to edit cart" });
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
  const userId = parseInt(req.params.userId)
  const { cartItemId, quantity } = req.body

  if (isNaN(userId) || isNaN(cartItemId)) {
    res.status(400).json({ error: "Invalid user ID or cart item ID. Must be a number." })
    return
  }

  if (typeof quantity !== 'number' || quantity < 1) {
    res.status(400).json({ error: "Quantity must be a positive number." })
    return
  }
  
  try {
    const updatedItem = await cartModel.updateCartItemQuantityByUserId(userId, quantity, cartItemId)

    if (!updatedItem) {
      res.status(404).json({ error: "Cart or cart item not found." })
      return
    }
    res.status(200).json(updatedItem)
  } catch (err) {
    res.status(500).json({ error: "Failed to edit cart" });
  }
}

// delete cart by userId (delete is change status to "delete")
const deleteCartByUserId = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId)
  const cartItemId = parseInt(req.body.cartItemId)
  try {
    await cartModel.deleteCartItemByUserId(userId, cartItemId)
    res.status(200).json({ message: "Product item deleted" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to delete cart" });
  }
}

// update Cart Status By User Id
const updateCartStatusByUserId = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId)
    const { status } = req.body

    if (isNaN(userId)) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." })
      return
    }

    if (!["active", "purchased", "delete"].includes(status)) {
      res.status(400).json({ error: "Invalid status. Must be one of 'active', 'purchased', or 'delete'." })
      return
    }

    const updatedCart = await cartModel.updateCartStatusByUserId(userId, status)

    if (!updatedCart) {
      res.status(404).json({ error: "Cart not found or already updated." })
      return
    }

    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart status" })
  }
}

export default {
  getAllCarts,
  getAllCartItems,
  createCartByUser,
  addCartItemByUserId,
  getCartByUserId,
  editCartByUserId,
  deleteCartByUserId,
  updateCartStatusByUserId
}