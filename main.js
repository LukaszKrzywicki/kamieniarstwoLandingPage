// // JavaScript
// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 + "px";
// })




// JQUERY
// Navigation to current section
    $('nav a').on('click', function () {
        const goToSection = "[data-section=" + $(this).attr('class') + "]";
        $('body, html').animate({
          scrollTop: $(goToSection).offset().top
        })
      })
  
      //Header button navigation to Gallery section
      $(".btn-header").click(function() {
      $('html,body').animate({
          scrollTop: $(".gallery").offset().top},
          'slow');
  });
  
  
  //Menu after scroll down
      $(window).on("scroll", function () {
  
  if ($(window).scrollTop() > 250) {
    $('nav.second').addClass('active');
  
  
  } else {
    $('nav.second').removeClass('active');
  
  }
  })

  $(document).ready(function(){
      $('.toggle').click(function(){
          $('ul').toggleClass('mobile-menu');
      })
  })
