/*animation for formSection children children*/
import {form} from './validationForm.js'

{
	let elem = Array.from(form.children);

	for (let i = 0; i < elem.length; i++) {
		setTimeout(() => {
			for (let k = 0; k < elem[i].children.length; k++) {
				setTimeout(() => {
					elem[i].children[k].classList.add('reOpacity');
				}, (k + 1) * 150);
			}
		}, (i + 1) * 150);
	}
}
