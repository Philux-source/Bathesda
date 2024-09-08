window.addEventListener('scroll', function() {
    const socialNav = document.querySelector('.social-nav');
    if (window.scrollY > 50) {
        socialNav.classList.remove('show-social');
        socialNav.classList.add('hide-social');
    } else {
        socialNav.classList.remove('hide-social');
        socialNav.classList.add('show-social');
    }
});
