// ==================================================
// PORTFOLIO JAVASCRIPT
// ==================================================


// ==================================================
// 1. SELECT NAVIGATION LINKS AND SECTIONS
// ==================================================

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");


// ==================================================
// 2. CLICK NAVIGATION
// ==================================================

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Remove active class from every link
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");

    });

});


// ==================================================
// 3. SCROLL NAVIGATION
// ==================================================
//
// This detects which section is currently visible
// and automatically highlights that section in navbar.
//

const observerOptions = {

    root: null,

    // Detect the section around the middle
    // of the screen
    rootMargin: "-35% 0px -55% 0px",

    threshold: 0

};


const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            // Check whether the section is visible
            if (entry.isIntersecting) {

                // Get section ID
                const currentSection = entry.target.id;


                // Remove active from all navbar links
                navLinks.forEach(link => {

                    link.classList.remove("active");

                });


                // Find the navbar link belonging
                // to the current section
                const activeLink = document.querySelector(
                    `.nav-link[href="#${currentSection}"]`
                );


                // Add active class
                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    observerOptions

);


// Observe every section
sections.forEach(section => {

    sectionObserver.observe(section);

});





// ==================================================
// 5. NAVBAR SHADOW ON SCROLL
// ==================================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ==================================================
// PROJECT SLIDER
// ==================================================

const projectsGrid = document.querySelector(".projects-grid");

const nextProjectButton = document.querySelector(".project-next");

const previousProjectButton = document.querySelector(".project-prev");


// NEXT PROJECT →

if (nextProjectButton) {

    nextProjectButton.addEventListener("click", function () {

        projectsGrid.scrollBy({
            left: 450,
            behavior: "smooth"
        });

    });

}


// PREVIOUS PROJECT ←

if (previousProjectButton) {

    previousProjectButton.addEventListener("click", function () {

        projectsGrid.scrollBy({
            left: -450,
            behavior: "smooth"
        });

    });

}

// ==================================================
// MOBILE MENU
// ==================================================

const mobileMenuButton = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuButton && navMenu) {

    mobileMenuButton.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-active");

        const isOpen = navMenu.classList.contains("mobile-active");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        if (isOpen) {
            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';
        } else {
            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }

    });


    // CLOSE MENU AFTER CLICKING A LINK

    const navLinks = navMenu.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("mobile-active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}