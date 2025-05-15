import { createClient } from "../database/dbClient";
import { Cart } from "../types/cart";

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

//  edit cart by userId (just edit status: "active")
const editCartByUserId = async (userId: number, updateData: Partial<Cart>) => {
  const foundCart = await getCartByUserId(userId)
  if (!foundCart) return undefined
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(``)
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// delete cart by userId (delete is change status to "delete")
const deleteCartByUserId = async () => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(``)
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}


export default {
  getAllCarts,
  createCartByUserId,
  getCartByUserId,
  editCartByUserId,
  deleteCartByUserId
}