import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';

import './assets/sprite.svg';
import './assets/senti.app.jpg';
import './assets/tripodream.jpg';
import './assets/vv.jpg';
import './assets/maii.jpg';
import './assets/resume.pdf';

// ********************************************************************************************** //
// ************************ Start functionality on DOMContentLoaded event *********************** //
// ********************************************************************************************** //
window.addEventListener('DOMContentLoaded', async () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navBar = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      navBar.classList.remove('active');
    })
  );
  setTimeout(() => {
    document.querySelector('header').classList.add('fade-in');
    document.querySelector('main').classList.add('fade-in');
    document.querySelector('#wrapper').classList.add('fade-in');
    document.querySelector('body').classList.add('fade-in');
    document.querySelector('body').classList.add('visible');
  }, 100);

  // ***************************** HANDLE SUBMIT MESSAGE FUNCTIONALITY **************************** //

  const form = document.getElementById('contact-form');
  const urlAWS =
    'https://bwxk2u3pik.execute-api.us-east-1.amazonaws.com/dev/email/send';
  const toast = document.getElementById('toast');
  const submit = document.getElementById('submit');

  const post = (url, body, callback) => {
    const req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', () => {
      if (req.status < 400) {
        callback(null, JSON.parse(req.responseText));
      } else {
        callback(new Error(`Request failed: ${req.statusText}`));
      }
    });
    req.send(JSON.stringify(body));
  };
  const success = () => {
    toast.innerHTML =
      "Thanks for sending me a message! I'll get in touch with you ASAP.";
    submit.disabled = false;
    submit.blur();
    form.name.focus();
    form.name.value = '';
    form.email.value = '';
    form.content.value = '';
  };
  const error = (err) => {
    toast.innerHTML =
      'There was an error with sending your message, Please try again later.';
    submit.disabled = false;
    console.log(err);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.innerHTML = 'Sending';
    submit.disabled = true;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      content: form.content.value,
    };
    post(urlAWS, payload, (err) => {
      if (err) {
        return error(err);
      }
      success();
    });
  });
});
