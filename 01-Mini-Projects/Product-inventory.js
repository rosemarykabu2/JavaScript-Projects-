let products = [
  {
    name:'Laptop',
    price :4500,
    inStock: true
  },
  {
    name :'Mouse',
    price: 120,
    inStock: false
  },
  {
    name : 'Keyboard',
    price : 250,
    inStock : true
  },
  {
    name : 'Monitor',
    price : 1200,
    inStock : true
   },
   {
    name : 'Headphones',
    price : 350,
    inStock : false
   } 
]
/*
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
*/

/*let productName = products.map(function(product)
{
  return product.name
}
);

for (let product of productName){
  console.log(product)
}
*/

 /*let updatedProducts = products.map(function(product){
  return {
    name: product.name,
    price: product.price * 1.10
  };
});

for(let product of updatedProducts){
  console.log(`${product.name}: ${product.price}`)
} */

  let availableProducts = products.filter(function(product){
    return product.inStock === true;
  }
);

for (let product of availableProducts){
  console.log(`${product.name} - ${product.price}`)
}

