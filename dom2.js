var form=document.getElementById('addForm');
var newitem =document.getElementById('items');
newitem.addEventListener('click',remove);
form.addEventListener('submit', addItem);
function addItem(e){ 
e.preventDefault();

var newItem=document.getElementById('item').value;
var li=document.createElement('li');
li.className = 'list-group-item';
console.log(li);
li.appendChild(document.createTextNode(newItem));
//create delete  button
var del=document.createElement('button');
del.className="btn btn-danger btn-sm float-right delete";
del.appendChild(document.createTextNode('X'));
li.appendChild(del);
newitem.appendChild(li);
}
function remove(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
        var li=e.target.parentElement;
    newitem.removeChild(li);}
    }
}