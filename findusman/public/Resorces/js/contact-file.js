let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let file = document.getElementById('file');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    message: message.value,
    file: file.value,
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
      File.value = '';
    } else {
      alert('something wrong');
    }
  };
  xhr.send(JSON.parse(formData));
});

contactForm.addEventListener('handleChange', (e) => {
  const [file] = e.target.files;
  const formData = new FormData();
  formData.append('image', file);
  let xml = new XMLHttpRequest();
  xml.open('PUT', '/api');
  xml.setRequestHeader('content-type', 'application/json');

  xml.send(JSON.parse(formData));
});
