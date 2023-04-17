export function loading() {
	const form = document.querySelector('.contact-form');
	const submitButton = document.querySelector('.f-button');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		submitButton.innerHTML = '';
		submitButton.classList.add('loading');

		setTimeout(function () {
			form.submit();

			setTimeout(function () {
				submitButton.innerHTML = 'SENT!';
				submitButton.classList.remove('loading');
				submitButton.style.color = 'green';

				setTimeout(function () {
					submitButton.innerHTML = 'Send';
					submitButton.style.color = '';
				}, 5000);
			}, 2000);
		}, 1000);
	});
}
