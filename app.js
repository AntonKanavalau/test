import {formClass} from "./script/formClass.js"

/*Elements*/
const form = document.forms['formSignUp'];
/*
form.onsubmit = validateForm;
*/

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const nationality = document.getElementById('nationality');
const eMail = document.getElementById('eMail');
let password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');

const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', checkForm);

/*First latter uppercase*/
firstName.addEventListener("input", toUpperCase);
lastName.addEventListener("input", toUpperCase);

function toUpperCase() {
	this.value = this.value[0].toUpperCase() + this.value.slice(1);
}

/*btnSubmit.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('clicked on validate');
})*/

function validateForm() {
	event.preventDefault();
	console.log('clicked on validate');
	console.log('firstName: ', firstName.value);
	console.log('lastName: ', lastName.value);
	console.log('nationality: ', nationality.value);
	console.log('eMail: ', eMail.value);
	console.log('password: ', password.value);
	console.log('confirmPass: ', confirmPass.value);
}

/*const formInput = form.getElementsByTagName('input')*/
const formInput = [...form.getElementsByTagName('input')];

console.log(formInput);

/*
/[A-Za-zА-Яа-я0-9]/gm.test(char.value)
*/


let checkPassUpper = (s) => /[A-ZА-Я]/gm.test(s);
let checkPassNumber = (s) => /[0-9]/gm.test(s);

function checkPassword(char){
	if(checkPassUpper(char.value) === true  && checkPassNumber(char.value) === true) {
		console.log("true?");
		document.querySelector(`.${char.parentElement.classList[0]}`).classList.remove('redLine');
	} else {
		document.querySelector(`.${char.parentElement.classList[0]}`).classList.add('redLine');
	}

}

function checkForm() {


/*
	let password = document.getElementById('password');
*/
	for (let char of formInput) {
		if(char.type === password){
			checkPassword(char);
		}

		if(char.value.length > 0){
						console.log(char);
			checkPassword(char);
/*
				console.log(char.value.length);
*/
						/*		console.log(char.parentElement);
						console.log(char.parentElement.classList[0]);*/

			document.querySelector(`.${char.parentElement.classList[0]}`).classList.remove('redLine');

		} else if (char.type === password){
			checkPassword(char);
}
/*
			console.log(password.value);
			console.log(char.value);*/

		else {
			checkPassword(char);
			document.querySelector(`.${char.parentElement.classList[0]}`).classList.add('redLine');
		}
	}

}