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
    // Écoutez l'événement de fermeture du modal pour mettre la vidéo en pause
    var modal = document.getElementById('exampleModal4');
    var video = document.getElementById('demoVideo');

    modal.addEventListener('hide.bs.modal', function () {
        video.pause(); // Met la vidéo en pause lorsque le modal se ferme
        video.currentTime = 0; // Remet la vidéo au début
    });