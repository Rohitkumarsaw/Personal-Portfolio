// MENU TOGGLE – Disable scroll when menu is active
function activateMenuToggle() {
  const toggle = document.getElementById('menu-toggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle("no-scroll", toggle.checked);
    });
  }
}

// PHOTO ALIGN – Adjust layout based on screen size
function adjustLayout() {
  const home = document.querySelector('.home');
  const imgContainer = document.querySelector('.img-container');

  if (home && imgContainer) {
    if (window.innerWidth >= 1024) {
      home.style.flexDirection = 'row';
      imgContainer.style.width = '400px';
      imgContainer.style.height = '400px';
    } else {
      home.style.flexDirection = 'column-reverse';
      imgContainer.style.width = '270px';
      imgContainer.style.height = '270px';
    }
  }
}

// TYPING EFFECT
const words = [
  "Website Developer",
  "Android Developer",
  "UI/UX Designer",
  "Graphics Designer",
  "Video Editor",
  "Computer Operator"
];
const typingText = document.getElementById("typing-span");
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typingDelay = 100, erasingDelay = 100, nextWordDelay = 1000;

function type() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
}

// ACTIVE LINK HIGHLIGHT
function highlightActiveLink() {
  const navlinks = document.querySelectorAll(".navlink");
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      navlinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// INITIALIZE EVERYTHING
document.addEventListener("DOMContentLoaded", () => {
  adjustLayout();
  if (words.length && typingText) type();
  activateMenuToggle();
  highlightActiveLink();
});

window.addEventListener("resize", adjustLayout);


document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.boxShadow = '0 0 30px #00ff99';
  });
  box.addEventListener('mouseout', () => {
    box.style.boxShadow = '0 0 20px #00ff99';
  });
});
