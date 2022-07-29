console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been sumbitted successfully');
}

function pictureOver(evt) {
	evt.preventDefault();

	alert('You are admirable!')
}


let duckPick = document.querySelector("img")
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

duckPick.addEventListener('mouseover', pictureOver)