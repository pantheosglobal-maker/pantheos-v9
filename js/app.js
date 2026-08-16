/* =========================================================
   V9 PANTHEOS STORE
   FINAL APP.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PAGE LOADER
       ===================================================== */

    const loader = document.getElementById("page-loader");

    function hideLoader() {
        if (loader) {
            loader.classList.add("loaded");
        }
    }

    /*
       Hide loader when page is ready.
       The timeout is a safety backup so the website
       cannot remain stuck on the loading screen.
    */

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader);
    }

    setTimeout(hideLoader, 2500);


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileNav =
        document.querySelector(".mobile-nav");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", function () {

            mobileNav.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open"
            );

            const bars =
                menuToggle.querySelectorAll("span");

            if (
                mobileNav.classList.contains("active")
            ) {

                if (bars.length >= 3) {

                    bars[0].style.transform =
                        "translateY(7px) rotate(45deg)";

                    bars[1].style.opacity = "0";

                    bars[2].style.transform =
                        "translateY(-7px) rotate(-45deg)";
                }

            } else {

                if (bars.length >= 3) {

                    bars[0].style.transform = "";
                    bars[1].style.opacity = "";
                    bars[2].style.transform = "";
                }
            }

        });


        /* Close menu after selecting a link */

        mobileNav
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileNav.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                        const bars =
                            menuToggle.querySelectorAll(
                                "span"
                            );

                        if (bars.length >= 3) {

                            bars[0].style.transform = "";
                            bars[1].style.opacity = "";
                            bars[2].style.transform = "";
                        }

                    }
                );

            });

    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchInput =
        document.querySelector("#searchInput");

    const searchableItems =
        document.querySelectorAll(".search-item");

    if (
        searchInput &&
        searchableItems.length > 0
    ) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();

                let visibleItems = 0;

                searchableItems.forEach(
                    function (item) {

                        const text =
                            item.textContent
                                .toLowerCase();

                        if (
                            query === "" ||
                            text.includes(query)
                        ) {

                            item.classList.remove(
                                "search-hidden"
                            );

                            visibleItems++;

                        } else {

                            item.classList.add(
                                "search-hidden"
                            );
                        }

                    }
                );


                let noResults =
                    document.querySelector(
                        ".search-no-results"
                    );

                if (
                    query !== "" &&
                    visibleItems === 0
                ) {

                    if (!noResults) {

                        noResults =
                            document.createElement(
                                "div"
                            );

                        noResults.className =
                            "search-no-results";

                        noResults.textContent =
                            "No matching games or services found.";

                        const grid =
                            document.querySelector(
                                ".games-grid"
                            );

                        if (grid) {
                            grid.appendChild(
                                noResults
                            );
                        }

                    }

                    noResults.style.display =
                        "block";

                } else if (noResults) {

                    noResults.style.display =
                        "none";
                }

            }
        );

    }


    /* =====================================================
       FAQ
       ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-list details"
        );

    faqItems.forEach(function (item) {

        item.addEventListener(
            "toggle",
            function () {

                if (!item.open) {
                    return;
                }

                faqItems.forEach(
                    function (otherItem) {

                        if (
                            otherItem !== item &&
                            otherItem.open
                        ) {

                            otherItem.removeAttribute(
                                "open"
                            );

                        }

                    }
                );

            }
        );

    });


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );

    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "visible"
                    );

                } else {

                    backToTop.classList.remove(
                        "visible"
                    );

                }

            },
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute("href");

                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetID
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    const header =
                        document.querySelector(
                            ".site-header"
                        );

                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;

                    const position =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        15;

                    window.scrollTo({
                        top: position,
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '.desktop-nav a[href^="#"]'
        );

    if (
        sections.length &&
        navLinks.length
    ) {

        function updateNavigation() {

            let currentSection = "";

            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 150;

                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );
                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        href ===
                        "#" + currentSection
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }

        window.addEventListener(
            "scroll",
            updateNavigation,
            {
                passive: true
            }
        );

        updateNavigation();

    }


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       EXTERNAL LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="https://"], a[href^="http://"]'
        )
        .forEach(function (link) {

            try {

                const url =
                    new URL(link.href);

                if (
                    url.hostname !==
                    window.location.hostname
                ) {

                    link.target = "_blank";

                    link.rel =
                        "noopener noreferrer";
                }

            } catch (error) {

                /* Ignore invalid URLs */

            }

        });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "Image failed to load:",
                        image.src
                    );

                }
            );

        });


    /* =====================================================
       STARTUP MESSAGE
       ===================================================== */

    console.log(
        "V9 Pantheos Store loaded successfully."
    );

});
