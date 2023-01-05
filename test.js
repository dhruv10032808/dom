var list=document.getElementById("list");
var form=document.getElementById("form");
var a=document.getElementById("1");
var b=document.getElementById("2");
var c=document.getElementById("3");
var y=document.getElementById("all");

form.addEventListener("submit",crud);
function crud(e){
    e.preventDefault();
 var price=document.getElementById("price").value;
var dish=document.getElementById("dish").value;
var tables=document.getElementById("tables").value;
    var obj={
        price,
        dish,
        tables
    };
axios.post("https://crudcrud.com/api/df4c1855653e4b7d9f348706fce4edae/HotelData",obj)
.then((res)=>{
    add(obj);
})
.catch((err)=>console.log(err));
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/df4c1855653e4b7d9f348706fce4edae/HotelData")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            add(res.data[i]);
        }
    })
    .catch((err)=>console.log(err))
})
function add(user){
    
    var li=document.createElement('li')
    var p=document.createTextNode(`${user.price}-${user.dish}-${user.tables}   `);
    li.id=user._id;
    li.appendChild(p);
    var btn=document.createElement("button")
    btn.setAttribute("onclick","del('"+user._id+"')");
    btn.appendChild(document.createTextNode("Delete Order"));
    li.appendChild(btn);
    if(user.tables=="Table 1")
    {
        y.insertBefore(li,b);
    }
    else if(user.tables=="Table 2")
    {
        y.insertBefore(li,c)
    }
    else{
        y.appendChild(li);
    }
    
}

//console.log(y)
function del(userId){ 
    axios.delete(`https://crudcrud.com/api/df4c1855653e4b7d9f348706fce4edae/HotelData/${userId}`) 
   .then((response)=>{
    const x=document.getElementById(userId);
    y.removeChild(x);
   })
   .catch((err)=>console.log(err));
}
