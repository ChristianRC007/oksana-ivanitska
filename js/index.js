const langButtons = document.querySelector('.btn-box');
const allLang = ['ua', 'ru'];
import { langData } from '../data/translation.js';

langButtons.addEventListener('click', onChangeURLLang);

function onChangeURLLang(e) {
  const winLocation = window.location;

  if (
    winLocation.hash &&
    winLocation.hash.substr(1) === e.target.dataset.lang
  ) {
    return;
  }

  let lang = e.target.dataset.lang;
  location.href = winLocation.pathname + '#' + lang;
  location.reload();
}

(function changeLang() {
  const winLocation = window.location;
  let hash = winLocation.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = winLocation.pathname + '#ua';
    location.reload();
  }

  const childArr = Array.from(langButtons.children);
  childArr.forEach(el => {
    if (el.dataset.lang === hash) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  document.querySelector('title').innerHTML = langData['title'][hash];

  for (let key in langData) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      elem.innerHTML = langData[key][hash];
    }
  }
})();
