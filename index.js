var Pomodoro = {
  startCount: 25,
  break : 5,
  countDown: 0,
}

$(document).ready(function(){
var sc= Pomodoro.startCount
$('#min').html(sc);

$("#plusClock").click(function(){         //timer goes up
  sc += 1;
  $("#min").html(sc);
})
$("#minusClock").click(function(){        //timer goes down and stops at 1
  if(sc > 1){
  sc -= 1;
  $("#min").html(sc);
      }
      console.log(sc)
})
$("#play").click(function() {                   //play onClick deactivate play +&- buttons
  $("#play").attr("disabled", true);
  $("#plusClock").attr("disabled", true);
  $("#minusClock").attr("disabled", true);
  console.log(sc)
  var countSec = (sc*60)-1;
  $("#sec").html(countSec%60);
  $("#min").html(Math.floor(countSec/60));    //update sec onclick for smoother UI
  console.log(countSec);
  countDown = setInterval(function(){
    if (countSec>0){
      countSec -= 1
      console.log(countSec);
      sc = countSec/60;                               //update sc but in minutes
      if(countSec%60<10){
        $("#sec").html("0"+countSec%60);
      }else{
      $("#sec").html(countSec%60);
      $("#min").html(Math.floor(countSec/60))};
    }else if (countSec === 0) {
      alert("Take A Break!")
      clearInterval(countDown);
    }
  },1000)
  $("#pause").click(function () {
    clearInterval(countDown);
  console.log(sc);
  $("#play").attr("disabled", false);
  })
  $("#reset").click(function(){
    clearInterval(countDown);
    $("#min").html(25);
    $("#sec").html("00");
   sc = 25
    console.log(sc);
    $("#play").attr("disabled", false);
    $("#plusClock").attr("disabled", false);
    $("#minusClock").attr("disabled", false);
  })

})

$("#short").click(function(){
  $("#plusClock").attr("disabled", true);
  $("#minusClock").attr("disabled", true);
  $(".button1").addClass("button1a");
  sc = 5;
  $("#min").html(5);
});
$("#long").click(function(){
  $("#plusClock").attr("disabled", true);
  $("#minusClock").attr("disabled", true);
  $(".button1").addClass("button1a");
  sc = 10;
  $("#min").html(10);
});
$("#pomodoro").click(function(){
  $("#plusClock").attr("disabled", false);
  $("#minusClock").attr("disabled", false);
  $(".button1").removeClass("button1a");
  sc = 25;
  $("#min").html(25);
});


});
