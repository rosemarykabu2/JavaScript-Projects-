let products = [
  {
    name:'Laptop',
    price :4500,
    stock:3
  },
  {
    name :'Mouse',
    price: 120,
    stock: 0
  },
  {
    name : 'Keyboard',
    price : '250',
    stock : 5
  },
  {
    name : 'Monitor',
    price : '1200',
    stock : 2
   } 
]

let totalStock = 0;
let expensiveProduct=0;
let MostEpensiveProduct;
for (let product of products){
  if (product.stock > 0){
    console.log(`${product.name} - In Stock`);
  } else{
    console.log(`${product.name} - Out of stock`);
  }
  totalStock += product.stock

  if(product.price > expensiveProduct){
    expensiveProduct = product.price
    MostEpensiveProduct = product
  }
  console.log(`Most expensive Product: ${MostEpensiveProduct.name}\n Price: ${expensiveProduct}`)
}
console.log(`The total items in stock: ${totalStock}`);


