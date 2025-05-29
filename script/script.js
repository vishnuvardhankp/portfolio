
var contact_btn = document.getElementById("Contact-btn");
contact_btn.addEventListener('click' , function() {
    window.open("https://wa.link/ak8xnl");
   
});

var about_btn = document.getElementById("home-about-btn");
about_btn.addEventListener('click' , function() {

    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:'smooth'
    });
});

var insta = document.getElementById("insta-logo");
insta.addEventListener('click' , function() {
    window.open("https://www.instagram.com/vishnu_vardhan_kp?igsh=cDN2MHlzZWoyMDF6");

});

var whatsapp = document.getElementById("whatsapp-logo");
whatsapp.addEventListener('click' , function() {
    window.open("https://wa.link/ak8xnl");

});

var telegram = document.getElementById("telegram-logo");
telegram.addEventListener('click' , function() {
    window.open("https://t.me/VISHNUVARDHANKP");

});