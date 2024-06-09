const wordContainer = document.querySelector('.word');
const correctCount = document.querySelector('.correct-count');
const wrongCount = document.querySelector('.wrong-count');
const wordMistakes = document.querySelector('.word-mistakes');

let spans = [];
const words = ['words', 'kitten', 'puppy', 'rodent', 'beaver'];
let currentWord = words[Math.floor(Math.random() * words.length)];
wordContainer.textContent = '';

function createSpans() {
  spans = currentWord.split('').map((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('symbol');
    wordContainer.appendChild(span);
    return span;
  });
}

createSpans();

let currentPosition = 0;
let mistakes = 0;

document.addEventListener('keydown', (event) => {
  if (currentPosition >= currentWord.length) {
    return;
  }

  if (event.key.toLowerCase() === currentWord[currentPosition]) {
    spans[currentPosition].classList.add('c');
    currentPosition++;
    if (currentPosition === currentWord.length) {
      correctCount.textContent = parseInt(correctCount.textContent) + 1;
    }
  } else {
    mistakes++;
    wordMistakes.textContent = mistakes;
    spans[currentPosition].classList.add('w');
  }
});

window.onload = function() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordContainer.textContent = '';
  spans.forEach(span => {
    span.remove();
  });
  createSpans();
  currentPosition = 0;
  mistakes = 0;
  wordMistakes.textContent = mistakes;
};
