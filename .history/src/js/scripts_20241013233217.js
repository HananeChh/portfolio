/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
window.onscroll = function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  });
  // Get the video element
  var video = document.getElementById('logisticsVideo');

  // Play video when the modal is shown
  $('#exampleModal4').on('shown.bs.modal', function () {
      video.play();
  });

  // Pause video when the modal is hidden
  $('#exampleModal4').on('hidden.bs.modal', function () {
      video.pause();
      video.currentTime = 0; // Reset the video to the start
  });
