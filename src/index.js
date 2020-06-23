import html from './index.html';

document.body.innerHTML = html;

function askAuth(data) {
  const header = new Headers({
    'authorization': `Basic ${data}`
  });

  const init = {
    method: 'GET',
    headers: header,
  };

  const request = new Request('http://localhost:5000/', init);

  fetch(request).then(res => res.text()
    .then((res) => {
      document.write(res);
    }));
}

const form = document.querySelector('#form');
form.addEventListener('submit', sendReq);

function sendReq(e) {
  e.preventDefault();

  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;

  const data = btoa([username, password].join(':'));

  askAuth(data);
};
