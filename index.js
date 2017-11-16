var Pomodoro = {
  startCount: 25,
  break : 5,
  countDown: 0,
  breakLength:5
}

$(document).ready(function(){
var sc= Pomodoro.startCount;
var bl = Pomodoro.breakLength;
$('#min').html(sc);
$("#breakTime").hide();
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
  disabledClock()
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
      }else if (countSec == 0) {
        clearInterval(countDown);
      breakHowLong();    //replace with function determining break length
      $("#play").click();
      };

  },1000)
  $("#pause").click(function () {
    clearInterval(countDown);
  console.log(sc);
  $("#play").attr("disabled", false);

  })
  $("#reset").click(reset)

})

$("#short").click(function(){
  bl = 5;
  console.log(bl);
});
$("#long").click(function(){
  bl = 10;
  console.log(bl);
});

$("#pomodoro").click(reset);

function breakHowLong() {
if (bl == 5){
  short()
} else if (bl = 10) {
  long()
}
};

function short(){
  $("#pause").click();
  console.log(sc);
  disabledClock()
  $(".button1").addClass("button1a");
  sc = 5;
  bl = 5;
  updateTimer()
  $("#breakTime").show();
};

function long(){
  $("#pause").click();
  disabledClock()
  $(".button1").addClass("button1a");
  sc = 10;
  bl=10;
  updateTimer()
  $("#breakTime").show();
};

function reset(){
  $("#pause").click();
  enabledClock()
  $(".button1").removeClass("button1a");
  sc = 25;
  updateTimer()
  $("#breakTime").hide();
}


function disabledClock() {
  $("#plusClock").attr("disabled", true);
  $("#minusClock").attr("disabled", true);
};

function enabledClock() {
  $("#plusClock").attr("disabled", false);
  $("#minusClock").attr("disabled", false);
};

function updateTimer(){
  $("#min").html(sc);
  $("#sec").html("00");
};



});
