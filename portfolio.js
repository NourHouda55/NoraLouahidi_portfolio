//toggle icom navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll selections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when clicking links(scrolling)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//dark, bright modes 
let darkMode = document.querySelector('#dark');

darkMode.onclick = () => {
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-them');
};

/* ----- swiper ------- */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grapCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/* ------- recieve Data -------*/
    var fullName = document.getElementById('name');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    //`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Number: ${number.value}<br> Message: ${message.value}`

function emailSend() {

    var messageBody = "Name: " + fullName.value + "<br/>Email: " + email.value + "<br/>number: " + number.value
    + "<br/>Message: " + message.value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "noralouahidi1@gmail.com",
        Password: "3739BF13EB8A77D0592BECE1BB62CFC13200",
        To: 'noralouahidi@gmail.com',
        From: "noralouahidi1@gmail.com",
        Subject: subject.value,
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Thank You", "Your message is transferred successuflly!", "success");
            }
            else {
                swal("Error", "Your message was not transferred!", "error");
            }
        }

    );

}