$(document).ready(function(){
  $("#ping-pong").submit(function(){
  event.preventDefault();
  var userNumber = $("#userNumber").val();
  var numberArray = [];
  var start = 0;

  numberArray.push($("#userNumber").val());
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






//TODO: Numbers need to show in an unordered list.  Right now they display right next to each other.
$("#show-numbers").append(numberArray);




})
  });
