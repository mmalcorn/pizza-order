$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
  event.preventDefault();

  var sizeSelection = $("input:radio[name=pizza-size]:checked").val();
  (console.log(sizeSelection))
//TODO: Grab values from checkboxes.  Below isn't working:
  var toppingSelection = document.getElementsByName("topping");
  var i;
  for (i = 0; i < toppingSelection.length; i++) {
    if (toppingSelection[i].type == "checkbox") {
        toppingSelection[i].checked = true;
    }
}
  (console.log(toppingSelection))


//Constructor for pizza object - may have too many properties
  function Pizza(size){
    this.size = size;
    this.sizePrice = 0
    this.topping = true || false;
    this.toppingPrice = true || false;
  }

//Creates a method to calculate the price of sm, md, or lg pizza
    Pizza.prototype.sizeTotal = function(sizeResult){
      if(this.size==='small'){
        this.sizePrice += 9;
      }
      else if(this.size === 'medium'){
        this.sizePrice += 11;
      }
      else{
        this.sizePrice += 13;
      }
    }
  //Can't successfully log a price
    (console.log(this.sizePrice))







  })
  });
