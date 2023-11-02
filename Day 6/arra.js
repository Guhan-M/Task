var request=new XMLHttpRequest();
request.open(`GET`,`https://restcountries.com/v3.1/all`);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response)
    // console.log(data)
   

// a):----
// let cl=data.filter((index)=>index.region=="Asia")
// console.log(cl)


// b):----
// let population=data.filter((index)=>(index.population<200000))
// console.log(population)


// c):----
// let fin=data.forEach(element => {
// console.log((element.name),(element.flag),(element.capital))
// });


// d):----
// let tot=data.reduce((acc,current)=>acc+current.population,0)
// console.log(tot)


// // e):----
//     data.filter(index=>{
//       for (let key in index.currencies){
//            if(index.currencies[key].name==="United States dollar"){
//                  console.log(index,index.name)
//                    }
//                }
//         })


}