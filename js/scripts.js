



// Modal
// Get the project images
const projectImgs = document.querySelectorAll(".project img");

// Open the modal when the project image is clicked
for(let img of projectImgs) {
    img.addEventListener("click", (e) => {
        const projectId = e.target.dataset.projectId;
        const modal = document.getElementById(`modal${projectId}`);
        modal.style.display = "block";
            });
        }
        
        // Close the modal when the close button is clicked
        const closeBtns = document.querySelectorAll(".close-modal");
        for (let btn of closeBtns) {
            btn.addEventListener("click", (e) => {
                e.target.parentElement.parentElement.style.display = "none";
            });
        }

(function($) {
    "use strict"; 
    // jQuery da rolagem da página:
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Adiciona destaque ao menu principal no momento do Scroll
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Altera o muni para modo responsivo
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Ajuste para a navegação geral
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Animação da rolagem
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

   
    
   
})(jQuery); 



