//Your code will be reviewed for the following objectives:
//
// Code meets standards from previous weeks.
// Objects drive business logic (in JavaScript, not jQuery).
// Constructors and prototypes are used successfully.
// Application works as expected.
// Plain English specs are included in README.
// Project is in a polished, portfolio-quality state.
// You are able to discuss the flow of your code and concepts behind it using correct terminology.

//Business Logic

$(document).ready(function(){
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var smallPizza = $("input:radio[name=small]:checked").val();
    var mediumPizza = $("input:radio[name=medium]:checked").val();
    var largePizza = $("input:radio[name=large]:checked").val();
    var toppingArray = [];
    $('input.toppings').each(function(){
      toppingArray.push($(this).is(':checked'));
    })
    });


    var sizeArray = document.getElementsByName('pizza-size');
    for (var i = 0; i <sizeArray.length; i++){
      return sizeArray + " is your size"
    }


function pizza(size, sizePrice, topping, toppingPrice){
  this.size = []
  this.sizePrice = 0
  this.topping = ["Chicken", "Sausage", "Pepperoni", "Green peppers", "Mushrooms"];
  this.toppingPrice = 0
  }

  pizza.prototype.sizeTotal=function(){
    if(this.size ==='small'){
      this.sizePrice += 9;
    }else if(this.size === 'medium'){
      this.sizePrice +=11;
    }else {
      this.sizePrice +=13;
    }
  }
  });




  // pizza.prototype.temporaryTotal{
  //   console.log(pizzaSize().sizePrice)
//   // }
// //TODO: make working instances of pizzas.  This is a test:
//   var testPizza = new pizza("small", 9, pizza[1], 2)







// function pizzaTopping(topping, toppingPrice){
//   this.topping = ["#chicken", "#sausage", "#pepperoni", "#greenpeppers", "#mushrooms"]
//   this.toppingPrice = [2, 1]
  //
  // var meatToppingTotal = pizzaSlice().sizePrice.map(function(topping){
  //   return number + 2;
  //   console.log(meatToppingTotal)
  // });





//TODO:loop through the toppings and depending on the selection, assign a value.
//
// NOT WORKING:
//for(index=0; index<pizzaTopping().topping.length;index++){
//   console.log("is this working?")
// }

// var pizzaSmall = new pizzaSize("Small", 9)
// var pizzaMedium = new pizzaSize("Medium", 11)
// var pizzaLarge = new pizzaSize("Large", 13)
//
//
//
// pizzaSize.prototype.sizeTotal = {
//
// }
//
// function pizzaToppings(cheese, meat, vegetable){
//   this.cheese = cheese;
//   this.meat = meat;
//   this.vegetable = vegetable;
// }
//
// pizza.prototype.pizzaCost(); {
//   //size plus toppings equal total
// }

//sizes will be either small, medium, or large pizza
//toppings will be chicken, sausage, peppperoni, ham, green peppers, mushrooms


//UI Logic
