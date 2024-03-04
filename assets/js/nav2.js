const mobileButton = document.querySelector('.mobile-nav-button');
const mobileNavigation = document.querySelector('.mobile-nav-direct');

active = false

mobileButton.addEventListener('click', function(){
  console.log(active);
  if(!active){
    mobileNavigation.classList.add('active');
  } else {
    mobileNavigation.classList.remove('active');
  }

  active = !active;
})