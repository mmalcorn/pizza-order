//Constructor for pizza object - may have too many properties
  function Pizza(userSizeSelection){
    this.size = userSizeSelection;
    this.toppings = [];
    this.price = 0;
  }
//Creates a method to calculate the price of sm, md, or lg pizza
    Pizza.prototype.findPrice = function(size){
      if(this.size==='small'){
        this.price += 9;
      }
        else if(this.size === 'medium'){
          this.price += 11;
        }
        else{
          this.price += 13;
        }
      if(this.toppings){
        this.toppings += 2
      }
    }

  $(document).ready(function(){
  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  var sizeSelection = $("input:radio[name=pizza-size]:checked").val();
  var toppingSelection = document.getElementsByName("topping")
  for (var i = 0; i < toppingSelection.length; i++) {
    var userTopping = [toppingSelection[i].value];
    if(toppingSelection[i].checked){
      userTopping.push(toppingSelection[i].checked);
      console.log(userTopping)
      console.log(toppingSelection)
    }
  }
  var pizzaToppingOutput = new Pizza(sizeSelection);
  //Why is it logging pineapple each time?  Pineapple is logging each time in the constructor's topping array property when the
  //below push method runs
  //Right now each topping that is selected is showing as being
  //a separate Array with index starting at 0. This isn't cool.
  pizzaToppingOutput.toppings.push(userTopping);
  pizzaToppingOutput.findPrice();
  console.log(pizzaToppingOutput)
})
  });
