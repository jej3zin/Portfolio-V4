$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      if (!$('.main_header').hasClass('fixed')) {
        $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
          {
            top: '0px',
          },
          500
        );
      }
    } else {
      $('.main_header').removeClass('fixed');
    }
  });
});
$(window).load(function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ overflow: 'visible' });
});
/* TabActive Menu */
// Captura o caminho atual da URL (ex: /Pages/Developer.html)
const currentPath = window.location.pathname;

// Seleciona todos os links do menu
const links = document.querySelectorAll('.menu_link');

links.forEach((link) => {
  // Se o href do link combina com o caminho da página atual
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('tabActive');
  } else {
    link.classList.remove('tabActive'); // opcional, para evitar duplicidade
  }
});
/* Table content - Page Thumbmaker */
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMenu');
  const menu = document.getElementById('slideMenu');

  if (openBtn && menu) {
    openBtn.addEventListener('click', () => {
      menu.classList.add('activeTable');
    });

    document.addEventListener('click', (e) => {
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnButton = openBtn.contains(e.target);

      if (!isClickInsideMenu && !isClickOnButton) {
        menu.classList.remove('activeTable');
      }
    });
  }
});
