const home = document.querySelector('.home');
const container = document.querySelector(".container");
const my_name = document.querySelector('.home__left__title')
const email_button = document.getElementById('email-button')
const description = document.querySelector('.home__left__description')

const superman = document.querySelector('.superman')

container.addEventListener("mousemove", e => {

    let x_axis = (window.innerWidth / 2 - e.pageX) / 55;
    let y_axis = (window.innerHeight / 2 - e.pageY) / 55;
    home.style.transform = `rotateY(${y_axis}deg) rotateX(${x_axis}deg)`
})





container.addEventListener('mouseenter', e => {

    console.log("oooo")
    home.style.transition = 'none';
    my_name.style.transform = "translateZ(150px) translateY(20px)";
    my_name.style.textShadow = "5px 5px 40px  rgb(126, 121, 121)"
    superman.style.transform = "translateZ(300px) translateY(10px) translateX(50px) rotate(10deg)";
    // superman.style.boxShadow="5px 5px 40px  rgb(126, 121, 121)"

    email_button.style.transform = "translateZ(100px) translateY(20px)";
    email_button.style.textShadow = "5px 5px 20px  rgb(126, 121, 121)"

    description.style.transform = "translateZ(50px) translateY(20px)";


})


container.addEventListener('mouseleave', e => {

    home.style.transition = `all 0.5s ease`
    home.style.transform = `rotateY(0deg) rotateX(0deg)`
    my_name.style.transform = "translateZ(0) translateY(0)";
    my_name.style.textShadow = "none"

    superman.style.transform = "translateZ(0) translateY(0) translateX(0) rotate(0)";
    email_button.style.transform = "translateZ(0) translateY(0)";
    email_button.style.textShadow = "none"

    description.style.transform = "translateZ(0px) translateY(0)";


})
