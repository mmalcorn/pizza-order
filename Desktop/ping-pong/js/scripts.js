$(document).ready(function(){
  $("#ping-pong").submit(function(){
  event.preventDefault();
  var numberArray = [];
  var pingPong = [];
  // var userNumber = $(parseInt("#userNumber")).val();
  numberArray.push($("#userNumber").val());
  $("ul").append("<br>" + numberArray +"</br>");

  if (numberArray < 1 ){
    alert("Enter a number above 0")
  }


  for (var index = 1 ; index <= numberArray; index++){

  }

  if(numberArray % 15 === 0){
         pingPong.push("pingpong")
       }
       else if(numberArray % 5 === 0){
         pingPong.push("ping")
       }
       else if(numberArray % 3 === 0){
           pingPong.push("pong")
           }
       else{
         pingPong.push(index);
  // var concatArrays = numberArray.concat(pingPong);


  }
      //  (console.log(numberArray));
      //  (console.log(pingPong))

  })
});
