const d = document;
const menuToggle = d.querySelector('#menu-toggle');
const navList = d.querySelector('#navigation');

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
    console.log('s')
  if (isMenuOpen) {
    // Close the menu
    navList.style.display = 'none';
    menuToggle.style.fill = '#DD71C6'; // Set the color when the menu is closed
  } else {
    // Open the menu
    navList.style.display = 'flex';
    menuToggle.style.fill = '#fff'; // Set the color when the menu is open
  }

  isMenuOpen = !isMenuOpen; // Toggle the menu state
});
