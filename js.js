//Animation scroll with inspiration from this page: https://www.youtube.com/watch?v=huVJW23JHKQ
//elementer der har animation når man scroller ned til dem - lagt på inspirations billeder med class fade-in.

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver (function (
 entries,
 appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
}

        });
    },
    appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



 //Nav bar inspiration from this page: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown//
function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }