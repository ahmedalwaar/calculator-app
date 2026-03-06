let display = document.getElementById("display");

function add(value){

display.value += value;

}

function calculate(){

try{

display.value = eval(display.value);

}

catch{

display.value = "خطأ";

}

}

function clearDisplay(){

display.value = "";

}

function sqrt(){

display.value = Math.sqrt(display.value);

}

function power(){

display.value += "**";

}

function sin(){

display.value = Math.sin(display.value);

}

function cos(){

display.value = Math.cos(display.value);

}

function tan(){

display.value = Math.tan(display.value);

}

function log(){

display.value = Math.log10(display.value);

}

function pi(){

display.value = Math.PI;

}