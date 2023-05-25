import { Sql } from 'postgres';

export const products = [
  { id: 1, name: 'Millie', type: 'Alpaca', price: 30 },
  { id: 2, name: 'Petey', type: 'Bunny', price: 50 },
  { id: 3, name: 'Selma', type: 'Cow', price: 45 },
  { id: 4, name: 'Poochie', type: 'Donkey', price: 60 },
  { id: 5, name: 'Buttercup', type: 'Elephant', price: 48 },
  { id: 6, name: 'Cookie', type: 'Fox', price: 54 },
  { id: 7, name: 'Henry', type: 'Hippo', price: 48 },
  { id: 8, name: 'Judy', type: 'Owl', price: 55 },
  { id: 9, name: 'Wilbert', type: 'Raccoon', price: 99 },
  { id: 10, name: 'Emma', type: 'Deer', price: 44 },
  { id: 11, name: 'Fred', type: 'Panda', price: 39 },
  { id: 12, name: 'Alberta', type: 'Giraffe', price: 59 },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO products
  (name, type, price)
VALUES
    (${product.name}, ${product.type}, ${product.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id=${product.id}
    `;
  }
}
