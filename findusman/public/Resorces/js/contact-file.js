let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  console.log(formData);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email send successfully');
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('something wrong');
    }
  };
  xhr.send(JSON.parse(formData));
});
