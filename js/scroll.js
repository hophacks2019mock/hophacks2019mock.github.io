
var transitionActivated = false;

//handles scrolling and disabling the overlay
window.addEventListener("scroll", function (event) {
    var scrollPos = this.scrollY;
    var fadeElem = $('.overlay');
    
    fadeElem.each(function () {
        var $this = $(this), scrollThreshold = 900;
        if (scrollPos > scrollThreshold && !transitionActivated) {
            
            $(this).animate({ 'opacity': '0' }, 1600);

            //remove all particles
            //var elements = document.getElementsByClassName("firefly");
            //for (var i = 0; i < elements.length; i++)
            // elements[i].classList.remove("firefly");

            //removed zoomed in background under text
            var underlayElem = document.getElementById('underlay');
            underlayElem.parentNode.removeChild(underlayElem);
            
            setTimeout(function () {

                //remove overlay element
                var overlayElem = document.getElementById('overlay');
                overlayElem.parentNode.removeChild(overlayElem);
                
            }, 1600);
            window.scrollTo(0, 0);
           
            transitionActivated = true;
        }


    })
});

function hover() {
    document.getElementById("main_image").setAttribute('src', 'img/background.png');
    //document.getElementById("registration_button").style.display = "hidden";
}




