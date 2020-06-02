/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sectionNames = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function generateMenu() {
    const fragment = document.createDocumentFragment();
    
    sectionNames.forEach(function(name){
        let text = name.dataset.nav;
        let id = name.id;
        let li = document.createElement('li');
        li.innerHTML = '<a href="#' + id + '" class="menu__link">' + text + '</a>';
        fragment.appendChild(li);
        
    });

    navList.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
function highlightSection() {
    sectionNames.forEach(function(name){
        let bounding = name.getBoundingClientRect();
        if (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ){
            name.classList.add("your-active-class");
        } else {
            name.classList.remove("your-active-class");
        }

    });
}



// Scroll to anchor ID using scrollTop event
function smoothScroll(event){
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if   
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
generateMenu();

// Scroll to section on link click
$("a").on('click', smoothScroll);

// Set sections as active
window.onscroll = function() {highlightSection()};


