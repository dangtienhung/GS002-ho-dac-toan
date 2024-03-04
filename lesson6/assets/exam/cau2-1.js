const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstname = document.querySelector('#firstname');
const form = document.querySelector('.form-container');
const validateMess = document.querySelectorAll('.validate-mess');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (
		password.value === '' ||
		firstname.value === '' ||
		confirmPassword.value === ''
	) {
		validateMess.forEach(function (item) {
			item.classList.remove('hide');
		});
	} else {
		if (password.value !== confirmPassword.value) {
			validateMess[2].classList.remove('hide');
			validateMess[2].innerText = 'Mật khẩu không trùng khớp';
			return;
		}
		validateMess.forEach(function (item) {
			item.classList.add('hide');
		});
		alert('Đăng ký thành công');
	}
});

// khi hover chuột ra ngoài input firstname thì check xem giá trị của input có hợp lệ không
firstname.addEventListener('mouseover', function () {
	if (firstname.value === '') {
		validateMess[0].classList.remove('hide');
	} else {
		validateMess[0].classList.add('hide');
	}
});

// khi hover chuột ra ngoài input password thì check xem giá trị của input có hợp lệ không
firstname.addEventListener('mouseout', function () {
	if (firstname.value === '') {
		validateMess[0].classList.remove('hide');
	} else {
		validateMess[0].classList.add('hide');
	}
});
