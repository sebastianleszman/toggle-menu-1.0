const hamburger = document.querySelector('.hamburger');

const menuMain = document.querySelector('.menu__main');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  menuMain.classList.toggle('menu__main--active');
};

hamburger.addEventListener('click', handleClick);
