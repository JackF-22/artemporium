document.addEventListener('scroll', () => {
  const header = document.querySelector('.nav');

  if (window.scrollY > 0)
  {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

let count = 0;
function menu() {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobilemenu');

  if (count % 2 == 0)
  {
    burger.classList.add('active');
    mobileMenu.classList.add('active');
    count++;
  }
  else
  {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    count++;
  }
}

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveals');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }
}