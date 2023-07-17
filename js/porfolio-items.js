import cards from './data-cards.js';

const btnContainerEl = document.querySelector('.js-filter-list');
const cardsListEl = document.querySelector('.js-content-list');
const buttons = btnContainerEl.querySelectorAll('button');

//Только одна категория
// btnContainerEl.addEventListener('click', onButtonClick);

// const markupString = makeMarkup(cards);
// addElementsInUi(markupString);

// function onButtonClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedCategory = e.target.textContent;

//   if (e.target.classList.contains('is-active')) {
//     return;
//   }

//   if (selectedCategory === 'All') {
//     const markupString = makeMarkup(cards);
//     addElementsInUi(markupString);
//   } else {
//     const markupString = makeFilteredMarkup(cards, selectedCategory);
//     addElementsInUi(markupString);
//   }
//   removeIsactive();
//   addIsactive(e.target);
// }

// function makeMarkup(array) {
//   let makeMarkupString = '';
//   array.forEach(
//     ({
//       urlDesktopx1,
//       urlDesktopx2,
//       urlTabletx1,
//       urlTabletx2,
//       urlMobilex1,
//       urlMobilex2,
//       alt,
//       content_title,
//       content_text,
//     }) => {
//       makeMarkupString += ` <li class="content-list-item">
//                 <a class="link photo-link" href=""><div class="parrent">
//                     <picture>
//                         <source srcset="${urlDesktopx1}, ${urlDesktopx2}"
//                             media="(min-width: 1158px)">

//                         <source srcset="${urlTabletx1}, ${urlTabletx2}"
//                             media="(min-width: 768px)">

//                         <source srcset="${urlMobilex1}, ${urlMobilex2}"
//                             media="(min-width: 320px)">

//                         <img src="./images/desktop-360-300-1px/desktop-9-1.jpg" alt="${alt}" width="360" height="300"
//                             class="photo-content">
//                     </picture>

//                     <div class="overlay">
//                         <p class="text-info">14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App ·
//                             Exotic Fruit Ecommerce App ·
//                             Cloud Storage App </p>
//                     </div>
//                     </div>
//                 <div class="container-content-info">
//                     <h2 class="content-list-title">${content_title}</h2>
//                     <p class="content-list-text title-body">${content_text}</p>
//                 </div></a>
//             </li>`;
//     }
//   );
//   return makeMarkupString;
// }

// function addElementsInUi(string) {
//   cardsListEl.innerHTML = string;
// }

// function makeFilteredMarkup(array, category) {
//   let makeMarkupString = '';
//   const filteredMarkup = array.filter(
//     element => element.content_text === category
//   );
//   return makeMarkup(filteredMarkup);
// }

// function removeIsactive() {
//   buttons.forEach(button => {
//     if (button.classList.contains('is-active')) {
//       button.classList.remove('is-active');
//     }
//   });
// }

// function addIsactive(button) {
//   button.classList.add('is-active');
// }

//Несколько категорий

btnContainerEl.addEventListener('click', onButtonClick);

addAllElementsInUi();

function onButtonClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedCategory = e.target.textContent;

  if (selectedCategory === 'All') {
    removeAllIsactive();

    addIsactive(e.target);

    addAllElementsInUi();
  } else {
    removeIsactive(buttons[0]);
    e.target.classList.toggle('is-active');

    let isAnyActive = false;
    let countSelected = 0;

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].classList.contains('is-active')) {
        isAnyActive = true;
        countSelected += 1;
      }
    }

    if (!isAnyActive || countSelected === buttons.length - 1) {
      if (countSelected === buttons.length - 1) {
        removeAllIsactive();
      }
      addIsactive(buttons[0]);

      addAllElementsInUi();
    } else {
      const activeButtons = [];
      for (const button of buttons) {
        if (button.classList.contains('is-active')) {
          activeButtons.push(button);
        }
      }

      let markupString = '';
      for (const button of activeButtons) {
        markupString += makeFilteredMarkup(cards, button.textContent);
      }

      addElementsInUi(markupString);
    }
  }
}

function makeMarkup(array) {
  let makeMarkupString = '';
  array.forEach(
    ({
      urlDesktopx1,
      urlDesktopx2,
      urlTabletx1,
      urlTabletx2,
      urlMobilex1,
      urlMobilex2,
      alt,
      content_title,
      content_text,
    }) => {
      makeMarkupString += ` <li class="content-list-item">
                <a class="link photo-link" href=""><div class="parrent">
                    <picture>
                        <source srcset="${urlDesktopx1}, ${urlDesktopx2}"
                            media="(min-width: 1158px)">

                        <source srcset="${urlTabletx1}, ${urlTabletx2}"
                            media="(min-width: 768px)">

                        <source srcset="${urlMobilex1}, ${urlMobilex2}"
                            media="(min-width: 320px)">

                        <img src="./images/desktop-360-300-1px/desktop-9-1.jpg" alt="${alt}" width="360" height="300"
                            class="photo-content" loading="lazy">
                    </picture>

                    <div class="overlay">
                        <p class="text-info">14 Stylish and User-Friendly App Design Concepts · Task Manager App · Calorie Tracker App ·
                            Exotic Fruit Ecommerce App ·
                            Cloud Storage App </p>
                    </div>
                    </div>
                <div class="container-content-info">
                    <h2 class="content-list-title">${content_title}</h2>
                    <p class="content-list-text title-body">${content_text}</p>
                </div></a>
            </li>`;
    }
  );
  return makeMarkupString;
}

function addElementsInUi(string) {
  cardsListEl.innerHTML = string;
}

function makeFilteredMarkup(array, category) {
  const filteredMarkup = array.filter(
    element => element.content_text === category
  );
  return makeMarkup(filteredMarkup);
}

function removeAllIsactive() {
  buttons.forEach(button => {
    if (button.classList.contains('is-active')) {
      button.classList.remove('is-active');
    }
  });
}

function addIsactive(button) {
  button.classList.add('is-active');
}

function removeIsactive(button) {
  button.classList.remove('is-active');
}

function addAllElementsInUi() {
  const markupString = makeMarkup(cards);

  addElementsInUi(markupString);
}
