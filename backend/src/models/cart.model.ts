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

// create cart by userId
const createCartByUserId = async (userId: number) => {
  const client = createClient()
  try {
    await client.connect()
    // check if there is an 'active' cart
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
      return newCart.rows[0] // creat a new one
    }
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// add cart item to cart by user id
const addCartItem = async (userId: number, productId: number, quantity: number) => {
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
  const client = createClient();

  try {
    await client.connect();

    const userCartResult = await client.query(`
      SELECT 
        u.id AS "userId",
        u.firstname AS "firstName",
        u.lastname AS "lastName",
        u.role,
        c.id AS "cartId"
      FROM "user" u
      JOIN cart c ON u.id = c.user_id
      WHERE u.id = $1 AND c.status = 'active'
    `, [userId]);

    // if don't have active cart，return cartItems[]
    if (userCartResult.rows.length === 0) {
      const userOnly = await client.query(`
        SELECT 
          id AS "userId",
          firstname AS "firstName",
          lastname AS "lastName",
          role
        FROM "user"
        WHERE id = $1
      `, [userId]);

      return {
        user: {
          ...userOnly.rows[0],
          cartId: null,
          cartItems: []
        }
      };
    }

    const userCart = userCartResult.rows[0];
    const cartItemsResult = await client.query(`
      SELECT 
        ci.id AS "cartItemId",
        ci.quantity,
        p.id AS "productId",
        p.product_name AS "productName",
        p.price,
        p.image,
        p.description,
        p.discount_percentage AS "discountPercentage",
        p.rating,
        p.sku,
        p.category_id AS "categoryId",
        cat.category_name AS "categoryName",
        cat.description AS "categoryDescription",
        cat.image AS "categoryImage"
      FROM cart_item ci
      JOIN product p ON ci.product_id = p.id
      JOIN category cat ON p.category_id = cat.id
      WHERE ci.cart_id = $1
    `, [userCart.cartId]);

    const cartItems = cartItemsResult.rows.map(row => ({
      cartItemId: row.cartItemId,
      quantity: row.quantity,
      product: {
        productId: row.productId,
        productName: row.productName,
        price: row.price,
        image: row.image,
        description: row.description,
        discountPercentage: row.discountPercentage,
        rating: row.rating,
        sku: row.sku,
        categoryId: row.categoryId,
        category: {
          categoryName: row.categoryName,
          categoryDescription: row.categoryDescription,
          categoryImage: row.categoryImage
        }
      }
    }));

    return {
      user: {
        userId: userCart.userId,
        firstName: userCart.firstName,
        lastName: userCart.lastName,
        role: userCart.role,
        cartId: userCart.cartId,
        cartItems
      }
    };

  } catch (err) {
    console.error('Error fetching cart by user ID:', err);
    throw err;
  } finally {
    await client.end();
  }
};

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

// delete cart item by userId (active cart can delete cart item)
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
  addCartItem,
  getCartByUserId,
  updateCartItemQuantityByUserId,
  deleteCartItemByUserId,
  updateCartStatusByUserId
}