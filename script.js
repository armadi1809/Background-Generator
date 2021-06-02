var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var items = document.getElementsByTagName("li");
var ul = document.querySelector("ul");
var deleteButt = document.querySelectorAll('.delete');



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var butt = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function(){

	if (this.classList.contains('done')) {
		this.classList.remove('done');
	}
	else{
		this.classList.add('done');
	}
	})
	butt.appendChild(document.createTextNode("Delete"));


	li.appendChild(butt);
	butt.addEventListener("click", function(){
	console.log(this.parentNode)
	this.parentNode.remove();
	})
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for ( j = 0; j < deleteButt.length; j++) {
		deleteButt[j].addEventListener("click", function(){
		console.log(this.parentNode)
		this.parentNode.remove();
	})
}

for(i = 0; i < items.length; i++){
	items[i].addEventListener("click", function(){

	if (this.classList.contains('done')) {
		this.classList.remove('done');
	}
	else{
		this.classList.add('done');
	}
	})
}
