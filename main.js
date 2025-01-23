const burgerBtn = document.querySelector('.menu-btn');
const header = document.getElementById('header')

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('js-header')
  //console.log("Imam sega klasa")
});

const book = document.querySelectorAll('.book');
const radioBtn = document.querySelectorAll('.radio-off');
for (const [i] of radioBtn.entries()){
radioBtn[i].addEventListener("click", (e) => {
  book.forEach((bookItem) => bookItem.classList.remove('book-in-focus'));
  book[i].classList.add('book-in-focus')
  radioBtn.forEach((radio) => radio.classList.remove('radio-on'));
radioBtn[i].classList.add('radio-on')
})

}

