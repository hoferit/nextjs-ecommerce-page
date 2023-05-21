type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export const products: Product[] = [
  { id: 1, name: 'Millie', type: 'Alpaca', price: 30 },
  { id: 2, name: 'Petey', type: 'Bunny', price: 50 },
  { id: 3, name: 'Selma', type: 'Cow', price: 45 },
  { id: 4, name: 'Poochie', type: 'Donkey', price: 60 },
  { id: 5, name: 'Buttercup', type: 'Elephant', price: 48 },
  { id: 6, name: 'Cookie', type: 'Fox', price: 54 },
  { id: 7, name: 'Henry', type: 'Hippo', price: 48 },
  { id: 8, name: 'Judy', type: 'Owl', price: 55 },
  { id: 9, name: 'Wilbert', type: 'Raccoon', price: 200 },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
