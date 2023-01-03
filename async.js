// console.log("person1:shows ticket");
// console.log("person2:shows ticket");
// const wifeBringingTickets=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve('tickets')
//      },3000)
// })
// const getpopcorn=wifeBringingTickets.then((t)=>{
//    console.log('wife:I have tickets');
//    console.log('husband:We should go in');
//    console.log("wife:I am hungry I need popcorn");
//    return new Promise((resolve,reject)=>{
//       resolve(`popcorn ${t}`);
//    })
// })
// const butter=getpopcorn.then((t)=>{
//    console.log("husband:I got some popcorn")
//    console.log('husband:We should go in');
//    console.log("wife:I need butter");
//    return new Promise((resolve,reject)=>{
//       resolve(`butter ${t}`);
//    })
// })
// const getColdDrinks=butter.then((t)=>{
//    console.log("husband:I got coldDrinks")
//    console.log('husband:Anything else');
//    console.log("wife:no let's go");
//    return new Promise((resolve,reject)=>{
//       resolve(`coldDrinks ${t}`);
// })
// })
// butter.then((t)=>console.log(t));
// getpopcorn.then((t)=>console.log(t));
// getColdDrinks.then((t)=>console.log(t));
// console.log("person4:shows ticket");
// console.log("person5:shows ticket");


console.log("person1:shows ticket");
console.log("person2:shows ticket");
const preMovie= async()=>{
   const wifeBringingTickets=new Promise((resolve,reject)=>{
           setTimeout(()=>{
              resolve('tickets')
           },3000)
      })
      getpopcorn=wifeBringingTickets.then((t)=>{
        
            return new Promise((resolve,reject)=>{
               resolve(`popcorn`);
            })
          })
          const butter=getpopcorn.then((t)=>{
               return new Promise((resolve,reject)=>{
                  resolve(`butter`);
               })
            })
const getColdDrinks=butter.then((t)=>{
   return new Promise((resolve,reject)=>{
      resolve(`coldDrinks`);
})
})
      let tickets=await wifeBringingTickets;
          console.log(`wife:I have ${tickets}`);
          console.log('husband:We should go in');
          console.log("wife:I am hungry I need popcorn");
      
      let popcorn=await getpopcorn;
      console.log(`husband:I got some ${popcorn}`)
      console.log('husband:We should go in');
      console.log("wife:I need butter");

      let but=await butter;
      console.log(`husband:I got some ${but}`)
      
      let coldDrinks=await getColdDrinks;
      console.log(`husband:I got ${coldDrinks}`)
      console.log('husband:Anything else?');
      console.log("wife:no let's go we are getting late");
      console.log('husband:Thank you *grins*');
       return tickets;
}
preMovie().then((m)=>console.log(`person3:shows ${m}`))
console.log("person4:shows ticket");
console.log("person5:shows ticket");