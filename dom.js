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
//var l=document.getElementsByTagName('li');

//var q=l[2];
//console.log(q);
//q.style.backgroundColor="green";


//for(var i=0;i<l.length;i++)
//{
    //l[i].style.backgroundColor="blue";
//}
//using querySelector
// var item=document.querySelector('.list-group');
// console.log(item.childNodes);
// console.log(items.childNodes[1]);
// var a=item.lastElementChild;
// console.log(a);
// var third=item.childNodes[3];
// third.style.backgroundColor='green';
// item.childNodes[5].style.color="white";

// var items=document.querySelectorAll('li:nth-child(2)');
// console.log(items);
// (items[0]).style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }


// TRAVERSING DOM
var i=document.querySelector('#items');
//parent element
i.parentElement.style.backgroundColor='purple';
//child nodes
console.log(i.childNodes);
//last elementchild and first elementchild
i.lastElementChild.style.color="red";
i.firstElementChild.textContent="Earth";
//last child and first child
console.log(i.lastChild);
console.log(i.firstChild);
//children
console.log(i.children);
i.children[2].innerHTML="<h3> Shop</h3>";
//nextsibling and previoussibling
console.log(i.nextSibling);
console.log(i.previousSibling);
//nextelementsibling and previouselementsibling
i.nextElementSibling.style.color="yellow";
i.previousElementSibling.innerText="orange";
//create element
var h=document.createElement('h4');
h.className="new";
h.id="create";
//set attribute
h.setAttribute('title','new element');
//text node
var t=document.createTextNode('HEllo');
//add text node to h
h.appendChild(t);
//insert element in dom before item lister
var a=document.querySelector('header .container')
var b=document.querySelector('header h1')
a.insertBefore(h,b);
//insert element before item 1
var p=document.querySelector('div #items');
var q=document.querySelector('ul .list-group-item');
p.insertBefore(h,q);
//output of element
//console.log(h);


