$(window).on('load', function () {
    $(this).scrollTop(0);
    // event listeners to toggle the mobile navigation menu and toggle between the 'X' and the three lines
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })


    // event listeners for anchor tags to get out of the mobile navigation menu and revert the haburger menu from the 'X' to the 3 lines
    const all_a = document.querySelectorAll('.mobile-nav a');
    all_a.forEach(element => {
        element.addEventListener('click', function () {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        })
    });

    // blur background when contact form is active
    const contactBtn = document.querySelector('.contBtn');
    const closeContact = document.querySelector('.xBtn');
    const form = document.getElementById('contact-form');
    contactBtn.addEventListener("click", function () {
        form.classList.add('form-active');
        document.querySelector('#title .container nav').classList.add('blur');
        document.querySelector('#title .container h1').classList.add('blur');
        document.querySelector('#title .container h4').classList.add('blur');
        document.querySelector('#title .container .contBtn').classList.add('blur');
    });
    closeContact.addEventListener('click', function () {
        form.classList.remove('form-active');
        document.querySelector('#title .container nav').classList.remove('blur');
        document.querySelector('#title .container h1').classList.remove('blur');
        document.querySelector('#title .container h4').classList.remove('blur');
        document.querySelector('#title .container .contBtn').classList.remove('blur');
        form.classList.add('form-inactive');
        setTimeout(() => {
            form.classList.remove('form-inactive');
        }, 800);
    })

    // reveal section on scroll
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveal = document.querySelectorAll('.reveal');
        reveal.forEach(element => {
            var windowHeight = window.innerHeight;
            var revealTop = element.getBoundingClientRect().top;
            var revealPoint = 200;

            if (revealTop < windowHeight - revealPoint)
                element.classList.add('reveal-active');
        })
    }

});