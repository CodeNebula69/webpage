const slides = [...document.querySelectorAll('.testimonial')];
const dots = [...document.querySelectorAll('.dots button')];
let activeSlide = 0;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
setInterval(() => showSlide((activeSlide + 1) % slides.length), 6500);

document.querySelectorAll('.product-art button').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('saved');
    button.textContent = button.classList.contains('saved') ? '♥' : '♡';
  });
});

const toast = document.querySelector('.toast');
function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('.cart-add').forEach((button) => {
  button.addEventListener('click', () => {
    button.innerHTML = 'Added to cart <b>✓</b>';
    notify(`${button.dataset.product} was added to your cart.`);
    setTimeout(() => { button.innerHTML = 'Add to cart <b>+</b>'; }, 1800);
  });
});

document.querySelectorAll('form[data-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const label = form.dataset.form === 'free-report' ? 'Your free reading request has been received.' : 'Thank you — our team will be in touch shortly.';
    form.reset();
    notify(label);
  });
});
