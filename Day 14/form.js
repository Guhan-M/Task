let firstname=document.createElement("label");
firstname.innerHTML="Firstname "
let ifirst=document.createElement("input")
ifirst.setAttribute("class","firstname1")
document.body.append(firstname,ifirst);


let lastname=document.createElement("label");
lastname.innerHTML="Lastname "
let ilast=document.createElement("input")
ifirst.setAttribute("class","lastname1")
document.body.append(lastname,ilast)

let br3=document.createElement("br")
document.body.append(br3);
let br4=document.createElement("br")
document.body.append(br4);

let address=document.createElement("label");
address.innerHTML="Address"
let iaddress=document.createElement("input")
iaddress.setAttribute("class","address1")
document.body.append(address,iaddress);

let pincode=document.createElement("label");
pincode.innerHTML="Pincode"
let ipincode=document.createElement("input")
ipincode.setAttribute("class","pincode1")
document.body.append(pincode,ipincode);

let br5=document.createElement("br")
document.body.append(br5);
let br6=document.createElement("br")
document.body.append(br6);

let labelGender=document.createElement("label")
labelGender.innerHTML="Gender:<br><br>";

let iGenderM=document.createElement("input")
iGenderM.setAttribute( "type","radio")
iGenderM.setAttribute("id","Gender")
iGenderM.setAttribute("name","ansgender")
iGenderM.setAttribute("value","Male")

let Male=document.createElement("label");
Male.innerHTML="Male";
Male.setAttribute("for","Gender")



let iGenderF=document.createElement("input")
iGenderF.setAttribute( "type","radio")
iGenderF.setAttribute("id","Gender")
iGenderF.setAttribute("name","ansgender")
iGenderF.setAttribute("value","Female")

let FeMale=document.createElement("label");
FeMale.setAttribute("for","Gender")
FeMale.innerHTML="Female";

document.body.append(labelGender,iGenderM,Male,iGenderF,FeMale);

let br7=document.createElement("br")
document.body.append(br7);
let br8=document.createElement("br")
document.body.append(br8);

let state=document.createElement("label");
state.innerHTML="State"
let istate=document.createElement("input")
ifirst.setAttribute("class","state1")
document.body.append(state,istate);

let br9=document.createElement("br")
document.body.append(br9);
let br10=document.createElement("br")
document.body.append(br10);

let country=document.createElement("label");
country.innerHTML="Country"
let icountry=document.createElement("input")
icountry.setAttribute("class","state1")
document.body.append(country,icountry);

let br11=document.createElement("br")
document.body.append(br11);
let br12=document.createElement("br")
document.body.append(br12);

let form1=document.createElement("form")
form1.innerHTML="<h3>favorite foods</h3>"

let food1=document.createElement("input")
food1.setAttribute("type","checkbox")
food1.setAttribute("name","Food")
food1.setAttribute("id","food1")
food1.setAttribute("value","Biriyani")

let food1label=document.createElement("label")
food1label.setAttribute("for","food1")
food1label.innerHTML="Biriyani"

let food2=document.createElement("input")
food2.setAttribute("type","checkbox")
food2.setAttribute("name","Food")
food2.setAttribute("id","food2")
food2.setAttribute("value","Dosa")

let food2label=document.createElement("label")
food2label.setAttribute("for","food2");
food2label.innerHTML="Dosa";

let food3=document.createElement("input")
food3.setAttribute("type","checkbox")
food3.setAttribute("name","Food")
food3.setAttribute("id","food3")
food3.setAttribute("value","SambarRice")

let food3label=document.createElement("label")
food3label.setAttribute("for","food3")
food3label.innerHTML="SambarRice";

let food4=document.createElement("input")
food4.setAttribute("type","checkbox")
food4.setAttribute("name","Food")
food4.setAttribute("id","food4")
food4.setAttribute("value","LemonRice")

let food4label=document.createElement("label")
food4label.setAttribute("for","food4")
food4label.innerHTML="LemonRice";

let food5=document.createElement("input")
food5.setAttribute("type","checkbox")
food5.setAttribute("name","Food")
food5.setAttribute("id","food5")
food5.setAttribute("value","CurdRice")

let food5label=document.createElement("label")
food5label.setAttribute("for","food5")
food5label.innerHTML="CurdRice";

form1.append(food1,food1label,food2,food2label,food3,food3label,food4,food4label,food5,food5label)
document.body.append(form1)

let br13=document.createElement("br")
document.body.append(br13);
let br14=document.createElement("br")
document.body.append(br14);

let button1=document.createElement("button")
button1.setAttribute("class","button1")
button1.setAttribute("onclick","final()")
button1.innerHTML="Submit"
document.body.append(button1)

let br15=document.createElement("br")
document.body.append(br15);
let br16=document.createElement("br")
document.body.append(br16);

let table=document.createElement("table");
let thead=document.createElement("thead");
thead.setAttribute("id","headTable");
table.append(thead)
document.body.append(table)

var row1=thead.insertRow(0);
var cel1=row1.insertCell(0);
var cel2=row1.insertCell(1);
var cel3=row1.insertCell(2);
var cel4=row1.insertCell(3);
let cel5=row1.insertCell(4)
var cel6=row1.insertCell(5);
var cel7=row1.insertCell(6);
var cel8=row1.insertCell(7);
cel1.innerHTML="<b>Firstname</b>";
cel2.innerHTML="<b>Lastname</b>";
cel3.innerHTML="<b>Address</b>";
cel4.innerHTML="<b>Pincode</b>";
cel5.innerHTML="<b>Gender</b>"
cel6.innerHTML="<b>state</b>";
cel7.innerHTML="<b>country</b>";
cel8.innerHTML="<b>Fav food</b>";

function final(){
    let tbody=document.createElement("tbody")
    var row=tbody.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    let cell8=row.insertCell(7);
    cell1.textContent=ifirst.value;
    cell2.innerHTML=ilast.value;
    cell3.innerHTML=iaddress.value;
    cell4.innerHTML=ipincode.value;

    cell6.innerHTML=istate.value;
    cell7.innerHTML=icountry.value;
    var radios=document.getElementsByName(`ansgender`);
    for(i=0;i<radios.length;i++){
        if(radios[i].checked) 
        cell5.innerHTML=(radios[i].value)
    }
    let chet=document.getElementsByName("Food")
    let checkst="";
    total=0;
    for(i=0;i<chet.length;i++){
        if(chet[i].checked){
        total=total+1
        checkst+=(chet[i].value)+","
        }
    }
    if(total<2){
        alert("please select any two favorite food")
        chec.checked=false
    }
    cell8.innerHTML=checkst.slice(0,-1);
    table.append(tbody)
    // let re=document.getElementsByName("input")
    // re.reset();

}


