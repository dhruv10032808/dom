
let posts=[
    {
        title:'Post 1',body:'This is post 1',createdAt:new Date().getTime()
    },
    {
        title:'Post 2',body:'This is post 2',createdAt:new Date().getTime()
    }
];
let intervalTime=0;
function getPost(){
    clearInterval(intervalTime);
    intervalTime=setInterval(()=>{
    setTimeout(()=>{
     let output='';
     for(var i=0;i<posts.length;i++){
        output=output+`<li>${posts[i].title} :${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago...</li>`;
    }
    document.body.innerHTML= output;
    },2000);
},1000);
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2500)
}
function create4thPost(post1,callback){
    setTimeout(()=>{
        posts.push({...post1,createdAt:new Date().getTime()});
        callback();
    },6000)
}
getPost();
createPost({title:'Post 3',body:'This is post 3'},getPost);
create4thPost({title:'Post 4',body:'This is post 4'},getPost);