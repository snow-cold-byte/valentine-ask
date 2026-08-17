// Navbar scroll effect
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// FAQ accordion
var faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(item) {
  item.querySelector('.faq-q').addEventListener('click', function() {
    var isOpen = item.classList.contains('open');
    faqItems.forEach(function(i) { i.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  });
});

// Contact form toast
var form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    form.reset();
    setTimeout(function() { toast.classList.remove('show'); }, 3000);
  });
}