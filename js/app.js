/* =========================================================
   V9 PANTHEOS STORE — GLOBAL JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initPageLoader();

    initStickyHeader();

    initMobileMenu();

    initSmoothScroll();

    initBackToTop();

    initSearch();

    initRevealAnimations();

    initActiveNavigation();

});


/* =========================================================
   PAGE LOADER
   ========================================================= */

function initPageLoader() {

    const loader = document.getElementById("page-loader");

    if (!loader) return;


    const hideLoader = () => {

        loader.classList.add("loaded");

        setTimeout(() => {

            loader.remove();

        }, 600);

    };


    if (document.readyState === "complete") {

        setTimeout(hideLoader, 350);

    } else {

        window.addEventListener(
            "load",
            () => setTimeout(hideLoader, 350),
            { once: true }
        );

    }

}


/* =========================================================
   STICKY HEADER
   ========================================================= */

function initStickyHeader() {

    const header =
        document.querySelector(".site-header");

    if (!header) return;


    const updateHeader = () => {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initMobileMenu() {

    const toggle =
        document.querySelector(".menu-toggle");

    const mobileNav =
        document.querySelector(".mobile-nav");


    if (!toggle || !mobileNav) return;


    const closeMenu = () => {

        toggle.classList.remove("active");

        mobileNav.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow = "";

    };


    const openMenu = () => {

        toggle.classList.add("active");

        mobileNav.classList.add("open");

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

    };


    toggle.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.contains("open");


        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                !mobileNav.contains(event.target) &&
                !toggle.contains(event.target) &&
                mobileNav.classList.contains("open")
            ) {

                closeMenu();

            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 900) {

                closeMenu();

            }

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function initSmoothScroll() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) return;


                    event.preventDefault();


                    const header =
                        document.querySelector(".site-header");


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        12;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });

}


/* =========================================================
   BACK TO TOP
   ========================================================= */

function initBackToTop() {

    const button =
        document.querySelector(".back-to-top");

    if (!button) return;


    const updateButton = () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    };


    updateButton();


    window.addEventListener(
        "scroll",
        updateButton,
        { passive: true }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
   SEARCH SYSTEM
   ========================================================= */

function initSearch() {

    const searchInputs =
        document.querySelectorAll(
            "[data-search]"
        );


    if (!searchInputs.length) return;


    searchInputs.forEach(input => {

        input.addEventListener(
            "input",
            () => {

                const query =
                    input.value
                        .trim()
                        .toLowerCase();


                const targetSelector =
                    input.dataset.search;


                if (!targetSelector) return;


                const items =
                    document.querySelectorAll(
                        targetSelector
                    );


                items.forEach(item => {

                    const searchableText =
                        (
                            item.dataset.searchText ||
                            item.textContent ||
                            ""
                        )
                        .toLowerCase();


                    if (
                        !query ||
                        searchableText.includes(query)
                    ) {

                        item.style.display = "";

                    } else {

                        item.style.display =
                            "none";

                    }

                });

            }
        );

    });

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            "[data-reveal]"
        );


    if (!elements.length) return;


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add("revealed")
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:
                    0.08,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const links =
        document.querySelectorAll(
            ".desktop-nav a, .mobile-nav a"
        );


    if (!links.length) return;


    links.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) return;


        const linkPage =
            href
                .split("/")
                .pop()
                .split("#")[0]
                .toLowerCase();


        if (
            linkPage &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   PHONE / WHATSAPP HELPERS
   ========================================================= */

function openWhatsApp(message = "") {

    const phone =
        "919310651934";


    const encodedMessage =
        encodeURIComponent(message);


    const url =
        encodedMessage
            ? `https://wa.me/${phone}?text=${encodedMessage}`
            : `https://wa.me/${phone}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


window.openWhatsApp =
    openWhatsApp;


/* =========================================================
   COPY TO CLIPBOARD
   ========================================================= */

function copyText(text, button = null) {

    if (!text) return;


    const success = () => {

        if (!button) return;


        const originalText =
            button.textContent;


        button.textContent =
            "Copied ✓";


        setTimeout(() => {

            button.textContent =
                originalText;

        }, 1500);

    };


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(text)
            .then(success)
            .catch(() => {

                fallbackCopy(text, success);

            });

    } else {

        fallbackCopy(text, success);

    }

}


function fallbackCopy(text, success) {

    const textarea =
        document.createElement("textarea");


    textarea.value =
        text;


    textarea.style.position =
        "fixed";

    textarea.style.opacity =
        "0";


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    try {

        document.execCommand(
            "copy"
        );

        success();

    } catch (error) {

        console.warn(
            "Copy failed:",
            error
        );

    }


    textarea.remove();

}


window.copyText =
    copyText;


/* =========================================================
   YEAR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                "[data-current-year]"
            )
            .forEach(element => {

                element.textContent =
                    new Date()
                        .getFullYear();

            });

    }
);


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

document.addEventListener(
    "error",
    event => {

        const image =
            event.target;


        if (
            image &&
            image.tagName === "IMG"
        ) {

            image.classList.add(
                "image-error"
            );

        }

    },
    true
);


/* =========================================================
   EXTERNAL LINKS
   ========================================================= */

document
    .querySelectorAll(
        'a[href^="http"]'
    )
    .forEach(link => {

        const currentHost =
            window.location.hostname;


        try {

            const linkHost =
                new URL(
                    link.href
                ).hostname;


            if (
                linkHost &&
                linkHost !== currentHost
            ) {

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";

            }

        } catch (error) {

            // Ignore invalid URLs.

        }

    });
