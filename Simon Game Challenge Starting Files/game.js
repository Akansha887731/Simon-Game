var a=prompt("Hey there! what's your Name?","Gamer");
alert("Welcome "+a+" 😀 Press OK and Start the game. Good Luck!👍");
$("#rank").text("Keep Playing , "+a + "! You are at Novice level!");
var buttoncolor= ["red","blue","green","yellow"];
var gamepattern= [];
var userclickedpattern= [];

var start=false;
var level=0;

$(document).keypress(function(){
  if(!start){
    $("#level-title").text("Level"+level);
    $(".row").show();
    $("#footer").show();
    nextsequence();
    start=true;
  }
});

$(".btn").click(function(){
  var userchosencolor=$(this).attr("id");
  userclickedpattern.push(userchosencolor);
  playsound(userchosencolor);
  animatepress(userchosencolor);
  checkanswer(userclickedpattern.length-1);
});

function checkanswer(currentlevel){
  if(gamepattern[currentlevel]===userclickedpattern[currentlevel])
  {
    if(gamepattern.length===userclickedpattern.length)
    {
    setTimeout(function()
    {
      nextsequence();
    },1000);
    }
  }
  else{
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").html("<h1>Game Over.</h1><h4>Press a key to re-start</h4>");
    $("#rank").text("Duck🦆❗"+a+", You are Out ❗❗ ");
    $(".row").hide();
    $("#footer").hide();
    setTimeout(function(){
      $("body").removeClass("game-over");
    },400);
    startover();
  }
}

function startover(){
  gamepattern= [];
  level=0;
  start=false;
}

function nextsequence(){
userclickedpattern= [];
level++;
$("#level-title").text("Level : "+level);

if (level <= 2) { $("#rank").text("Keep Playing , "+a + "! You are at Novice level!👶");}
if (level >= 3 && level<=4) { $("#rank").text("Good, "+a+"! You are Graduate now! 👨‍🎓");}
if (level >= 5 && level<=6) { $("#rank").text("Well Done, "+a+"! You are an Expert in this game! 🧒");}
if (level >= 7 && level<=9) { $("#rank").text("Excellent, "+a+"! You are a Grand Master‍! 🤵");}
if(level >= 10) { $("#rank").text("Congratulations, "+a+"! You are a Ledend!🤴");}

var randomnumber = Math.floor(Math.random()*4);
var randomchosencolor=buttoncolor[randomnumber];
gamepattern.push(randomchosencolor);
$("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolor);
}

function playsound(name){
   var audio=new Audio("sounds/" + name + ".mp3");
   audio.play();
 }

function animatepress(currentcolor){
  $("#"+currentcolor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentcolor).removeClass("pressed")
  },100);
}
