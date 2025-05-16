import { createClient } from "../database/dbClient";
import { Cart } from "../types/cart";
import { CartItem } from "../types/cartItem";

// get all carts
const getAllCarts = async () => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM cart ORDER BY user_id ASC`)
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// get all cart items
const getAllCartItems = async () => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM cart_item ORDER BY product_id ASC`)
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// create cart by userId (If there is not active-status record, insert new record by active-status, if there is active-status record, update that record)
const createCartByUserId = async (userId: number) => {
  const client = createClient()
  try {
    await client.connect()
    const findActiveCart = `
      SELECT * FROM cart
      WHERE user_id = $1 AND status = 'active'
      LIMIT 1
    `
    const result = await client.query(findActiveCart, [userId])
    if (result.rows.length > 0) {
      return result.rows[0]  // return old one
    } else {
      const createCart = `
        INSERT INTO cart (user_id, status)
        VALUES ($1, 'active')
        RETURNING *
      `
      const newCart = await client.query(createCart, [userId])
      return newCart.rows[0]
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// add cart item to cart by user id
const addCartItemToCartByUserId = async (userId: number, productId: number, quantity: number) => {
  const client = createClient()
  try {
    await client.connect()
    const cart = await createCartByUserId(userId)

    // check cart item is exist ?
    const existingItem = await client.query(
      `SELECT * FROM cart_item WHERE cart_id = $1 AND product_id = $2`,
      [cart.id, productId]
    )

    if (existingItem.rows.length > 0) {
      // if already has the item, the item + 1
      const updatedItem = await client.query(
        `UPDATE cart_item SET quantity = quantity + $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *`,
        [quantity, existingItem.rows[0].id]
      )
      return updatedItem.rows[0]
    } else {
      // if no, add new item
      const newItem = await client.query(
        `INSERT INTO cart_item (cart_id, product_id, quantity, created_at, updated_at)
         VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
         RETURNING *`,
        [cart.id, productId, quantity]
      )
      return newItem.rows[0]
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// get cart by userId (just show status: "active")
const getCartByUserId = async (userId: number) => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM cart WHERE user_id= $1 AND status = 'active'`,[userId])
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

//  edit cart by userId ( active cart can change cart item quantity)
const updateCartItemQuantityByUserId = async (userId: number, quantity: number, cartItemId: number) => {
      
  // find active cart
  const foundCart = await getCartByUserId(userId)
  if (!foundCart) return undefined
  const client = createClient()
  try {
    await client.connect()
    // update cart item quantity
    const result = await client.query(
      `UPDATE cart_item SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *`,
      [quantity, cartItemId]
    )
    return result.rows[0];
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// delete cart by userId (active cart can delete cart item)
const deleteCartItemByUserId = async (userId: number, cartItemId: number) => {
  // find active cart
  const foundCart = await getCartByUserId(userId)
  if (!foundCart) return undefined
  const client = createClient()
  try {
    await client.connect()
    // delete cart item by cart id
    const result = await client.query(`DELETE FROM cart_item WHERE id = ${cartItemId}`)
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// update Cart Status By User Id
const updateCartStatusByUserId = async (userId: number, newStatus: "active" | "purchased" | "delete") => {
  const client =createClient()
  try {
    await client.connect()
    const result = await client.query(`
      UPDATE cart SET status = $1, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $2 AND status = 'active'
      RETURNING *
      `, [newStatus, userId])
      return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}


export default {
  getAllCarts,
  getAllCartItems,
  createCartByUserId,
  addCartItemToCartByUserId,
  getCartByUserId,
  updateCartItemQuantityByUserId,
  deleteCartItemByUserId,
  updateCartStatusByUserId
}