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
  // Écoutez l'événement d'ouverture du modal pour démarrer la vidéo
  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('exampleModal4');
    var video = document.getElementById('logisticsVideo');

    // Play video when the modal is opened
    modal.addEventListener('show.bs.modal', function () {
        video.play();
    });

    // Pause and reset video when the modal is closed
    modal.addEventListener('hidden.bs.modal', function () {
        video.pause();
        video.currentTime = 0; // Reset video to the start
    });
});
