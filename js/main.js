const button = document.querySelector('.button'),
      mainContent = document.querySelector('.main-content'),
      backButton = document.querySelector('.back-btn'),
      about = document.querySelector('.about'),
      experience = document.querySelector('.experience'),
      contact = document.querySelector('.contact');

about.style.display = 'none';
experience.style.display = 'none';
contact.style.display = 'none';

document.addEventListener('load', () => {
  about.style.display = 'block';
  experience.style.display = 'block';
  contact.style.display = 'block';
});


document.addEventListener('click', (event) => {
  if (event.target.matches('.about-button')) {
    event.preventDefault();
    removeAnimationClasses();
    aboutAnimation();
  } else if (event.target.matches('.experience-button')) {
    event.preventDefault();
    removeAnimationClasses();
    experienceAnimation();
  } else if (event.target.matches('.contact-button')) {
    event.preventDefault();
    removeAnimationClasses();
    contactAnimation();    
  }

  if (event.target.matches('.back-btn')) {
    event.preventDefault();
    removeAnimationClasses();
  }
});

// Moves main elements by adding to animate in new elements
var aboutAnimation = () => {
  mainContent.classList.add('main-active');
  about.classList.add('about-active');
}

var experienceAnimation = () => {
  mainContent.classList.add('main-active');
  experience.classList.add('experience-active');
}

var contactAnimation = () => {
  mainContent.classList.add('main-active');
  contact.classList.add('contact-active');
}

var removeAnimationClasses = () => {
  mainContent.classList.remove('main-active');
  about.classList.remove('about-active');
  experience.classList.remove('experience-active');
  contact.classList.remove('contact-active');
}