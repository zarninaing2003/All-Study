import Shop from './src/js/Shop';
// import { createCategory } from './src/app/category';
import { products } from './src/core/data';
// import { createProduct } from './src/app/product';
import './style.css';
import 'flowbite';

const shop  = new Shop;
shop.init();


// console.log(createCategory("Hello"));
// console.log(products[0]);

// console.log(products.filter(el => el.category === "electronics"));