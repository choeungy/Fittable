//code from https://www.w3schools.com/howto/howto_js_navbar_slide.asp
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("main-header").style.top = "0";
    } else {
      document.getElementById("main-header").style.top = "-200px";
    }
  }

//code from: https://www.w3schools.com/howto/howto_css_modal_images.asp
// Get the modal
  var modal = document.getElementById("myModal2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption2");
  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

//code from: https://www.w3schools.com/howto/howto_js_lightbox.asp
      // Open the Modal
  function openModal() {
  document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
  document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  }

//end code
