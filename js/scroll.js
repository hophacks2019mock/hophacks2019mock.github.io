
var transitionActivated = false;

//handles scrolling and disabling the overlay
window.addEventListener("scroll", function (event) {
    //var scrollPos = this.scrollY;
    var fadeElem = $('.overlay');
	
	var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

var scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    
    fadeElem.each(function () {
        var $this = $(this), scrollThreshold = 50;
        if (scrollPercent > scrollThreshold && !transitionActivated) {
            

            //remove all particles
            //var elements = document.getElementsByClassName("firefly");
            //for (var i = 0; i < elements.length; i++)
            // elements[i].classList.remove("firefly");

            //removed zoomed in background under text
            document.getElementById("underlay").setAttribute('src', 'img/pre_background.png');
            document.getElementById("underlay").setAttribute('class', null);
            document.getElementById("underlay").setAttribute('id', 'main_image');
            setTimeout(function () {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }, 500);

            
            $(this).animate({ 'opacity': '0' }, 1600);
            setTimeout(function () {

                //remove overlay element
                var overlayElem = document.getElementById('overlay');
                overlayElem.parentNode.removeChild(overlayElem);
                
            }, 1300);
         
            transitionActivated = true;
        }


    })
});




