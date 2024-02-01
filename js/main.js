  // JavaScript code for slider functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Show the initial slide
  showSlide(currentSlide);

  document.querySelector('section.handpick-sec .row').addEventListener('wheel', (event) => {
    if (event.deltaMode === 1) {
      // deltaY is in lines, not pixels
      document.querySelector('section.handpick-sec .row').scrollLeft += event.deltaY * 30;
      event.preventDefault();
    }
  });