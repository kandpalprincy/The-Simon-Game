var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
var buttonColours=["red","blue","green","yellow"];

$(document).on("keypress",function(event){

    if(!started){
    nextSequence();
    started=true;
  }
});

$(".btn").on("click",function(){
  var userChosenColor= $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){

    if( gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
      {
        console.log("success");
      }

         if(userClickedPattern.length === gamePattern.length)
     {
       setTimeout(function(){
         nextSequence();},
         1000);
     }
   }
    else
       {
         console.log("wrong");
          playSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function(){
          $("body").removeClass("game-over");
        },200);
          $("h1").html("Game Over! Press any key to Restart.");
          startOver();
       }
   }


function nextSequence(){
  userClickedPattern=[];
  level++;
  $("h1").html("Level "+level);
  var randomNumber=Math.floor(4* Math.random());
  var randomChosenColor=buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  console.log(gamePattern);


}

function startOver(){
  started=false;
  level=0;
  gamePattern=[];
}

function playSound(name) {
  name = new Audio("sounds/"+name+".mp3");
  name.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");

   setTimeout(function(){$("#"+currentColor).removeClass("pressed");},70);
 }
