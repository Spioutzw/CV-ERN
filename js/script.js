document.addEventListener( 'DOMContentLoaded', function() { 
    const domCmdMainMenu = document.getElementById('cmd-main-menu');
    const domNavMainMenu = document.getElementById('nav-main-menu');
    const mediaQuery = window.matchMedia('(min-width: 992px)')



    if (mediaQuery.matches) {
    domCmdMainMenu.addEventListener( 'mouseenter', function() {
       
       let isMenuHidden = domNavMainMenu.classList.contains( 'hidden' );
     
        if( isMenuHidden ) {
            domNavMainMenu.classList.remove( 'hidden' );
            domCmdMainMenu.classList.add( 'close' );
        }
       
        else {
            domNavMainMenu.classList.add( 'hidden' );
            domCmdMainMenu.classList.remove( 'close' );
        }
    });
    } else {
        domCmdMainMenu.addEventListener( 'click', function() {
       
            let isMenuHidden = domNavMainMenu.classList.contains( 'hidden' );
          
             if( isMenuHidden ) {
                 domNavMainMenu.classList.remove( 'hidden' );
                 domCmdMainMenu.classList.add( 'close' );
             }
            
             else {
                 domNavMainMenu.classList.add( 'hidden' );
                 domCmdMainMenu.classList.remove( 'close' );
             }
         });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
      document.getElementById("btn-gotop").className = (window.pageYOffset > 400) ? "cVisible" : "cInvisible";
    };
  });

