const links = document.querySelectorAll('#navLink');
const sections = document.querySelectorAll('section');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        let currentLink = e.currentTarget;
        e.currentTarget.classList.add('active');
        links.forEach((link) => {
            if(link != currentLink) {
                if(link.classList.contains('active')) {
                    link.classList.remove('active');
                }else {
                    return;
                }
            }
        })
    })
})

emailjs.init('Npo2oFtKTc2vNB7hD');

const submit = document.getElementById('submit');

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_y8uffhs';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email'
            alert('Sent!');
        },(error) => {
            btn.value = 'Error'
            alert(JSON.stringify(error))
        })
})
   
window.addEventListener('scroll', (e) => {

    let position = window.pageYOffset;

    const getDistance = (section) => {
        let location = 0;
        if(section.offsetParent) {
            do {
                location += section.offsetTop;
                section = section.offsetParent;
            }while(section);
        }
        return location >=0 ? location : 0;
    }

    sections.forEach((section) => {
        if(position >= getDistance(section) - 1) {
            const id = section.getAttribute('id');
            links.forEach((link) => {
                const href = link.getAttribute('href');
                if(href == `#${id}`) {
                    link.classList.add('active');
                }else {
                    if(link.classList.contains('active')){
                        link.classList.remove('active');
                    }else {
                        return null;
                    }
                }
            })
        }
    })

    console.log(links[0]);

    const arrow = document.querySelector('#top');
    if(window.pageYOffset > 550) {
        arrow.classList.remove('hide');
    }else {
        if(arrow.classList.contains('hide')){
            return null;
        }else {
            arrow.classList.add('hide');
        }
    }
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

links.forEach((link) => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
})


