const m = moment();
document.getElementById("currentDay").innerHTML= m.toString();
var hour = m.hour();


function init(){
// tests if hour vs text block hour. if equal change text box green, if in past change text box red. if in future, change text box blue.
     if (hour == 9) {
        document.getElementById("text9").style.backgroundColor = "green";
    };
     if (hour > 9) {
        document.getElementById("text9").style.backgroundColor = "red";
    };
    if(hour < 9){
        document.getElementById("text9").style.backgroundColor = "blue";
    };
    if (hour == 10) {
        document.getElementById("text10").style.backgroundColor = "green";
    };
    if (hour > 10) {
        document.getElementById("text10").style.backgroundColor = "red";
    };
    if(hour < 10){
        document.getElementById("text10").style.backgroundColor = "blue";}
    if (hour == 11) {
        document.getElementById("text11").style.backgroundColor = "green";
    } if (hour > 11) {
        document.getElementById("text11").style.backgroundColor = "red";
    }if(hour < 11){
        document.getElementById("text11").style.backgroundColor = "blue";
    } if (hour == 12) {
        document.getElementById("text12").style.backgroundColor = "green";
    } if (hour > 12) {
        document.getElementById("text12").style.backgroundColor = "red";
    }if(hour < 12){
        document.getElementById("text12").style.backgroundColor = "blue";
    } if (hour == 13) {
        document.getElementById("text13").style.backgroundColor = "green";
    }if (hour > 13) {
        document.getElementById("text13").style.backgroundColor = "red";
    } if(hour < 13){
        document.getElementById("text13").style.backgroundColor = "blue";
    } if (hour == 14) {
        document.getElementById("text14").style.backgroundColor = "green";
    }if (hour > 14) {
        document.getElementById("text14").style.backgroundColor = "red";
    }if(hour < 14){
        document.getElementById("text14").style.backgroundColor = "blue";
    } if (hour == 15) {
        document.getElementById("text15").style.backgroundColor = "green";
    }if (hour > 15) {
        document.getElementById("text15").style.backgroundColor = "red";
    }if(hour < 15){
        document.getElementById("text15").style.backgroundColor = "blue";
    } if (hour == 16) {
        document.getElementById("text16").style.backgroundColor = "green";
    }if (hour > 16) {
        document.getElementById("text16").style.backgroundColor = "red";
    }if(hour < 16){
        document.getElementById("text16").style.backgroundColor = "blue";
    } if (hour == 17) {
        document.getElementById("text17").style.backgroundColor = "green";
    }if (hour > 17) {
        document.getElementById("text17").style.backgroundColor = "red";
    } if(hour < 17){
        document.getElementById("text17").style.backgroundColor = "blue";
    }



};

//testing api results
console.log(m);
console.log(hour);
console.log(document.getElementById("test").value);

// $("#test").css( "border", "3px solid red" );
// document.getElementById("text9").style.backgroundColor = "red";

init();