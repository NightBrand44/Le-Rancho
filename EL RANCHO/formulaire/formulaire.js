const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signup');

signUpButton.addEventListener('click', () => {
	console.log('click');
	container.classList.add('panel-active');
})
loginButton.addEventListener('click', () => {
	console.log('click-login');
	container.classList.remove('panel-active');
})