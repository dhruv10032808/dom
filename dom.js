console.log("hello");
console.log(document.title);
console.log(document.head);
document.title="red";
console.log(document.forms);
console.log(document.images);
//getElementById
//var a=document.getElementById("items");
//console.log(a);
//a.innerText="orange";
var h=document.getElementById("header-title");
//h.innerHTML='<h5>Vamos</h5>';
h.style.border='2px solid black';
var n=document.querySelector(".title");
n.style.color='green';
n.style.fontWeight='bold';