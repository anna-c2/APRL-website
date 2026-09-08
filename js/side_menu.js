async function loadMenu() {
    const menuContainer = document.querySelector("#menu-component");

    if (!menuContainer) return;

    const response = await fetch("components/side_menu.html");
    const html = await response.text();

    menuContainer.innerHTML = html;

    // Now that the menu HTML exists, initialize its JS
    initializeMenu();
}


function initializeMenu() {
    const hamburger = document.querySelector("#hamburger");
    const sideMenu = document.querySelector("#sideMenu");
    const closeMenu = document.querySelector("#closeMenu");
    const menuOverlay = document.querySelector("#menuOverlay");
    const currentPage = window.location.pathname.split("/").pop();

    const isHomePage =
        currentPage === "" ||
        currentPage === "index.html";

    if (isHomePage) {
        hamburger.classList.add("black");
    }

    document.querySelectorAll("[data-section]").forEach(link => {
        const section = link.dataset.section;
        if (isHomePage) {
            link.href = `#${section}`;
        }
        else {
            link.href = `index.html#${section}`;
        }
    });


    /* -----------------------------
       OPEN MENU
    ----------------------------- */

    hamburger.addEventListener("click", () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");

        hamburger.setAttribute("aria-expanded", "true");

        document.body.style.overflow = "hidden";
    });


    /* -----------------------------
       CLOSE MENU
    ----------------------------- */

    function closeNavigation() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";
    }


    closeMenu.addEventListener("click", closeNavigation);

    menuOverlay.addEventListener("click", closeNavigation);


    /* Close menu after clicking a link */

    sideMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeNavigation);
    });


    /* Close menu with Escape key */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });


    /* -----------------------------
       SHOW HAMBURGER
    ----------------------------- */

    const aboutSection = document.querySelector("#about-section");

    if (aboutSection) {

        function updateHamburger() {
            const aboutTop = aboutSection.offsetTop;

            if (window.scrollY >= aboutTop) {
                hamburger.classList.add("show");
            } else {
                hamburger.classList.remove("show");
            }
        }

        window.addEventListener("scroll", updateHamburger);

        // Check position when page first loads
        updateHamburger();

    } else {
        // Other pages
        hamburger.classList.add("show");
    }
}


/* Load component */
loadMenu();