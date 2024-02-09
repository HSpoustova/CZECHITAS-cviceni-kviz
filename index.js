const otazkaElement = document.querySelector('.question');
const answerElement = document.querySelector('.answer');
const odpovedElement = document.querySelector('.answer__text');

otazkaElement.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const timeForAnswer = function () {
  const odpovedUzivateleElement = prompt('Jaká je správná odpoveď?');
  odpovedElement.textContent = odpovedUzivateleElement;

  if (odpovedUzivateleElement === 'Bell') {
    answerElement.classList.add('answer--correct');
  } else {
    answerElement.classList.add('answer--wrong');
  }
};
setTimeout(timeForAnswer, 5000);
