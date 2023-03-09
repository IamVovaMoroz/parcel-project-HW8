import throttle from 'lodash.throttle';

// Получаем досту form

const form = document.querySelector('.feedback-form');
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// Имя ключа в localStorage записываем в переменную
const STORAGE_KEY = '"feedback-form-state';

// Обьект для хранения значений с form
const formData = {};
// Вешаем слушателя на форму и textarea
form.addEventListener('submit', throttle(onFormSubmit, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('input', event => {
  const nameFormData = event.target.name;
  const valueFormData = event.target.value;

  //   В formData ложим name и присваиваем ему значение с input
  formData[nameFormData] = valueFormData;
  //   const formDataObject = localStorage.getItem((formData));
});
// refs.textarea.addEventListener('input', onTextareaInput);
populateForm();

function onFormSubmit (event) {
  event.preventDefault();

  //   Очистка формы при отправке
  event.target.reset();
  //   Очистка формы при перезагрузке страницы
  localStorage.removeItem(STORAGE_KEY);

  //   console.log(event.currentTarget "event.currentTarget - форма);
}

// Получаем значение с input и добавляем его в localStorage
function onFormInput (event) {
  console.log(formData);

  const inputValue = JSON.stringify(formData);
  //   console.log(inputValue);
  localStorage.setItem(STORAGE_KEY, inputValue);
}

// Получаем значение из LocalStorage и возвращаем назад его в
// инпут(для не отправленных сообщений)

function populateForm () {
  const dataLocalStorage = localStorage.getItem(STORAGE_KEY);
  const savedMessage = JSON.parse(dataLocalStorage);

  //   чтобы небыло Null для пользователей кто не был ранее,
  //    делаем проверку на сохранённое сообщение.
  if (savedMessage) {
    console.log(savedMessage);

    form.value = savedMessage;

    // Значение поля email из LocalStorage
    console.log(savedMessage.email);
    // Значение поля message из LocalStorage
    console.log(savedMessage.message);
  }
  //   после перезагрузки страницы будет сохраняться текст в textarea
}

// Получить значение инпута email??
console.log(form.email.name.value);
// Получить значение form message
console.log(form.message.name.value);

// Приравнять значение полей к значениям из LocalStorage в функции выше
