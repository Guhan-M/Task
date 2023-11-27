let div=document.createElement("div");
div.setAttribute("class","div1")
// div.innerHTML="<i class=`fa-thin fa-calculator fa-spin` style=`color: #050505;`></i>"
div.innerHTML="<h2 class=header1>CALCULATOR</h2>"
let inputbox=document.createElement("input")
inputbox.setAttribute("type","text")
inputbox.setAttribute("id","result")

let cbutton=document.createElement("button")
cbutton.innerHTML="C";
cbutton.setAttribute("value","c");
cbutton.setAttribute("onclick","clr()");

let button1=document.createElement("button")
button1.innerHTML="1"
button1.setAttribute("onkeydown","myfunction(event)");
button1.setAttribute("value","1");
button1.setAttribute("onclick","dis(`1`)");

let button2=document.createElement("button")
button2.innerHTML="2"
button2.setAttribute("onkeydown","myfunction(event)");
button2.setAttribute("value","2");
button2.setAttribute("onclick","dis(`2`)");

let button3=document.createElement("button")
button3.innerHTML="3"
button3.setAttribute("value","3");
button3.setAttribute("onkeydown","myfunction(event)");
button3.setAttribute("onclick","dis(`3`)");

let buttondi=document.createElement("button")
buttondi.innerHTML="/"
button3.setAttribute("value","/");
buttondi.setAttribute("onkeydown","myfunction(event)");
buttondi.setAttribute("onclick","dis(`/`)");

let button4=document.createElement("button")
button4.innerHTML="4"
button4.setAttribute("value","4");
button4.setAttribute("onkeydown","myfunction(event)");
button4.setAttribute("onclick","dis(`4`)");

let button5=document.createElement("button")
button5.innerHTML="5"
button5.setAttribute("value","5");
button5.setAttribute("onkeydown","myfunction(event)");
button5.setAttribute("onclick","dis(`5`)");

let button6=document.createElement("button")
button6.innerHTML="6"
button6.setAttribute("value","6");
button6.setAttribute("onkeydown","myfunction(event)");
button6.setAttribute("onclick","dis(`6`)");

let buttonmu=document.createElement("button")
buttonmu.innerHTML="*"
buttonmu.setAttribute("value","*");
buttonmu.setAttribute("onkeydown","myfunction(event)");
buttonmu.setAttribute("onclick","dis(`*`)");

let button7=document.createElement("button")
button7.innerHTML="7"
button7.setAttribute("value","7");
button7.setAttribute("onkeydown","myfunction(event)");
button7.setAttribute("onclick","dis(`7`)");

let button8=document.createElement("button")
button8.innerHTML="8"
button8.setAttribute("value","8");
button8.setAttribute("onkeydown","myfunction(event)");
button8.setAttribute("onclick","dis(`8`)");

let button9=document.createElement("button")
button9.innerHTML="9"
button9.setAttribute("value","9");
button9.setAttribute("onkeydown","myfunction(event)");
button9.setAttribute("onclick","dis(`9`)");

let buttonsb=document.createElement("button")
buttonsb.innerHTML="-"
buttonsb.setAttribute("value","-");
buttonsb.setAttribute("onkeydown","myfunction(event)");
buttonsb.setAttribute("onclick","dis(`-`)");

let button0=document.createElement("button")
button0.innerHTML="0"
button0.setAttribute("value","0");
button0.setAttribute("onkeydown","myfunction(event)");
button0.setAttribute("onclick","dis(`0`)");

let buttondt=document.createElement("button")
buttondt.innerHTML="."
buttondt.setAttribute("value",".");
buttondt.setAttribute("onkeydown","myfunction(event)");
buttondt.setAttribute("onclick","dis(`.`)");

let buttoneq=document.createElement("button")
buttoneq.innerHTML="="
buttoneq.setAttribute("value","=");
buttoneq.setAttribute("onkeydown","res()");
buttoneq.setAttribute("onclick","dis(`=`)");

let buttonpl=document.createElement("button")
buttonpl.innerHTML="+"
buttonpl.setAttribute("value","+");
buttonpl.setAttribute("onkeydown","myfunction(event)");
buttonpl.setAttribute("onclick","dis(`+`)");

let table=document.createElement("table");
table.setAttribute("id","td")
let row1=table.insertRow(0);
let row1c1=row1.insertCell(0);
row1c1.colSpan=3;
let row1c2=row1.insertCell(1);
row1c1.append(inputbox)
row1c2.append(cbutton)
row1.append(row1c1,row1c2)
table.append(row1)

let row2=table.insertRow(1);
let row2c1=row2.insertCell(0);
let row2c2=row2.insertCell(1);
let row2c3=row2.insertCell(2);
let row2c4=row2.insertCell(3);
row2c1.append(button1)
row2c2.append(button2)
row2c3.append(button3)
row2c4.append(buttondi)
row2.append(row2c1,row2c2,row2c3,row2c4)
table.append(row2)

let row3=table.insertRow(2);
let row3c1=row3.insertCell(0);
let row3c2=row3.insertCell(1);
let row3c3=row3.insertCell(2);
let row3c4=row3.insertCell(3);
row3c1.append(button4)
row3c2.append(button5)
row3c3.append(button6)
row3c4.append(buttonmu)
row3.append(row3c1,row3c2,row3c3,row3c4)
table.append(row3)

let row4=table.insertRow(3);
let row4c1=row4.insertCell(0);
let row4c2=row4.insertCell(1);
let row4c3=row4.insertCell(2);
let row4c4=row4.insertCell(3);
row4c1.append(button7)
row4c2.append(button8)
row4c3.append(button9)
row4c4.append(buttonsb)
row4.append(row4c1,row4c2,row4c3,row4c4)
table.append(row4)


let row5=table.insertRow(4);
let row5c1=row5.insertCell(0);
let row5c2=row5.insertCell(1);
let row5c3=row5.insertCell(2);
let row5c4=row5.insertCell(3);
row5c1.append(button0)
row5c2.append(buttondt)
row5c3.append(buttoneq)
row5c4.append(buttonpl)
row5.append(row5c1,row5c2,row5c3,row5c4)
table.append(row5)

div.append(table)

// let div=document.getElementsByClassName("div1");
// div.onkeydown=function(event){
//     if(event.onkeydown===13){
//         console.log("enter")
//     }
// }

function dis(val){
    document.getElementById("result").value +=val
}

// function solve(){
//     let x=document.getElementById("result").value;
//     let y=math.evaluate(x)
//     document.getElementById("result").value=y
// }

function clr(){
    document.getElementById("result").value=""
}
// function myfunction(event){
// if(event.key=="1"||event.key=="2"||event.key=="3"||event.key=="4"||event.key=="5"||
// event.key=="6"||event.key=="7"||event.key=="8"||event.key=="9"||event.key=="*"||event.key=="/"||event.key=="+"||event.key=="-")
// }

document.body.append(div)