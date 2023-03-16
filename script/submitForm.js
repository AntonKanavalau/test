import {form, checkForm} from "./validationForm1.js";

const errorPassMessage = document.querySelector('.formSection_pass').querySelector('.passError')
const errorConfPassMessage = document.querySelector('.formSection_confPass').querySelector('.conPassError')

export async function submitForm(e){
	e.preventDefault();

	let error = checkForm();
	let formData = new FormData(form);

	if(error === 0 ) {
		document.getElementsByClassName('.headContainer--content').innerHTML = '';
	} else {
		alert('Заполните все поля')
	}

}