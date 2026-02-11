document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.mobile-nav-toggle');
  var primary = document.querySelector('.primary-menu');
  var navOverlay = document.querySelector('.nav-overlay');
  if(!toggle || !primary) return;

  function closeMenu(){
    primary.classList.remove('mobile-open');
    document.body.classList.remove('mobile-nav-open');
  }

  toggle.addEventListener('click', function(e){
    primary.classList.toggle('mobile-open');
    document.body.classList.toggle('mobile-nav-open');
  });

  // Close when clicking a menu link
  var links = primary.querySelectorAll('.main-menu a');
  links.forEach(function(a){ a.addEventListener('click', closeMenu); });

  // Close when clicking overlay
  if(navOverlay){ navOverlay.addEventListener('click', closeMenu); }

  // Close on ESC
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
});
