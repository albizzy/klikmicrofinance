//on scroll effect
/*var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("nav-container").style.top = "0";
    } else {
        document.getElementById("nav-container").style.top = "-80px";
    }

    prevScrollPos = currentScrollPos;
}


//ripples effect
const buttons = document.querySelectorAll("a");
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 700);
    })
})

$('#myButton').click(function() {
    var that = $(this);
    that.attr('disabled', true);
    var timer = setTimeout(function() {
        that.attr('disabled', false);
    }, 1000);
});

*/

//Faqs slider animation

let slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("my-faqs-slides");

    for (i = 0; i < slides.length; i++) {
        slides[1].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 };

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}