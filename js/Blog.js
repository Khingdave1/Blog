    // Access DOM elemnts //
const menu = document.getElementById('header_mobile-menu');
const head = document.querySelector('header');

    // Modify DOM elemnts //
menu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
});


