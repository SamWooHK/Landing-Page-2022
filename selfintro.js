
window.onload = function(){
    typeWriter();
}

// Typewriter
var say = ["I am Creative.", "I Love to learn.", "I Love to program.", "I Love to Develop." ];
var period = 250;
var i = 0;
var isDeleting = false

word="";
function typeWriter(){
    var target = document.getElementById("typeWriter");
    if (isDeleting == false){
        if (i < word.length){
            target.innerHTML += word.charAt(i);
            i++;
        }
        else {
            isDeleting = true;
        }
    }else{
        if (i<0){
            isDeleting = false;
            let index = Math.floor(Math.random() * say.length);
            word = say[index]
        }
        else{
            target.innerHTML = word.substring(0,target.innerHTML.length-1);
            i--;
        }
    }
    setTimeout(typeWriter,period);
};

//toTop button
function toTopButton(){
    let mybutton=document.querySelector(".toTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };
function clicktoTop(){
    window.scrollTo(0,0);
}

    window.onscroll = function() {toTopButton()};

//knowme
function knowMe(){
    let target = document.querySelector(".skills");
    let rect = target.getBoundingClientRect();
    window.scrollTo(0,rect.top);
}


// send email
const btn = document.getElementById('formbtn');

document.getElementById('my-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'Emailjs';
   const templateID = 'landing_page';
   const YOUR_PUBLIC_KEY = "UuGmMNHzweFbQ9uRi";

   emailjs.init(YOUR_PUBLIC_KEY);

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Thank you for your contact!\n I will reply as soon as possible!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
