//console.log("hello");
//console.log(document.title);
//console.log(document.head);
//document.title="red";
//console.log(document.forms);
//console.log(document.images);
//getElementById
//var a=document.getElementById("items");
//console.log(a);
//a.innerText="orange";
//var h=document.getElementById("header-title");
//h.innerHTML='<h5>Vamos</h5>';
//h.style.border='2px solid black';
//var n=document.querySelector(".title");
//n.style.color='green';
//n.style.fontWeight='bold';
//#getElementByClassName
//console.log(document.getElementsByClassName('list-group-item'));
//var l=document.getElementsByClassName('list-group-item');
//var y=document.getElementById('items');
//var q=l[2];
//console.log(q);
//q.style.backgroundColor="green";
//y.style.fontWeight='bold';

//for(var i=0;i<l.length;i++)
//{
    //l[i].style.backgroundColor="blue";
//}

//#getElementByTagName
var l=document.getElementsByTagName('li');

var q=l[2];
console.log(q);
q.style.backgroundColor="green";


for(var i=0;i<l.length;i++)
{
    l[i].style.backgroundColor="blue";
}
