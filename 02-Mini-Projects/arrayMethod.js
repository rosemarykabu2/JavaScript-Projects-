let sales = [250,100,400,50,150];

let totalSales = sales.reduce(function(total,sale){
  return total + sale;
},0);

console.log(totalSales)

sales.sort(function(a,b){
  return b - a
}
);
console.log(sales)