$(document).ready(function(){
  $("#ping-pong").submit(function(){
  event.preventDefault();
  var numberArray = [];
  var userNumber = $("#userNumber").val();
  numberArray.push($("#userNumber").val());



  var pingPong = function(userInput) {
      if (userInput < 1 ){
        alert("Enter a number above 0")
      }

  }


  if(numberArray % 15 === 0){
    numberArray.push("pingpong")
  }
  else if(numberArray % 5 === 0){
    numberArray.push("ping")
  }
  else if(numberArray % 3 === 0){
    numberArray.push("pong")
  }
  (console.log(numberArray))

})






//TODO: Numbers need to show in an unordered list.  Right now they display right next to each other.


  });
