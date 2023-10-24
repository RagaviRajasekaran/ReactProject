// products.js
import iphone14 from '../assets/iphone14.jpeg'
import iphone13 from '../assets/iphone13.jpeg'
import iphone15 from '../assets/iphone15.jpeg'
import iphone12 from '../assets/iphone12.jpeg'

const products = [
  {
    id: 1,
    name: "Fancy Product",
    rating: "✯ ✯ ✯ ✯",
    price: 10.99,
    image: iphone13, 
    description:'APPLE iPhone 13 ',
    qty:1
  },
  
  {
    id: 2,
    name: "Special Item",
    rating: "✯",
    image: iphone14, 
    price: 10.99,
    description:'APPLE iPhone 14 ',
    qty:1
  },
  {
    id: 3,
    name: "Sale Item",
    image: iphone15, 
    price: 10.99,
    rating: "✯ ✯ ✯ ✯ ✯",
    description:'APPLE iPhone 15 ',
    qty:1
  },
  {
    id: 4,
    name: "Popular Item",
    rating: "✯ ✯ ✯ ✯",
    price: 10.99,
    image: iphone12, 
    description:'APPLE iPhone 12 ',
    qty:1
  },
 

];

export default products;
