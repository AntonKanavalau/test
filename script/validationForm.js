'use strict'


document.addEventListener('DOMContentLoaded', () => {
	const form = document.forms['formSignUp'];
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate();

		if (error === 0) {

		} else {
			alert('Fill in all fields.');
		}

	}

	function formValidate() {
		let error = 0;

		let formReq = document.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			switch (input.id) {
				case 'firstName':
					if (nameTest(input)) {
						formAddError(input);
						error++;
					}
					break;

				case 'lastName':
					if (nameTest(input)) {
						formAddError(input);
						error++;
					}
					break;

				case 'eMail':
					if (emailTest(input)) {
						formAddError(input);
						emailAddError(input);
						error++;
					} else {
						emailRemoveError(input);
					}
					break;

				case 'password':
					if (passwordTest(input)) {
						formAddError(input);
						passAddError(input);
						error++;
					} else {
						passRemoveError(input);
					}
					break;

				case 'confirmPass':
					if (confPasswordTest(input)) {
						formAddError(input);
						confPassAddError(input);
						error++;
					} else {
						confPassRemoveError(input);
					}
					break;
			}
		}
		return error;
	}

	/*add redline*/
	function formAddError(input) {
		input.parentElement.classList.add('redLine');
	}

	/*remove redline*/
	function formRemoveError(input) {
		input.parentElement.classList.remove('redLine');
	}

	/*check first and last name*/
	function nameTest(input) {
		if (input.value.length === 0 || /[0-9]/.test(input.value) === true) {
			return true;
		}
	}

	/*check email*/
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
	}

	/*email error*/
	function emailAddError(input) {
		const html = `<span class="emailError">Incorrect e-Mail.</span>`;
		if (input.parentElement.querySelector('.emailError')) {
			return true;
		} else {
			input.parentElement.style.color = 'red';
			input.parentElement.insertAdjacentHTML('beforeend', html);
		}
	}

	function emailRemoveError(input) {
		input.parentElement.querySelector('.emailError').remove();
	}

	/*conf error text*/
	function passAddError(input) {
		const html = `<span class="passError">Password must have uppercase letters, numbers and 8 symbols.</span>`;
		if (input.parentElement.querySelector('.passError')) {
			return true;
		} else {
			input.parentElement.insertAdjacentHTML('beforeend', html);
		}
	}

	function passRemoveError(input) {
		input.parentElement.querySelector('.passError').remove();
	}


	/*check uppercase and number*/
	function passwordTest(input) {
		if (upperCaseTest(input.value) || numberTest(input.value) || input.value.length < 8) {
			return true;
		}
	}

	/*check uppercase*/
	function upperCaseTest(value) {
		return !/[A-ZА-Я]/gm.test(value);
	}

	/*check number*/
	function numberTest(value) {
		return !/[0-9]/gm.test(value);
	}


	/*check confirm password*/
	function confPasswordTest(input) {
		if (input.value !== input.password) {
			return true;
		}
	}

	/*conf error text*/
	function confPassAddError(input) {
		const html = `<span class="conPassError">Passwords must match.</span>`;
		if (input.parentElement.querySelector('.conPassError')) {
			return true;
		} else {
			input.parentElement.insertAdjacentHTML('beforeend', html);
		}
	}

	function confPassRemoveError(input) {
		input.parentElement.querySelector('.conPassError').remove();
	}
})


/*Uppercase first latter first and last name*/
document.getElementById('firstName').addEventListener('input', nameToUpperCase);
document.getElementById('lastName').addEventListener('input', nameToUpperCase);

function nameToUpperCase() {
	this.value = this.value[0].toUpperCase() + this.value.slice(1);
}