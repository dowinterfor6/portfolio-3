// Code from: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

$(document).ready(() => {
  $('a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();

      let hash = this.hash;

      $('html, body').animate(
        { scrollTop: $(hash).offset().top }, 
        750, 
        () => {
          window.location.hash = hash;
        }
      );
    }
  });
});