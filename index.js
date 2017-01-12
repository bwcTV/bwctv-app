var vhx = require('vhx')('e_LK8oaTkrQn-aqMMxwhENPmarQxCkRz');
/*
vhx.products.retrieve("https://api.vhx.tv/products/1", function(err, product) {
  console.log(JSON.stringify(product,null,2));
});
*/

vhx.products.all({
 //   query: 'term'
}, function(err, products) {
  if (err) {
    throw err;
  }
  console.log(
    JSON.stringify(products,null,2)
  );
});
