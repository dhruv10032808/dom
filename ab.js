var form=document.getElementById('form');
var list=document.getElementById('list');
var ex=document.getElementById('exp');
var de=document.getElementById('desc');
var cat=document.getElementById('abc');


form.addEventListener('submit',local)
function local(e){
    e.preventDefault();
    var expense=e.target.expense.value;
    var description=e.target.description.value;
    var category=e.target.Category.value;
   let obj={
    expense,
    description,
    category
   };
//    var p=JSON.stringify(obj);
//    localStorage.setItem(obj.expense,p);
   axios.post("https://crudcrud.com/api/0c9777d4bf2149aaa81651f21c47c1bd/ExpenseData",obj)
   .then((res)=>{
    onsubmit(obj)
    //console.log(res)
   })
   .catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+`<h4>Something went wrong</h4>`
})
    
}

window.addEventListener('DOMContentLoaded', () => {
    
        axios.get("https://crudcrud.com/api/0c9777d4bf2149aaa81651f21c47c1bd/ExpenseData")
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                onsubmit(res.data[i]);
            }
        })
        .catch((err)=>console.log(err));
        
     })
//})

function onsubmit(user){
    var btn=document.createElement('button');
    btn.appendChild(document.createTextNode('Edit Expense'));
    var btn2=document.createElement('button');
    btn2.appendChild(document.createTextNode('Delete Expense'));
    btn2.setAttribute('onclick',"del('"+user._id+"')");
    console.log(btn2);
    btn.setAttribute('onclick',"edit('"+user.expense+"')");
    var li=document.createElement('li');
    li.id=user._id;
    console.log(li);
    li.appendChild(document.createTextNode(user.expense +" "+ user.description+" "+ user.category));
    li.appendChild(btn) ;
    li.appendChild(btn2) ;
    list.appendChild(li);
}
function edit(li){
    localStorage.removeItem(li);
    const xyz=document.getElementById(li);
    list.removeChild(xyz);
    li.expense=document.getElementById('exp').value;
    li.description=document.getElementById('desc').value;
    li.category=document.getElementById('abc').value;
}
function del(userId){ 
    //localStorage.removeItem(li);
    axios.delete(`https://crudcrud.com/api/0c9777d4bf2149aaa81651f21c47c1bd/ExpenseData/${userId}`)
    .then((response)=>{
    const curr=document.getElementById(userId);
    list.removeChild(curr);
    })
    .catch((err)=>console.log(err));
}


