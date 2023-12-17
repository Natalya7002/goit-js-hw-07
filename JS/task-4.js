// Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");
const inputEmail = loginForm.elements.email;
const inputPassword = loginForm.elements.password;

loginForm.addEventListener("submit", function (event) {
  // перевірка пустих полів
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }
  // збір заповнених полів
  const formData = {
    email: inputEmail.value.trim(),
    password: inputPassword.value.trim(),
  };

  console.log(formData);

  // Очистка формы
  loginForm.reset();
});

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться обєкт з двома властивостями, де ключі — це імя інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються
