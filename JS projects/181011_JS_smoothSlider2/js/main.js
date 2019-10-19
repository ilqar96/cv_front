var sliderRoll =document.getElementById("sliderRoll");
var rollWidth = sliderRoll.offsetWidth*(-1);
var increaseStep=0;
var stopPoint=0;
var myInter;
var myInter2;
var autoInter;
var btnRight = document.getElementsByClassName('right')[0];
var btnLeft = document.getElementsByClassName('left')[0];
var sliderConatiner = document.getElementById("sliderContainer");

//  event lists  button events and  auto moving events
btnRight.addEventListener("click", rightClick);
btnLeft.addEventListener("click",leftClick);

sliderConatiner.addEventListener("mouseover",stopInterval)
sliderConatiner.addEventListener("mouseout",startInterval)

// auto moving interval functions
function startInterval(){
    autoInter = setInterval(rightClick,3000);
}
function stopInterval(){
    clearInterval(autoInter);
}
startInterval();



// main functions
function smoothMoveRight(){
        // bug solition  --------
        btnRight.style.pointerEvents="none";
        setTimeout(function(){
            btnRight.style.pointerEvents="";
        },600)
        // -----------
        myInter = setInterval(moveeRight,10);
        stopPoint-=600;
        // function
        function moveeRight(){
            if(increaseStep==stopPoint){
                clearInterval(myInter);
            }else{
                increaseStep-=10;
                sliderRoll.style.left=increaseStep+"px";
            }
        }
}
function smoothMoveLeft(){
    // bug solition
        btnLeft.style.pointerEvents="none";
        setTimeout(function(){
            btnLeft.style.pointerEvents="";
        },600)
    //--------------------
        myInter2 = setInterval(moveeLeft,10);
        stopPoint+=600;
        //function
        function moveeLeft(){
            if(increaseStep==stopPoint){
                clearInterval(myInter2);
            }else{
                increaseStep+=10;
                sliderRoll.style.left=increaseStep+"px";
            }
        }
}

// click functions 
function rightClick(){
    if(stopPoint==(rollWidth+600)){
        stopPoint=0;
        increaseStep=0;

        smoothMoveRight();
    }
    else{
        smoothMoveRight();
}
};

function leftClick(){
    if(stopPoint==0){   
        stopPoint=rollWidth+600;
        increaseStep=rollWidth+600;

        smoothMoveLeft();
    }
    else{
        smoothMoveLeft();
    }
    


};
