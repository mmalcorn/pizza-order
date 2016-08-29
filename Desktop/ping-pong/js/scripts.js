$(document).ready(function(){
  $("#ping-pong").submit(function(){
  event.preventDefault();
  var numberArray = [];
  var userNumber = $("#userNumber").val();
  numberArray.push($("#userNumber").val());
  $("ul").append("<br>" + numberArray +"</br>");


  if (numberArray < 1 ){
    alert("Enter a number above 0")
  }else{
    //Display all numbers up to the number the user enters with a loop
}
  }

 if(numberArray % 15 === 0){
        numberArray.push("pingpong");
      }
      else if(numberArray % 5 === 0){
        numberArray.push("ping")
      }
      else if(numberArray % 3 === 0){
          numberArray.push("pong")
      }
})

});
