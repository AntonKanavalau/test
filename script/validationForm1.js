/*Variables*/
import {submitForm} from "./submitForm.js";

export const form = document.forms['formSignUp'];
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const btnSubmit = document.getElementById('submit');


/*Submit form*/
/*
btnSubmit.addEventListener('click', checkForm);
*/
btnSubmit.addEventListener('submit', submitForm);

const formInput = [...form.getElementsByTagName('input')]; //array form input
export function checkForm() {
	let error =0;

	for (let char of formInput) {
		if (char.value.length === 0) {
			document.querySelector(`.${char.parentElement.classList[0]}`).classList.add('redLine');
		} else {
			document.querySelector(`.${char.parentElement.classList[0]}`).classList.remove('redLine');
		}
	}

	validationPass();
	validationConfPass();
}

/*First latter uppercase (for first and last names)*/
firstName.addEventListener("input", toUpperCase);
lastName.addEventListener("input", toUpperCase);

function toUpperCase() {
	this.value = this.value[0].toUpperCase() + this.value.slice(1);
}

/*Check password*/
password.addEventListener('input', validationPass);
const checkPassUpper = (s) => /[A-ZА-Я]/gm.test(s); //check uppercase
const checkPassNumber = (s) => /[0-9]/gm.test(s); // check number

function validationPass() {
	let spanError = document.querySelector('.formSection_pass').querySelector('.passError');

	if (checkPassUpper(password.value) && checkPassNumber(password.value) && password.value.length >= 8) {
		document.querySelector('.formSection_pass').classList.remove('redLine');
		if (spanError) {
			spanError.remove();
		}
	} else {
		checkPassError();
		document.querySelector('.formSection_pass').classList.add('redLine');
	}
}

function checkPassError() {
	const html = `<span class="passError">Password must have uppercase letters, numbers and 8 symbols.</span>`;

	if (document.querySelector('.formSection_pass').querySelector('.passError')) {
		return true;
	} else {
		document.querySelector('.formSection_pass').insertAdjacentHTML('beforeend', html);
	}
}

/*Check confirm password*/
confirmPass.addEventListener('input', validationConfPass);

function validationConfPass() {
	const passValue = password.value;
	const confPassValue = confirmPass.value;

	if (passValue === confPassValue) {
		document.querySelector('.formSection_confPass').classList.remove('redLine');
		if (document.querySelector('.formSection_confPass').querySelector('.conPassError')) {
			document.querySelector('.formSection_confPass').querySelector('.conPassError').remove();
		}
	} else {
		checkConfPassError();
		document.querySelector('.formSection_confPass').classList.add('redLine');
	}
}

function checkConfPassError() {
	const html = `<span class="conPassError">Passwords must match.</span>`;

	if (document.querySelector('.formSection_confPass').querySelector('.conPassError')) {
		return true;
	} else {
		document.querySelector('.formSection_confPass').insertAdjacentHTML('beforeend', html);
	}
}
