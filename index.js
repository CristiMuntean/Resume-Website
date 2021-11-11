$(window).on('load', function () {
    $(this).scrollTop(0);
    // event listeners to toggle the mobile navigation menu and toggle between the 'X' and the three lines
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        document.querySelector('body').classList.toggle('lock-scroll');
    })


    // event listeners for anchor tags to get out of the mobile navigation menu and revert the haburger menu from the 'X' to the 3 lines
    const all_a = document.querySelectorAll('.mobile-nav a');
    all_a.forEach(element => {
        element.addEventListener('click', function () {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
            document.querySelector('body').classList.remove('lock-scroll');
        })
    });


    var x = window.matchMedia("(min-width:1001px");
    x.addEventListener("change", function () {
        if (mobile_menu.className == "mobile-nav is-active" && !x.matches) //if we change the width while being in the mobile nav menu(where the scroll is locked) into a width
            document.querySelector('body').classList.add('lock-scroll'); //that is bigger than the mobile phone width range then the scroll will be unlocked, but if we come
        else document.querySelector('body').classList.remove('lock-scroll'); //back to the mobile phone width then the scroll will be locked back until we close the mobile nav
    });

    // blur background and lock screen when contact form is active
    const contactBtn = document.querySelector('.contBtn');
    const closeContact = document.querySelector('.xBtn');
    const form = document.getElementById('contact-form');
    contactBtn.addEventListener("click", function () {
        form.classList.add('form-active');
        document.querySelector('body').classList.add('lock-scroll');
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
        document.querySelector('body').classList.remove('lock-scroll');
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