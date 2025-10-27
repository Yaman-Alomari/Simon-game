var buttonColours = ["red", "blue", "green", "yellow"];  
var gamePattern = []; 
var userClickedPattern = []; 


function nextSequence(){  
    var randomNumber = (Math.floor((Math.random() * 4)));
    var randomChosenColor = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColor); 
    var x = $("#" + randomChosenColor); 
    x.delay(10).fadeOut('fast').fadeIn('fast');
    playSound(randomChosenColor); 
}


 $(".btn").click(function(event){
    var userChosenColor = (event.currentTarget.id);
    userClickedPattern.push(userChosenColor); 
    playSound(this.id); 
    animatePress(userChosenColor);
    })

function playSound(name){
    if(name=='green'){
        var audio = new Audio("./sounds/green.mp3"); 
        audio.play();
    }
    else if (name=='red'){
        var audio = new Audio("./sounds/red.mp3"); 
        audio.play();
    }
    else if(name=='yellow'){
        var audio = new Audio("./sounds/yellow.mp3"); 
        audio.play();
    }
    else if(name=='blue'){
        var audio = new Audio("./sounds/blue.mp3"); 
        audio.play();
    }
}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 500);
}