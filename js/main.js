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

//   $(document).ready(function() {
//     $('.following-btn, .follow-btn').click(function() {
//         var followingBtn = $('.following-btn');
//         var followBtn = $('.follow-btn');
//   // Remove existing classes
//   followingBtn.removeClass('following-btn');
//   followBtn.removeClass('follow-btn');

//         // Toggle classes
//         followingBtn.toggleClass('follow-btn');
//         followBtn.toggleClass('following-btn');

//         // Toggle text
//         followingBtn.text(followingBtn.hasClass('follow-btn') ? 'FOLLOW' : 'FOLLOWING');
//         followBtn.text(followBtn.hasClass('following-btn') ? 'FOLLOWING' : 'FOLLOW');
//     });
// });
$(document).ready(function() {
    $('.following-btn, .follow-btn').click(function() {
        var clickedBtn = $(this);

        // Remove existing classes
        clickedBtn.siblings().removeClass('following-btn').removeClass('follow-btn');

        // Toggle classes
        clickedBtn.toggleClass('following-btn').toggleClass('follow-btn');

        // Toggle text
        clickedBtn.text(clickedBtn.hasClass('following-btn') ? 'FOLLOW' : 'FOLLOWING');
        clickedBtn.text(clickedBtn.hasClass('follow-btn') ? 'FOLLOW' : 'FOLLOWING');
    });
});
