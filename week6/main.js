var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.getElementById('myDropdown').addEventListener('click', function(event) {
    if (e.target.className === 'checked'){
        let selectedOption = e.target.innerText;

        if(selectedOption === 'All Tasks')
            renderToDos(toDoList); // render everything
 
        else if(selectedOption === 'Active'){
            let activeToDos = toDoList.filter(todo => todo.completed === false);
            renderToDos(activeToDos); // only render the todos which have not been completed
        }

        else if(selectedOption === 'Completed'){
            let completedToDos = toDoList.filter(todo => todo.completed === true);
            renderToDos(completedToDos); // only render the todos which have not been completed
        }
    }
});