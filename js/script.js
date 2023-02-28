const links = document.querySelectorAll('#navLink');

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
