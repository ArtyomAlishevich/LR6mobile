document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', open);
    });
  }
  const track = document.getElementById('track');
  const dots = document.querySelectorAll('.dot');
  if (track && dots.length) {
    track.addEventListener('scroll', () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    });
  }

});
