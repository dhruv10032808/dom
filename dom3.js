//console.log(document.getElementById('users'));
var a=document.querySelector('.items');

a.childNodes[1].innerText='Hello';
a.childNodes[1].style.backgroundColor='green';
a.childNodes[3].style.backgroundColor='yellow';
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    var name=nameInput.value;
    var email=emailInput.value;
    if(nameInput.value === '' || emailInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } 
      // Create new list item with user
      else{
      var li = document.createElement('li');
      var edit = document.createElement('button');
      edit.appendChild(document.createTextNode('EDIT'+'    '));
      var button = document.createElement('button');
      button.setAttribute('click',del(email));
      button.appendChild(document.createTextNode('X'));
      
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}   `));  
      // Append to ul
      li.appendChild(edit);
      li.appendChild(button);
      userList.appendChild(li);
      
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
       var obj={
        name,
        email
       }
      // const arr=[];
      // arr.push(`${nameInput.value}: ${emailInput.value}`);
       var str=JSON.stringify(obj);
      //setting value to local storage
      localStorage.setItem(obj.email,str);
      }
    }

  function del(emailId)
  {
    console.log(emailId);
    localStorage.removeItem(emailId);
  }
  