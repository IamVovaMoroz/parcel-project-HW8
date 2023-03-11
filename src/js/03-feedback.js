import throttle from 'lodash.throttle';

// Получаем досту form

const form = document.querySelector('.feedback-form');
// const textarea = document.querySelector('.feedback-form textarea');
// const input = document.querySelector('.feedback-form label');

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// Имя ключа в localStorage записываем в переменную
const STORAGE_KEY = 'feedback-form-state';

// Обьект для хранения значений с form
let formData = {};
populateForm();

// Вешаем слушателя на форму и textarea

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onFormInput, 500));

// form.addEventListener('input', event => {

//   //   const formDataObject = localStorage.getItem((formData));
// });
// refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit (event) {
  event.preventDefault();
  //   Очистка формы при отправке
  event.target.reset();
  //   Очистка формы при перезагрузке страницы
  localStorage.removeItem(STORAGE_KEY);

  formData = {};
  //   console.log(formData);
}

// Получаем значение с input и добавляем его в localStorage
function onFormInput (event) {
  const key = event.target.name;
  //   const valueFormData = event.target.value;

  //   В formData ложим name и присваиваем ему значение с input
  formData[key] = event.target.value;

  const inputValue = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, inputValue);
  console.log(formData);
}

function populateForm () {
  const dataLocalStorage = localStorage.getItem(STORAGE_KEY);
  const savedMessage = JSON.parse(dataLocalStorage);

  //   чтобы небыло Null для пользователей кто не был ранее,
  //    делаем проверку на сохранённое сообщение.
  if (savedMessage) {
    // Значение   получает из Local storage,
    //  если клиент не отправил значения
    form.elements.message.value = savedMessage.message;
    formData.message = savedMessage.message;
    form.elements.email.value = savedMessage.email;
    formData.email = savedMessage.email;

    // Записываем значения в переменную formData

    // console.log(savedMessage);
    // console.log(formData);

    // // Значение поля email из LocalStorage
    // console.log(savedMessage.email);
    // // Значение поля message из LocalStorage
    // console.log(savedMessage.message);
  }
}

// console.log(form.elements.email.value);
// console.log(form.elements.message.value);
// Получаем значение из LocalStorage и возвращаем назад его в
// инпут(для не отправленных сообщений)

// function populateForm (event) {
//   const dataLocalStorage = localStorage.getItem(STORAGE_KEY);
//   const savedMessage = JSON.parse(dataLocalStorage);

//   //   чтобы небыло Null для пользователей кто не был ранее,
//   //    делаем проверку на сохранённое сообщение.
//   if (savedMessage) {
//     console.log(savedMessage);

//     // Получить доступ к инпуту и textarea и
//     // приравнять их к значениям из localStorage

//     // form.email.value = savedMessage.email;
//     // form.message.value = savedMessage.message;
//     console.log(form.textarea);

//     // Значение поля email из LocalStorage
//     console.log(savedMessage.email);
//     // Значение поля message из LocalStorage
//     console.log(savedMessage.message);
//   }
//   //   после перезагрузки страницы будет сохраняться текст в textarea
// }

// Получить значение инпута email??

// Получить значение form message
// console.log(form.textarea);

// Приравнять значение полей к значениям из LocalStorage в функции выше
