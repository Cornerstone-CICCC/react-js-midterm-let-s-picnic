const request = require('supertest');
import app from "../../server";
import { createClient } from '../../database/dbClient'
// import { Client } from 'pg';

// テスト用のデータベースクライアント
// const client = new Client({
//   user: 'mizukifujikawa',
//   host: 'localhost',
//   database: 'react_mid_test',
//   password: 'password',
//   port: 5432,
// });

const client = createClient();

describe('GET /product', () => {
  // テスト用データを挿入
  beforeAll(async () => {
    await client.connect();  // データベースに接続

    // テストデータの挿入
    await client.query(`
      INSERT INTO "category" (category_name)
      VALUES
      ('Test Category A'),
      ('Test Category B');
    `);

    await client.query(`
      INSERT INTO "product" (product_name, description, category_id, price, image)
      VALUES
      ('Test Product A', 'Description for product A', 1, 19.99, 'https://example.com/imageA.webp'),
      ('Test Product B', 'Description for product B', 2, 29.99, 'https://example.com/imageB.webp');
    `);
  });

  // test
  it('should return all products', async () => {
    const response = await request(app).get('/product');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty('product_name');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('category_id');
    expect(response.body[0]).toHaveProperty('price');
    expect(response.body[0]).toHaveProperty('image');
  });

  // テスト終了後にデータを削除
  afterAll(async () => {
    // await client.query('DELETE FROM "category"');
    // await client.query('DELETE FROM "product"');
    await client.end();  // データベース接続を終了
  });
});

// describe('POST /product', () => {
//   it('should create a new product', async () => {
//     const newProduct = {
//       name: 'Product C',
//       price: 200
//     };

//     const response = await request(app)
//       .post('/products')
//       .send(newProduct);
    
//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty('id');
//     expect(response.body.name).toBe(newProduct.name);
//     expect(response.body.price).toBe(newProduct.price);
//   });
// });

// describe('DELETE /product/:id', () => {
//   it('should delete a product', async () => {
//     const response = await request(app).delete('/products/1');
    
//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe('Product deleted');
//   });
// });
