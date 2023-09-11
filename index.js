const d = document;
const menuToggle = d.querySelector('#menu-toggle');
const navList = d.querySelector('#navigation');

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
  if (isMenuOpen) {
    navList.classList.toggle('active');
  } else {
    navList.classList.toggle('active');
  }

  isMenuOpen = !isMenuOpen; 
});

    
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    navList.classList.remove('active');
    isMenuOpen = false; 
  }
});  


function updateCountdown() {
  const targetDate = new Date(2023, 8, 24, 12, 0, 0).getTime();

  const currentDate = new Date().getTime();

  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  d.getElementById('days').textContent = String(days).padStart(2, '0');
  d.getElementById('hours').textContent = String(hours).padStart(2, '0');
  d.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  d.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);



const questions = document.querySelectorAll('.question');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    this.classList.toggle('active');
  })
}