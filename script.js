var ul = document.getElementById('list')
var li;

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

function addItem() {
    var input=document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);
    
 if(item ===''){
     alert('Enter some value');
    
//return false;  
 }else{
     li = document.createElement('li');//create li
     var checkbox = document.createElement('input'); //create checkbox
     checkbox.type='checkbox'; //define type
     checkbox.setAttribute('id','check')//set id

     var  label =document.createElement('label');
     label.setAttribute('for','item')//optional

     //add these element in web page
     ul.appendChild(label);
     li.appendChild(checkbox);
     label.appendChild(textNode);
     li.appendChild(label);
     ul.insertBefore(li,ul.childNodes[0]);
     li.className ='visual';

     setTimeout(() => {
         li.className ='visual';
     }, 2);

     input.value =" ";
 }
}

function removeItem() {
    li = ul.children
    for (let i = 0; i < li.length; i++) {
        while (li[i] &&li[i].children[0].checked) {
            ul.removeChild(li[i])
        }   
    }
}