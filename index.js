$(window).on('load', function () {
    $(this).scrollTop(0);
    // event listeners to toggle the mobile navigation menu and toggle between the 'X' and the three lines
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        document.querySelector('html').classList.toggle('lock-scroll');
        document.querySelector('body').classList.toggle('lock-scroll');
    })


    // event listeners for anchor tags to get out of the mobile navigation menu and revert the haburger menu from the 'X' to the 3 lines
    const all_a = document.querySelectorAll('.mobile-nav a');
    all_a.forEach(element => {
        element.addEventListener('click', function () {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
            document.querySelector('html').classList.remove('lock-scroll');
            document.querySelector('body').classList.remove('lock-scroll');
        })
    });

    // hide background when contact form is active and slide contact form in viewport
    const contactBtn = document.querySelector('.contBtn');
    contactBtn.addEventListener("click", function () {

        document.querySelector('#title #useful-links .links').classList.add('fade');
        document.querySelector('#title nav').classList.add('fade');
        document.querySelector('#title h1').classList.add('fade');
        document.querySelector('#title h4').classList.add('fade');
        document.querySelector('#title .contBtn').classList.add('fade');
        document.querySelector('#title .more').classList.add('fade');

        document.querySelector('#title #contact-form').classList.add('active-form-sect');
        document.querySelector('#title #contact-form .container .form .contact-form').classList.add('active-form-form');
        document.querySelector('#title #contact-form .container .form .contact-info').classList.add('active-form-info');
        document.querySelector('#title #contact-form .container .form').classList.add('active-form-box');
    });
    const xBtn = document.querySelector('.xBtn');
    xBtn.addEventListener('click', function () {


        document.querySelector('#title #contact-form .container .form .contact-form').classList.add('inactive-form-form');
        document.querySelector('#title #contact-form .container .form .contact-info').classList.add('inactive-form-info');
        document.querySelector('#title #contact-form .container .form').classList.add('inactive-form-box');
        setTimeout(() => {
            document.querySelector('#title #contact-form').classList.add('inactive-form-sect');
        }, 500);

        setTimeout(() => {

            document.querySelector('#title #contact-form').classList.remove('inactive-form-sect');
            document.querySelector('#title #contact-form .container .form .contact-form').classList.remove('inactive-form-form');
            document.querySelector('#title #contact-form .container .form .contact-info').classList.remove('inactive-form-info');
            document.querySelector('#title #contact-form .container .form').classList.remove('inactive-form-box');
            document.querySelector('#title #contact-form').classList.remove('active-form-sect');
            document.querySelector('#title #contact-form .container .form .contact-form').classList.remove('active-form-form');
            document.querySelector('#title #contact-form .container .form .contact-info').classList.remove('active-form-info');
            document.querySelector('#title #contact-form .container .form').classList.remove('active-form-box');
            document.querySelector('#title nav').classList.remove('fade');


            setTimeout(() => {
                document.querySelector('#title #useful-links .links').classList.add('fadeIn');
                document.querySelector('#title nav').classList.add('fadeIn');
                document.querySelector('#title h1').classList.add('fadeIn');
                document.querySelector('#title h4').classList.add('fadeIn');
                document.querySelector('#title .contBtn').classList.add('fadeIn');
                document.querySelector('#title .more').classList.add('fadeIn');


                document.querySelector('#title #useful-links .links').classList.remove('fade');
                document.querySelector('#title h1').classList.remove('fade');
                document.querySelector('#title h4').classList.remove('fade');
                document.querySelector('#title .contBtn').classList.remove('fade');
                document.querySelector('#title .more').classList.remove('fade');
                document.querySelector('#title #useful-links .links').classList.remove('fadeIn');
                document.querySelector('#title nav').classList.remove('fadeIn');
                document.querySelector('#title h1').classList.remove('fadeIn');
                document.querySelector('#title h4').classList.remove('fadeIn');
                document.querySelector('#title .contBtn').classList.remove('fadeIn');
                document.querySelector('#title .more').classList.remove('fadeIn');
            }, 1000);
            
        }, 500);
    });


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


    const inputs = document.querySelectorAll('.input');

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
});