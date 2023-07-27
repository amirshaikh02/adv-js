// function getTwoNumber(number1,number2,callback){
//     if (typeof number1==='number'&& typeof number2==='number') {
//         callback(number1,number2)
//     }else{
//         console.log("Please enter Vaild Data Type");
//     }
// }
// // function add(num1,num2){
// //     console.log(num1+num2);
// // }

// getTwoNumber(4, 4, (num1,num2)=>{
//     console.log(num1+num2);
// });

//--------->

// const array=["Apple","Mangoes","Banana","Oranges"];
// array.map(function(item){
//     console.log(item);
// })

// const dosomething=(callback)=>{
// setTimeout(() => {
    
// }, 3000);
// }

// const ran= random %2 == 0;
// const promise=new Promise((resolve,reject)=>{
//     const random=Math.floor(Math.random()*10)+1;
//     console.log(random);

// }) 
// if (random %2 == 0) {
//     resolve("you get burgre")
// }else{
//     reject("you not get burger");
// }

// console.log(promise)
// promise.then((result)=>{
//     console.log(result)

// }).catch((error)=>{
//     console.log(error)

// })



// CallBack hell->
const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
const heading6=document.querySelector(".heading6")
const heading7=document.querySelector(".heading7")

// setTimeout(() => {
//     heading1.textContent="1"         
//     heading1.style.color="violet";

//     setTimeout(() => {
//         heading2.textContent="2"
//         heading2.style.color="purple"
        
//         setTimeout(() => {
//             heading3.textContent="3"
//             heading3.style.color="red" 

//             setTimeout(() => {
//                 heading4.textContent="4"
//                 heading4.style.color="pink"

//                 setTimeout(() => {
//                     heading5.textContent="5"
//                     heading5.style.color="green"
                    
//                     setTimeout(() => {
//                         heading6.textContent="6"
//                         heading6.style.color="blue" 

//                         setTimeout(() => {
//                             heading7.textContent="7"
//                             heading7.style.color="brown" 
//                         }, 1000);  
//                     }, 3000);  
//                 }, 2000);  
//             }, 1000); 
//         }, 2000);  
//     }, 2000);  
// }, 1000);


// using function

function changetextcolor(element,text,color,time,onSuccess,onFailure){
setTimeout(() => {
    if(element){
        element.textContent=text;
        element.style.color=color;

        if(onSuccess){
            onSuccess();
        }
    }else{
        if (onFailure) {
            
            onFailure();
        }
    }
}, time);

}
changetextcolor(heading1,"one","green",1000,()=>{
    changetextcolor(heading2,"two","blue",1000,()=>{
        changetextcolor(heading3,"three","red",1000, ()=>{
    
        },()=>{console.log("heading 3 is not exist");})
    },()=>{console.log("heading 2 is not exist");}) 
},()=>{console.log("heading 1 is not exist")})

