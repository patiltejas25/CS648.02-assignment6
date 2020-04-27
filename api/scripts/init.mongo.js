/* global db print */
/* eslint no-restricted-globals: "off" */
/* eslint linebreak-style: ["error", "windows"] */
db.products.remove({});
db.deleted_products.remove({});
const productsDB = [
  {
    id: 1,
    category: 'Jeans',
    name: 'Zara',
    price: 250,
    image: 'https://i.pinimg.com/originals/8d/fb/38/8dfb3860ee73183250ecb72da66984c4.jpg',
    description: 'Zara Men Jeans All Sizes available',
  },
  {
    id: 2,
    category: 'Jackets',
    name: 'H&M',
    price: 500,
    image: 'https://i.pinimg.com/originals/9e/75/0c/9e750c88236899ea2f28bcab5bb4267e.jpg',
    description: 'H & M Jackets for Men',
  },
];
db.products.insertMany(productsDB);
const count = db.products.count();
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ category: 1 });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ image: 1 });
db.deleted_products.createIndex({ id: 1 }, { unique: true });
