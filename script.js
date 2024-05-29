window.addEventListener('DOMContentLoaded', () => {
  // burger menu

  const menuBurgerBtn = document.querySelector('.burger-btn'),
    menuBurger = document.querySelector('.nav'),
    menuBurgerItem = document.querySelectorAll('.nav-item');

  menuBurgerBtn.addEventListener('click', () => {
    menuBurgerBtn.classList.toggle('open');
    menuBurger.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  document.addEventListener('click', (e) => {
    if (!menuBurger.contains(e.target) && e.target !== menuBurgerBtn) {
      menuBurger.classList.remove('open');
      menuBurgerBtn.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });

  menuBurgerItem.forEach((item) => {
    item.addEventListener('click', () => {
      menuBurger.classList.remove('open');
      menuBurgerBtn.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
});
