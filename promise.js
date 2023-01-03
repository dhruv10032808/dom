let posts=[
    {
        title:'Post 1',body:'This is post 1'
    }
];

// function getPost(){
//     setTimeout(()=>{
//      let output='';
//      for(var i=0;i<posts.length;i++){
//         output=output+`<li>${posts[i].title}:${posts[i].createdAt}</li>`;
//     }
//     document.body.innerHTML= output;
//     },1000);
// }


// function createPost(post){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         posts.push({...post,createdAt:new Date().getTime()});
//         const error=false;
//         if(!error){
//             resolve();
//         }else{
//             reject('Something went wrong');
//         }

//     },2000);
// });
// }

const z=async()=>{
    const create=(post)=>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Something went wrong');
            }
    
        },1000);
    }
        )};
   
    const getpost=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        let output='';
        for(var i=0;i<posts.length;i++){
           output=output+`<li>${posts[i].title}</li>`;
       }
       document.body.innerHTML= output;
       },1000);
       resolve();
    });
}
let createpost1=await create({title:"Post 2",body:"This is post 2"});
getpost();

const del=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length!=0){
            resolve(posts.pop());
            }
           else{
                reject('Array is Empty now');
            }
         },1000);
    });
    await del;
    getpost();
}
z().then(()=>console.log('done'));

// function create4thPost(post1){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         posts.push(post1);
//         const error=false;
//         if(!error){
//             resolve();
//         }else{
//             reject('Something went wrong');
//         }

//     },2000);
// });
// }

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(posts.length>0){
//         resolve(posts.pop());
//         }
//        else{
//             reject('Array is Empty now');
//         }
//      },1000);
// });

// }
// // createPost({title:'Post 3',body:'This is post 3'})
// // create4thPost({title:'Post 4',body:'This is post 4'}).then(()=>{
// // getPost();
// // deletePost().then(()=>{
// // getPost();
// //     deletePost().then(()=>{
// //         getPost();
// //         deletePost().then(()=>{
// //             getPost();
// //             deletePost().then(()=>{
// //                 getPost();
                
// //                 deletePost().then(()=>{})
// //                 .catch((err)=>{
// //                     console.log('Inside catch block', err );
// //                 })
// //             })
// //         })
// //     })
// // })
// // })
// // const promise1=Promise.resolve("Hello");
// // const promise2=10;
// // const promise3= new Promise((resolve,reject)=>{
// //     setTimeout(resolve,2000,"goodbye");
// // })
// // Promise.all([promise1,promise2,promise3]).then((values)=>{
// //     console.log(values)
// // });
// var user={
//     name:"Ram",
//     activityTime:"3rd Jan"
// };

// function updateLastUserActivityTime(){
//       return new Promise((resolve,reject)=>{
//            setTimeout(()=>{
//             user.activityTime=new Date().getTime();
//             resolve(user.activityTime);
//            },1000)
//       })
// }

// function updates(){
//     Promise.all([createPost(),updateLastUserActivityTime()]).then((data)=>{
//         console.log("ActivityTime after post:"+ data[1]);
//     })
// }
// console.log("ActivityTime before post was created:"+ new Date().getTime());
// createPost({title:'Post 3',body:'This is post 3'}).then(()=>{
//     updates()
//     deletePost()
//     })
//   console.log(posts);





