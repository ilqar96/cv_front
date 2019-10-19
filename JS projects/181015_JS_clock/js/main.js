var sec = document.getElementById("second");
var min = document.getElementById("min");
var hour = document.getElementById("hour");





// first way---------------
setInterval(increaseSecTick,1000);

// var secTick=0;
// var minTick=24;
// var hourTick=60;
function increaseSecTick(){
    var vaxt = new Date();
    var saniye = vaxt.getSeconds();
    var deqiqe = vaxt.getMinutes();
    var saat = vaxt.getHours();
   // if(secTick==360){
       var secTick=saniye*6;
       var minTick=deqiqe*6;
       var hourTick=saat*30+deqiqe*0.5;
        // if(minTick==360){
        //     minTick=0;

        //     if(hourTick==360){
        //         hourTick=0;
        //     }
        //     hourTick+=30;
        // }
        //minTick+=6;

        
    //}
    // secTick+=6;
    sec.style.transform='rotate('+secTick+'deg)';
    min.style.transform='rotate('+minTick+'deg)';
    hour.style.transform='rotate('+hourTick+'deg)'
}




// second way ------------------------------

// set inteerval . second and minit after 1 second hour after 1 minit increase
// setInterval(increaseSecTick,1000);
// setInterval(increaseMinTick,1000);
// setInterval(increaseHourTick,60000)
// // create variables
// var secTick=0;
// var minTick=0;
// var hourTick=0;
// // insert time  set time 
// function setClockTime(){
//     var valHour = document.getElementById("hourInput").value;
//     var valMin = document.getElementById("minInput").value;
//     // create degree variebles
//     var hourToDegree = 30*valHour + valMin*0.5;
//     var minToDegree=valMin*6;
//     // set to main tick  variables
//     hourTick=hourToDegree;
//     minTick=minToDegree;
//     secTick=0;
//     // add rotate property
//     min.style.transform='rotate('+minTick+'deg)';
//     hour.style.transform='rotate('+hourTick+'deg)';
// }
// // tick functions  for second minit and hour 
// function increaseSecTick(){
//     if(secTick==360){
//         secTick=0;
//     }
//     secTick+=6
//     sec.style.transform='rotate('+secTick+'deg)';
// };
// function increaseMinTick(){
//     if(minTick==360){
//         minTick=0;
//     }
//     minTick+=0.1
//     min.style.transform='rotate('+minTick+'deg)';
// };
// function increaseHourTick(){
//     if(hourTick==360){
//         hourTick=0;
//     }
//     hourTick+=0.5
//     hour.style.transform='rotate('+hourTick+'deg)';
// }



















 // if(minTick==60){
            //     hourTick+=5;
            // }
            // else if(minTick==120){
            //     hourTick+=5;
            // }
            // else if(minTick==180){
            //     hourTick+=5;
            // }
            // else if(minTick==240){
            //     hourTick+=5;
            // }
            // else if(minTick==300){
            //     hourTick+=5;
            // }
            // else if(minTick==360){
            //     hourTick+=5;
            // }