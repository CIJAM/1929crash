document.addEventListener("DOMContentLoaded", function() {
    const slidesContainer = document.querySelector('.slides');
    let currentSlideIndex = 0;

    function changeSlide(slideIndex) {
        const newTransformValue = `translateX(-${slideIndex * 100}vw)`;
        slidesContainer.style.transform = newTransformValue;
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            changeSlide(currentSlideIndex);
        }
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            changeSlide(currentSlideIndex);
        }
    }

    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
});










document.addEventListener("DOMContentLoaded", function() {
  const dynamicText = document.getElementById('dynamic-text');
  const words = ['The Economic Effects of WW1: a turning point that led to the 1929 Krach?'];
  let currentIndex = 0;
  let currentWord = '';
  let typing = true;
  let deleting = false;

  function typeEffect(word, index) {
      if (index < word.length) {
          currentWord += word[index];
          dynamicText.textContent = currentWord + '|';
          setTimeout(function() {
              typeEffect(word, index + 1);
          }, 50); // Typing speed: 100 milliseconds
      } else {
          dynamicText.textContent = currentWord + "|";
          typing = false;
          setTimeout(displayWord, 3000); // Wait for 1 second before deleting
      }
  }

  function displayWord() {
      if (!typing && !deleting && currentWord.length < words[currentIndex].length) {
          currentWord += words[currentIndex][currentWord.length];
          dynamicText.textContent = currentWord + '|';
          setTimeout(displayWord, 100); // Add next character after 0.1 seconds
      } else if (!typing && !deleting && currentWord.length === words[currentIndex].length) {
          deleting = true;
          setTimeout(displayWord, 1000); // Wait for 1 second before deleting
      } else if (!typing && deleting && currentWord.length > 0) {
          currentWord = currentWord.slice(0, -1); // Delete last character
          dynamicText.textContent = currentWord + '|';
          setTimeout(displayWord, 50); // Delete character after 0.05 seconds
      } else {
          deleting = false;
          typing = true;
          setTimeout(nextWord, 200); // Change word after 0.2 seconds
      }
  }

  function nextWord() {
      currentWord = '';
      currentIndex = (currentIndex + 1) % words.length;
      typeEffect(words[currentIndex], 0); // Start typing the next word
  }

  typeEffect(words[currentIndex], 0); // Start typing the first word
});
