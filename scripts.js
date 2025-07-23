
// Menú móvil hamburguesa
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const menuBtn = document.querySelector('.mobile-menu-btn i');

  navLinks.classList.toggle('mobile-active');

  // Cambiar icono
  if (navLinks.classList.contains('mobile-active')) {
    menuBtn.className = 'fas fa-times';
  } else {
    menuBtn.className = 'fas fa-bars';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById('navLinks');
      const menuBtn = document.querySelector('.mobile-menu-btn i');

      navLinks.classList.remove('mobile-active');
      menuBtn.className = 'fas fa-bars';
    });
  });
});

function createParticles() {
  const particles = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 2) + 's';
    particles.appendChild(particle);
  }
}

// Animación de scroll con reset
function handleScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const elementVisible = 150;

    // Elemento entra en viewport
    if (elementTop < window.innerHeight - elementVisible && elementBottom > 0) {
      element.classList.add('visible');
    }
    // Elemento sale completamente del viewport (reset para cuando vuelva)
    else if (elementBottom < 0 || elementTop > window.innerHeight) {
      element.classList.remove('visible');
    }
  });
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Formulario de contacto
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);
  event.target.reset();
}

// Descargar CV
function downloadCV() {
  fetch('archivos/CV-ALEXIS-RAMIREZ-VARILLAS.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV-ALEXIS-RAMIREZ-VARILLAS.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
}


// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  createParticles();
  handleScroll();
});

window.addEventListener('scroll', handleScroll);

function scrollToNext() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (window.scrollY > 200) {
    scrollIndicator.style.opacity = '0';
  } else {
    scrollIndicator.style.opacity = '1';
  }
});
