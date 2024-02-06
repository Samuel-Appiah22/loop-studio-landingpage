const closeIcon = document.querySelector('.close-icon');

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener(
  'click', ()=> {
    const sideBar  = document.querySelector('.sidebar')
    sideBar.style.display = 'flex';
  })

closeIcon.addEventListener(
  'click', ()=> {
    const sideBar  = document.querySelector('.sidebar')
    sideBar.style.display = 'none';
  })