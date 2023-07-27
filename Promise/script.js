// const market=['Gas','veg','water','salt','rice'];

// const RiceCook= new Promise((resolve,reject)=>{
//     if (market.includes('Gas')&& market.includes('salt')&& market.includes('water')&&market.includes('rice')) {
//         resolve("Rice will Made")        
//     }else{
//         reject("you cannot cook")
//     }

// })//produce

//consume
// RiceCook.then(()=>{
//     console.log("Yes! you can eat",RiceCook);
//     }
//     ,
//     (error)=>{
//         console.log(error,RiceCook);
//     }
// )

// then->to print the result coming from fullfilled state  of promises-
// catch =>it to print the error message coming from rejected state of promise object

//---------------

//function returning promise

function ricePromise(){
    const market=['Gas','veg','water','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(market.includes('Gas')&& market.includes('salt')&& market.includes('water')&&market.includes('rice')){
            resolve('you can cook')
        }else{
            reject('you cannot cook')
        }
    })  
}

ricePromise().then((riceget)=>{
    console.log("you can eat",riceget)
}).catch((error)=>{
    console.log(error);
})
