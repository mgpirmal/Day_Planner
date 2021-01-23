const m = moment();
document.getElementById("currentDay").innerHTML= m.toString();
var hour = m.hour();
var input9 = document.querySelector("#text9");
var input10 = document.querySelector("#text10");
var input11 = document.querySelector("#text11");
var input12 = document.querySelector("#text12");
var input13 = document.querySelector("#text13");
var input14 = document.querySelector("#text14");
var input15 = document.querySelector("#text15");
var input16 = document.querySelector("#text16");
var input17 = document.querySelector("#text17");
var button9 = document.querySelector("#button9");
var button10 = document.querySelector("#button10");
var button11 = document.querySelector("#button11");
var button12 = document.querySelector("#button12");
var button13 = document.querySelector("#button13");
var button14 = document.querySelector("#button14");
var button15 = document.querySelector("#button15");
var button16 = document.querySelector("#button16");
var button17 = document.querySelector("#button17");



function init(){
// tests hour vs text block hour. if equal change text box green, if in past change text box red. if in future, change text box blue.
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
// init() will start render function
    renderBlock();

};


function saveBlock() {
    // Save related form data as an object
    var plans = {
      text9: text9.value.trim(),
      text10: text10.value.trim(),
      text11: text11.value.trim(),
      text12: text12.value.trim(),
      text13: text13.value.trim(),
      text14: text14.value.trim(),
      text15: text15.value.trim(),
      text16: text16.value.trim(),
      text17: text17.value.trim(),
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("plans", JSON.stringify(plans));
  }
  
  function renderBlock() {
    // Use JSON.parse() to convert text to JavaScript object
    var plansFinal = JSON.parse(localStorage.getItem("plans"));
    // Check if data is returned, if not exit out of the function
    if (plansFinal !== null) {
    document.getElementById("text9").innerHTML = plansFinal.text9;
    document.getElementById("text10").innerHTML = plansFinal.text10;
    document.getElementById("text11").innerHTML = plansFinal.text11;
    document.getElementById("text12").innerHTML = plansFinal.text12;
    document.getElementById("text13").innerHTML = plansFinal.text13;
    document.getElementById("text14").innerHTML = plansFinal.text14;
    document.getElementById("text15").innerHTML = plansFinal.text15;
    document.getElementById("text16").innerHTML = plansFinal.text16;
    document.getElementById("text17").innerHTML = plansFinal.text17;
    // document.getElementById("saved-grade").innerHTML = lastGrade.grade;
    // document.getElementById("saved-comment").innerHTML = lastGrade.comment;
    // } else {
      return;
    }
  }
  // clicking button starts save funnction

  button9.addEventListener("click", function(event) {
  event.preventDefault();
  saveBlock();
  
  });

  button10.addEventListener("click", function(event) {
    event.preventDefault();
    saveBlock();
    
    });
  
button11.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
      
 });
 button12.addEventListener("click", function(event) {
         event.preventDefault();
         saveBlock();
     });
     button13.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
    });
    button14.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
    });
    button15.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
    });         
    button16.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
    });
    button17.addEventListener("click", function(event) {
        event.preventDefault();
        saveBlock();
    });

//testing api results
console.log(m);
console.log(hour);

init();