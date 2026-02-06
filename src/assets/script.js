/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
var products=[];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry={
  name:"cherry",
  price:1.50,
  quantity:0,
  productId:501,
  image:"images/cherry.jpg",
};

const orange={
  name:"orange",
  price:3.75,
  quantity:0,
  productId:502,
  image:"images/orange.jpg",
};

const strawberry={
  name:"strawberry",
  price:3,
  quantity:0,
  productId:503,
  image:"images/strawberry.jpg",
};
//Add products created to the array
products.push(cherry,orange,strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
var cart=[];

function findProduct(id){
  var productFound;
  products.forEach((prod)=>{
    if (prod.productId===id){
      productFound= prod;
    }
  })
  return productFound;
}
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(id){
  var productToAdd=findProduct(id);

  console.log("indexCart: "+productToAdd.name)

  var indexCart = cart.indexOf(productToAdd);
  console.log("indexCart: "+indexCart)

  productToAdd.quantity+=1;

  if(indexCart==-1){
    cart.push(productToAdd);
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity (id){
  var productToMod=findProduct(id);
  productToMod.quantity+=1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity (id){
  var productToMod=findProduct(id);
  
  if(productToMod.quantity>1){
    productToMod.quantity-=1;
  }
  else{
    removeProductFromCart(id);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart (id){
  var productToMod=findProduct(id);
  productToMod.quantity=0;
  cart.splice(cart.indexOf(productToMod),1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  var total=0;
  cart.forEach((productBuy)=>{
    total+=productBuy.quantity*productBuy.price;
  })
  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
cart.splice(0,cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
var totalPaid = 0;

function pay(cashReceived){
  totalPaid+=cashReceived;
  var toPay = cartTotal();
  return totalPaid-toPay;
  
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}