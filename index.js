// Javascript logic to enable CRUD logic in the Todo app.

// Iterate through all the list tems and append a 
// "close" button.
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    // var txt = document.createTextNode("\u00D7");
    var txt = document.createTextNode("\u2713");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// When a close button is clicked, hide the 
// current list item.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// When the list item is clicked, add a "checked" symbol.
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

// When "add" button clicked, append a new list item
// to the existing list, even if empty.
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

    var span = document.createElement("span");
    var txt = document.createTextNode("\u2713");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}