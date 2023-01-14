const getCarta = () => {
  const element = document.querySelector('.table-wine-map');
  element.scrollIntoView();
};

const getDegustation = () => {
  const element = document.getElementById('degustation');
  element.scrollIntoView();
};

const getMore = () => {
  window.open("https://www.hedonism.academy/blog/tpost/3e58x8oeam-kak-razobratsya-v-vine-prosto-i-legko", "_blank"); 
}

const form = document.querySelector('.submit-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  if (!formData.get('name')) {
    alert('Вы не ввели свое Имя');
  }
  else if (!formData.get('tel')) {
    alert('Вы не ввели свой телефон');
  }
  else if (!formData.get('addres')) {
    alert('Вы не ввели свой адрес');
  } else {
    alert('Поздравляю вы успешно записаны');
    form.reset();
  }
});
