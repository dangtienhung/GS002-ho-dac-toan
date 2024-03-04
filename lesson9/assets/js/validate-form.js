const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form-container');
const messages = document.querySelectorAll('.form-message');

const handleCheckTrim = (value, message) => {
  if (value.trim() === '') {
    message.classList.remove('hidden');
    message.innerText = 'Không được để trống';
  } else {
    message.classList.add('hidden');
  }
}

const checkRegex = (value, regex, {
  classList, message
}) => {
  if (regex.test(value)) {
    classList.classList.add('hidden');
  } else {
    classList.classList.remove('hidden');
    classList.innerText = message;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // th1: khi email và password không nhập gì cả
  if (email.value.trim() == '') {
    handleCheckTrim(email.value, messages[0]);
    return;
  }
  handleCheckTrim(password.value, messages[1]);

  // th2: khi email không hợp lệ
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  checkRegex(email.value, regexEmail, {
    classList: messages[0],
    message: 'Email không hợp lệ'
  });

  // th3: khi password không hợp lệ
  const regextPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*)([a-z0-9]{6,})$/;
  checkRegex(password.value, regextPassword, {
    classList: messages[1],
    message: 'Password không hợp lệ (ít nhất 6 ký tự, có ít nhất 1 chữ số)'
  });

  // th4: khi email và password hợp lệ
  if (regexEmail.test(email.value) && regextPassword.test(password.value)) {
    alert('Đăng nhập thành công');
  }
})
