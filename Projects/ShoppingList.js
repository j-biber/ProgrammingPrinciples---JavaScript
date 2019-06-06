"use strict";

(function() {
  function Product(name, price, expirationDate) {
    this.id = parseInt(Math.random() * 100000);
    this.name = name;
    this.price = parseFloat(price);
    this.expirationDate = expirationDate;

    this.getInfo = function() {
      var productCode =
        this.name.charAt(0).toUpperCase() +
        this.name.cahrAt(this.name.length - 1).toUpperCase() +
        this.id;
      return productCode + ", " + this.name + ", " + this.price;
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];

    this.addProduct = function(product) {
      if (!product && !(product instanceof Product)) {
        console.error("Invalid input");
      }
      if (product.expirationDate.getTime() > Date.now()) {
        this.listOfProducts.push(product);
      } else {
        console.log("The product has expired.");
      }
    };

    this.totalPrice = function() {
      //var numberOfProducts = this.listOfProducts.length;
      var totalPrice = 0;
      this.listOfProducts.forEach(product => (totalPrice += product.price));
      return totalPrice;
    };

    this.calculateAverageProductPrice = function() {
      var averagePrice = this.totalPrice / this.listOfProducts.length;
      return parseFloat(averagePrice.toFixed(3));
    };

    this.mostExpensive = function() {
      var sortedProducts = listofproducts.sort(function(
        currentProduct,
        nextProduct
      ) {
        return currentProduct.price - nextProduct.price;
      });
      var mostExpensiveProduct = sortedProducts[sortedProducts.length - 1];
      return mostExpensiveProduct;
    };
  }

  function PaymentCard(balance, status, validUntil) {
    this.balance = parseFloat(balance);
    this.expDate = new Date(validUntil);
    this.isActive = function() {
      if (this.this.expDate.getTime() > Date.now()) {
        return "Card active.";
      } else {
        console.error("Card status is inactive.");
      }
    };
  }
  function checkoutAndBuy(shoppingBag, card) {
    var haveEnoughMoney = card.balance > shoppingBag.totalPrice();
    if (card.isActive() && haveEnoughMoney) {
        card.balance -= shoppingBag.totalPrice();
        console.log("Success Buy");
        console.log("Total cost " + shoppingBag.totalPrice());
        console.log("Remaining balance " + card.balance);
    } else {
        console.log("Unable to finish shopping");
    }

   var visa = new PaymentCard(1000.00, "10/10/2019");

   var banana = new Product("Banana", 123.50, "12/12/2019");
   var kiwi = new Product("Banana", 623.50, "12/12/2019");
   var myBag = new ShoppingBag();

   myBag.addProduct(banana);
   myBag.addProduct(kiwi);

   console.log(myBag.getMostExpensive());
   console.log(checkoutAndBuy(myBag, visa))

  }
})();
