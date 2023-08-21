import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import { getDatabase, ref, push, set } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

export const handleFormSubmit = () => {
  const form = document.querySelector('.contacts__form');

  const firebaseConfig = {
    apiKey: 'AIzaSyBmgXdCh6I45sYc7XlFdBHUjfEhnmHMsSs',
    authDomain: 'wavetake-fd3c8.firebaseapp.com',
    databaseURL: 'https://wavetake-fd3c8-default-rtdb.firebaseio.com',
    projectId: 'wavetake-fd3c8',
    storageBucket: 'wavetake-fd3c8.appspot.com',
    messagingSenderId: '641202025768',
    appId: '1:641202025768:web:d369ced38481ab2ba6cc1d',
  };

  const app = initializeApp(firebaseConfig);

  const submitForm = e => {
    e.preventDefault();

    const formDesc = document.querySelector('.contacts__text');
    const nameInput = document.querySelector('.form__input-name');
    const emailInput = document.querySelector('.form__input-email');
    const messageInput = document.querySelector('.form__textarea');
    const formBtn = document.querySelector('.form__btn');

    if (nameInput.value && emailInput.value && messageInput.value) {
      const database = getDatabase();
      const date = new Date().toUTCString();
      set(ref(database, 'messages/' + date), {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      });

      formBtn.disabled = true;
      formDesc.innerHTML = "Form submitted successfully. We'll be in touch soon!";
      formDesc.classList.add('contacts__text--success');
      document.querySelector('.contacts__text').classList.remove('contacts__text--warning');
      nameInput.style.borderColor = '#444';
      emailInput.style.borderColor = '#444';
      messageInput.style.borderColor = '#444';

      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';

      setTimeout(() => {
        formDesc.innerHTML = 'Feel free to contact us. We really love to communicate with our clients.';
        formDesc.classList.remove('contacts__text--success');
        formBtn.disabled = false;
      }, 5000);
    } else {
      document.querySelector('.contacts__text').classList.add('contacts__text--warning');
      nameInput.style.borderColor = '#e67171';
      emailInput.style.borderColor = '#e67171';
      messageInput.style.borderColor = '#e67171';
    }
  };

  form.addEventListener('submit', submitForm);
};
