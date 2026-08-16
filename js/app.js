/* =========================================================
   V9 PANTHEOS STORE
   FINAL GLOBAL STYLESHEET
   ========================================================= */


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    background: #07080d;
    color: #f5f7fb;
    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

body.menu-open {
    overflow: hidden;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

::selection {
    background: #8b5cf6;
    color: #ffffff;
}


/* =========================================================
   VARIABLES
   ========================================================= */

:root {

    --bg-main: #07080d;
    --bg-secondary: #0b0d14;
    --bg-card: #10131c;
    --bg-card-light: #151925;

    --border: rgba(255, 255, 255, 0.08);
    --border-light: rgba(255, 255, 255, 0.14);

    --text-main: #f5f7fb;
    --text-secondary: #a7adbd;
    --text-muted: #747b8d;

    --primary: #8b5cf6;
    --primary-light: #a78bfa;
    --primary-dark: #6d28d9;

    --accent: #22d3ee;

    --success: #22c55e;

    --container: 1180px;

    --radius-small: 12px;
    --radius: 18px;
    --radius-large: 28px;

    --shadow:
        0 20px 60px rgba(0, 0, 0, 0.35);

    --transition:
        0.25s ease;

}


/* =========================================================
   CONTAINER
   ========================================================= */

.container {
    width: min(
        calc(100% - 40px),
        var(--container)
    );

    margin-inline: auto;
}


/* =========================================================
   PAGE LOADER
   ========================================================= */

#page-loader {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.14),
            transparent 45%
        ),
        #07080d;

    transition:
        opacity 0.5s ease,
        visibility 0.5s ease;
}

#page-loader.loaded {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-card {
    width: min(280px, 80vw);
    text-align: center;
}

.loader-card img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 0 auto 22px;

    border-radius: 20px;

    filter:
        drop-shadow(
            0 0 30px rgba(139, 92, 246, 0.35)
        );
}

.loader-card p {
    margin-top: 12px;

    color: var(--text-muted);

    font-size: 11px;
    font-weight: 800;
    letter-spacing: 3px;
}

.loader-bar {
    height: 3px;
    width: 100%;

    overflow: hidden;

    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
}

.loader-bar span {
    display: block;

    width: 40%;
    height: 100%;

    border-radius: inherit;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            var(--accent)
        );

    animation:
        loaderMove 1.1s infinite ease-in-out;
}

@keyframes loaderMove {

    0% {
        transform: translateX(-120%);
    }

    100% {
        transform: translateX(280%);
    }

}


/* =========================================================
   HEADER
   ========================================================= */

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;

    background:
        rgba(7, 8, 13, 0.82);

    border-bottom:
        1px solid var(--border);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
}

.nav-container {
    min-height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 25px;
}


/* =========================================================
   BRAND
   ========================================================= */

.brand {
    display: inline-flex;
    align-items: center;
    gap: 11px;

    flex-shrink: 0;
}

.brand-logo {
    width: 45px;
    height: 45px;

    object-fit: contain;

    border-radius: 11px;

    filter:
        drop-shadow(
            0 0 18px rgba(139, 92, 246, 0.25)
        );
}

.brand-text {
    display: flex;
    flex-direction: column;

    line-height: 1;
}

.brand-text strong {
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 1.4px;
}

.brand-text span {
    margin-top: 5px;

    color: var(--text-muted);

    font-size: 8px;
    font-weight: 800;
    letter-spacing: 2.4px;
}


/* =========================================================
   DESKTOP NAVIGATION
   ========================================================= */

.desktop-nav {
    display: flex;
    align-items: center;
    gap: 7px;

    margin-left: auto;
}

.nav-link {
    position: relative;

    padding: 10px 14px;

    color: var(--text-secondary);

    font-size: 13px;
    font-weight: 700;

    border-radius: 10px;

    transition:
        color var(--transition),
        background var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
}

.nav-link.active::after {
    content: "";

    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 3px;

    height: 2px;

    border-radius: 999px;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            var(--accent)
        );
}


/* =========================================================
   NAV ACTIONS
   ========================================================= */

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-whatsapp {
    padding: 10px 17px;

    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 10px;

    color: #ffffff;

    background:
        rgba(34, 197, 94, 0.12);

    font-size: 12px;
    font-weight: 800;

    transition:
        transform var(--transition),
        background var(--transition);
}

.nav-whatsapp:hover {
    transform: translateY(-2px);

    background:
        rgba(34, 197, 94, 0.2);
}


/* =========================================================
   MOBILE MENU BUTTON
   ========================================================= */

.menu-toggle {
    display: none;

    width: 43px;
    height: 43px;

    border: 1px solid var(--border);
    border-radius: 11px;

    background: var(--bg-card);

    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 5px;
}

.menu-toggle span {
    width: 19px;
    height: 2px;

    border-radius: 999px;

    background: #ffffff;

    transition:
        transform var(--transition),
        opacity var(--transition);
}


/* =========================================================
   MOBILE NAV
   ========================================================= */

.mobile-nav {
    display: none;

    padding: 12px 20px 20px;

    border-top: 1px solid var(--border);

    background:
        rgba(7, 8, 13, 0.98);
}

.mobile-nav a {
    display: block;

    padding: 13px 5px;

    color: var(--text-secondary);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.05);

    font-size: 14px;
    font-weight: 700;
}

.mobile-nav a:hover {
    color: #ffffff;
}

.mobile-whatsapp {
    margin-top: 12px;

    padding: 13px !important;

    text-align: center;

    border: 1px solid rgba(34, 197, 94, 0.25) !important;
    border-radius: 11px;

    background:
        rgba(34, 197, 94, 0.1);
}


/* =========================================================
   HERO
   ========================================================= */

.hero-section {
    position: relative;

    min-height: 650px;

    display: flex;
    align-items: center;

    overflow: hidden;

    border-bottom:
        1px solid var(--border);
}

.hero-background {
    position: absolute;
    inset: 0;

    z-index: 0;

    overflow: hidden;
}

.hero-background::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            #07080d 0%,
            rgba(7, 8, 13, 0.92) 32%,
            rgba(7, 8, 13, 0.65) 62%,
            rgba(7, 8, 13, 0.88) 100%
        );
}

.hero-background img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    opacity: 0.55;

    transform: scale(1.02);
}

.hero-container {
    position: relative;
    z-index: 1;

    min-height: 650px;

    display: flex;
    align-items: center;
}

.hero-content {
    width: min(680px, 100%);

    padding: 70px 0;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: var(--primary-light);

    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2.6px;
}

.eyebrow::before {
    content: "";

    width: 24px;
    height: 2px;

    border-radius: 999px;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            var(--accent)
        );
}

.hero-content h1 {
    margin-top: 17px;

    max-width: 680px;

    font-size:
        clamp(42px, 6vw, 76px);

    line-height: 0.98;

    letter-spacing: -3px;
    font-weight: 950;
}

.hero-content h1 span {
    display: block;

    background:
        linear-gradient(
            90deg,
            #ffffff,
            var(--primary-light),
            var(--accent)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.hero-content > p {
    max-width: 580px;

    margin-top: 25px;

    color: var(--text-secondary);

    font-size: 16px;
    line-height: 1.8;
}


/* =========================================================
   HERO BUTTONS
   ========================================================= */

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    margin-top: 32px;
}

.btn {
    min-height: 46px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 20px;

    border-radius: 11px;

    font-size: 12px;
    font-weight: 850;

    transition:
        transform var(--transition),
        box-shadow var(--transition),
        background var(--transition);
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-primary {
    color: #ffffff;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            var(--primary-dark)
        );

    box-shadow:
        0 10px 30px rgba(109, 40, 217, 0.28);
}

.btn-primary:hover {
    box-shadow:
        0 15px 35px rgba(109, 40, 217, 0.4);
}

.btn-secondary {
    color: #ffffff;

    border:
        1px solid var(--border-light);

    background:
        rgba(255, 255, 255, 0.045);
}

.btn-secondary:hover {
    background:
        rgba(255, 255, 255, 0.08);
}


/* =========================================================
   HERO FEATURES
   ========================================================= */

.hero-features {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    margin-top: 38px;
}

.hero-feature {
    display: flex;
    flex-direction: column;
}

.hero-feature strong {
    font-size: 12px;
    font-weight: 850;
}

.hero-feature span {
    margin-top: 2px;

    color: var(--text-muted);

    font-size: 10px;
}


/* =========================================================
   SEARCH
   ========================================================= */

.search-section {
    position: relative;
    z-index: 5;

    margin-top: -30px;
}

.search-box {
    min-height: 62px;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 0 20px;

    border:
        1px solid var(--border-light);

    border-radius: 16px;

    background:
        rgba(16, 19, 28, 0.95);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.3);

    backdrop-filter: blur(15px);
}

.search-box > span {
    color: var(--primary-light);

    font-size: 24px;
    line-height: 1;
}

.search-box input {
    width: 100%;

    border: 0;
    outline: 0;

    color: #ffffff;

    background: transparent;

    font-size: 14px;
}

.search-box input::placeholder {
    color: var(--text-muted);
}


/* =========================================================
   GENERAL SECTIONS
   ========================================================= */

.content-section {
    padding: 105px 0 20px;
}

.section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 30px;

    margin-bottom: 34px;
}

.section-heading h2 {
    margin-top: 8px;

    font-size:
        clamp(28px, 4vw, 42px);

    line-height: 1.1;

    letter-spacing: -1.5px;
}

.section-heading > p {
    max-width: 430px;

    color: var(--text-secondary);

    font-size: 13px;
    line-height: 1.7;
}


/* =========================================================
   GAMES GRID
   ========================================================= */

.games-grid {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 16px;
}

.game-card {
    position: relative;

    overflow: hidden;

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    background:
        linear-gradient(
            145deg,
            #12151f,
            #0c0f16
        );

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.game-card:hover {
    transform: translateY(-6px);

    border-color:
        rgba(139, 92, 246, 0.45);

    box-shadow:
        0 22px 45px rgba(0, 0, 0, 0.32);
}

.game-image {
    position: relative;

    aspect-ratio: 1.45 / 1;

    overflow: hidden;

    background: #0b0d13;
}

.game-image::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 45%,
            rgba(7, 8, 13, 0.5)
        );
}

.game-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform 0.45s ease;
}

.game-card:hover .game-image img {
    transform: scale(1.07);
}

.game-info {
    padding: 17px;
}

.game-info h3 {
    font-size: 14px;
    font-weight: 850;

    line-height: 1.3;
}

.game-info p {
    margin-top: 4px;

    color: var(--text-muted);

    font-size: 11px;
}

.game-info span {
    display: inline-block;

    margin-top: 14px;

    color: var(--primary-light);

    font-size: 10px;
    font-weight: 850;
}


/* =========================================================
   TRUST
   ========================================================= */

.trust-section {
    padding: 75px 0;

    border-top:
        1px solid var(--border);

    border-bottom:
        1px solid var(--border);

    background:
        linear-gradient(
            90deg,
            rgba(139, 92, 246, 0.04),
            rgba(34, 211, 238, 0.025),
            rgba(139, 92, 246, 0.04)
        );
}

.trust-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.trust-item {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 13px;

    min-height: 70px;

    border-right:
        1px solid var(--border);
}

.trust-item:last-child {
    border-right: 0;
}

.trust-item > strong {
    font-size: 25px;
}

.trust-item div {
    display: flex;
    flex-direction: column;
}

.trust-item b {
    font-size: 13px;
}

.trust-item span {
    color: var(--text-muted);

    font-size: 10px;
}


/* =========================================================
   SERVICES
   ========================================================= */

.service-grid {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 16px;
}

.service-card {
    display: flex;
    align-items: flex-start;

    gap: 18px;

    min-height: 190px;

    padding: 25px;

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    background:
        linear-gradient(
            145deg,
            #11141e,
            #0b0e15
        );

    transition:
        transform var(--transition),
        border-color var(--transition),
        background var(--transition);
}

.service-card:hover {
    transform: translateY(-5px);

    border-color:
        rgba(139, 92, 246, 0.4);

    background:
        linear-gradient(
            145deg,
            #151827,
            #0d1018
        );
}

.service-icon {
    width: 55px;
    height: 55px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.18),
            rgba(34, 211, 238, 0.08)
        );

    border:
        1px solid rgba(139, 92, 246, 0.18);

    font-size: 24px;
}

.service-content h3 {
    font-size: 16px;
    font-weight: 850;
}

.service-content p {
    margin-top: 8px;

    color: var(--text-secondary);

    font-size: 11px;
    line-height: 1.7;
}

.service-content span {
    display: inline-block;

    margin-top: 15px;

    color: var(--primary-light);

    font-size: 10px;
    font-weight: 850;
}


/* =========================================================
   MINI GIFT CARDS
   ========================================================= */

.mini-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 14px;
}

.mini-card {
    display: flex;
    align-items: center;

    gap: 13px;

    min-height: 82px;

    padding: 15px;

    border:
        1px solid var(--border);

    border-radius: 14px;

    background: var(--bg-card);

    transition:
        transform var(--transition),
        border-color var(--transition);
}

.mini-card:hover {
    transform: translateY(-3px);

    border-color:
        rgba(139, 92, 246, 0.35);
}

.mini-icon {
    width: 43px;
    height: 43px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 11px;

    background:
        rgba(139, 92, 246, 0.12);

    color: var(--primary-light);

    font-size: 15px;
    font-weight: 900;
}

.mini-card h3 {
    font-size: 12px;
    font-weight: 800;
}

.mini-card p {
    margin-top: 2px;

    color: var(--text-muted);

    font-size: 10px;
}


/* =========================================================
   COMMUNITY
   ========================================================= */

.community-section {
    padding: 90px 0;
}

.community-box {
    position: relative;

    overflow: hidden;

    padding: 55px;

    border:
        1px solid var(--border-light);

    border-radius: var(--radius-large);

    background:
        radial-gradient(
            circle at 90% 20%,
            rgba(34, 211, 238, 0.09),
            transparent 35%
        ),
        radial-gradient(
            circle at 10% 90%,
            rgba(139, 92, 246, 0.13),
            transparent 40%
        ),
        #0d1018;
}

.community-content {
    max-width: 650px;
}

.community-content h2 {
    margin-top: 9px;

    font-size:
        clamp(28px, 4vw, 42px);

    letter-spacing: -1.5px;
}

.community-content > p {
    margin-top: 12px;

    color: var(--text-secondary);

    font-size: 13px;
}

.community-links {
    display: flex;
    flex-wrap: wrap;

    gap: 10px;

    margin-top: 25px;
}

.community-link {
    display: inline-flex;
    align-items: center;

    gap: 9px;

    padding: 10px 14px;

    border:
        1px solid var(--border);

    border-radius: 10px;

    background:
        rgba(255, 255, 255, 0.04);

    font-size: 11px;
    font-weight: 800;

    transition:
        background var(--transition),
        transform var(--transition);
}

.community-link:hover {
    transform: translateY(-2px);

    background:
        rgba(255, 255, 255, 0.08);
}

.community-link img {
    width: 24px;
    height: 24px;

    object-fit: cover;

    border-radius: 6px;
}


/* =========================================================
   PAYMENT
   ========================================================= */

.payment-section {
    padding: 20px 0 100px;
}

.payment-box {
    display: grid;

    grid-template-columns:
        1fr 260px;

    align-items: center;

    gap: 50px;

    padding: 45px;

    border:
        1px solid var(--border);

    border-radius: var(--radius-large);

    background:
        linear-gradient(
            135deg,
            #11141d,
            #0b0e15
        );
}

.payment-content {
    max-width: 600px;
}

.payment-content h2 {
    margin-top: 8px;

    font-size:
        clamp(28px, 4vw, 40px);

    letter-spacing: -1px;
}

.payment-content > p {
    margin-top: 12px;

    color: var(--text-secondary);

    font-size: 13px;
    line-height: 1.8;
}

.payment-warning {
    display: flex;
    flex-direction: column;

    gap: 3px;

    margin-top: 22px;
    padding: 14px 16px;

    border-left:
        3px solid var(--primary);

    background:
        rgba(139, 92, 246, 0.07);
}

.payment-warning strong {
    font-size: 11px;
}

.payment-warning span {
    color: var(--text-muted);

    font-size: 10px;
}

.qr-wrapper {
    display: flex;
    justify-content: center;
}

.qr-wrapper img {
    width: 230px;
    height: 230px;

    object-fit: cover;

    padding: 9px;

    border-radius: 16px;

    background: #ffffff;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.35);
}


/* =========================================================
   FAQ
   ========================================================= */

.faq-section {
    padding: 20px 0 100px;
}

.faq-list {
    max-width: 900px;

    margin-inline: auto;
}

.faq-list details {
    border-bottom:
        1px solid var(--border);
}

.faq-list details:first-child {
    border-top:
        1px solid var(--border);
}

.faq-list summary {
    position: relative;

    padding: 21px 45px 21px 5px;

    list-style: none;

    cursor: pointer;

    font-size: 13px;
    font-weight: 800;
}

.faq-list summary::-webkit-details-marker {
    display: none;
}

.faq-list summary::after {
    content: "+";

    position: absolute;
    right: 5px;
    top: 17px;

    color: var(--primary-light);

    font-size: 21px;
    font-weight: 400;

    transition:
        transform var(--transition);
}

.faq-list details[open] summary::after {
    transform: rotate(45deg);
}

.faq-list details p {
    max-width: 800px;

    padding:
        0 45px 22px 5px;

    color: var(--text-secondary);

    font-size: 12px;
    line-height: 1.8;
}


/* =========================================================
   SUPPORT
   ========================================================= */

.support-section {
    padding: 0 0 100px;
}

.support-box {
    display: flex;
    align-items: center;

    gap: 22px;

    padding: 30px;

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.08),
            rgba(34, 211, 238, 0.025)
        );
}

.support-icon {
    width: 65px;
    height: 65px;

    flex-shrink: 0;

    overflow: hidden;

    border-radius: 16px;

    border:
        1px solid var(--border);
}

.support-icon img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.support-content {
    flex: 1;
}

.support-content h2 {
    margin-top: 5px;

    font-size: 24px;
}

.support-content p {
    margin-top: 4px;

    color: var(--text-secondary);

    font-size: 11px;
}

.support-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}


/* =========================================================
   FOOTER
   ========================================================= */

.site-footer {
    padding: 70px 0 25px;

    border-top:
        1px solid var(--border);

    background:
        #05060a;
}

.footer-grid {
    display: grid;

    grid-template-columns:
        2fr 1fr 1fr 1fr;

    gap: 40px;

    padding-bottom: 50px;
}

.footer-brand > p {
    max-width: 280px;

    margin-top: 17px;

    color: var(--text-muted);

    font-size: 11px;
    line-height: 1.7;
}

.footer-column {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
}

.footer-column h3 {
    margin-bottom: 15px;

    color: #ffffff;

    font-size: 11px;
    font-weight: 850;
    letter-spacing: 0.5px;
}

.footer-column a {
    margin-bottom: 9px;

    color: var(--text-muted);

    font-size: 11px;

    transition:
        color var(--transition);
}

.footer-column a:hover {
    color: #ffffff;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding-top: 22px;

    border-top:
        1px solid var(--border);

    color: var(--text-muted);

    font-size: 9px;
}


/* =========================================================
   FLOATING WHATSAPP
   ========================================================= */

.floating-whatsapp {
    position: fixed;

    right: 20px;
    bottom: 20px;

    z-index: 900;

    width: 57px;
    height: 57px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #20c863;

    box-shadow:
        0 12px 35px rgba(0, 0, 0, 0.4);

    transition:
        transform var(--transition);
}

.floating-whatsapp:hover {
    transform: translateY(-4px) scale(1.04);
}

.floating-whatsapp img {
    width: 31px;
    height: 31px;

    object-fit: cover;

    border-radius: 50%;
}

.whatsapp-tooltip {
    position: absolute;

    right: 67px;

    padding: 7px 10px;

    white-space: nowrap;

    border:
        1px solid var(--border);

    border-radius: 8px;

    background: #11141c;

    color: #ffffff;

    font-size: 10px;

    opacity: 0;

    pointer-events: none;

    transform: translateX(5px);

    transition:
        opacity var(--transition),
        transform var(--transition);
}

.floating-whatsapp:hover .whatsapp-tooltip {
    opacity: 1;

    transform: translateX(0);
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

.back-to-top {
    position: fixed;

    right: 20px;
    bottom: 88px;

    z-index: 890;

    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid var(--border-light);

    border-radius: 10px;

    background:
        rgba(16, 19, 28, 0.9);

    color: #ffffff;

    font-size: 17px;

    opacity: 0;
    visibility: hidden;

    transform: translateY(8px);

    transition:
        opacity var(--transition),
        visibility var(--transition),
        transform var(--transition);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;

    transform: translateY(0);
}


/* =========================================================
   SEARCH STATES
   ========================================================= */

.search-item.search-hidden {
    display: none !important;
}

.search-no-results {
    grid-column: 1 / -1;

    padding: 40px;

    text-align: center;

    color: var(--text-muted);

    border:
        1px dashed var(--border);

    border-radius: var(--radius);
}


/* =========================================================
   GENERAL ANIMATION
   ========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(18px);

    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 1000px) {

    .desktop-nav {
        display: none;
    }

    .menu-toggle {
        display: flex;
    }

    .nav-whatsapp {
        display: none;
    }

    .games-grid {
        grid-template-columns:
            repeat(3, minmax(0, 1fr));
    }

    .service-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .mini-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .payment-box {
        grid-template-columns: 1fr 220px;
    }

    .qr-wrapper img {
        width: 190px;
        height: 190px;
    }

    .footer-grid {
        grid-template-columns:
            2fr 1fr 1fr;
    }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 700px) {

    .container {
        width: min(
            calc(100% - 28px),
            var(--container)
        );
    }

    .nav-container {
        min-height: 68px;
    }

    .brand-logo {
        width: 40px;
        height: 40px;
    }

    .brand-text strong {
        font-size: 13px;
    }

    .brand-text span {
        font-size: 7px;
    }

    .mobile-nav.active {
        display: block;
    }


    /* HERO */

    .hero-section {
        min-height: 590px;
    }

    .hero-container {
        min-height: 590px;
    }

    .hero-background::after {
        background:
            linear-gradient(
                180deg,
                rgba(7, 8, 13, 0.68),
                #07080d 92%
            );
    }

    .hero-background img {
        opacity: 0.4;
    }

    .hero-content {
        padding: 65px 0;
    }

    .hero-content h1 {
        font-size:
            clamp(39px, 12vw, 58px);

        letter-spacing: -2px;
    }

    .hero-content > p {
        font-size: 13px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        width: 100%;
    }

    .hero-features {
        gap: 18px;
    }


    /* SEARCH */

    .search-section {
        margin-top: -22px;
    }

    .search-box {
        min-height: 56px;

        padding: 0 15px;
    }


    /* SECTIONS */

    .content-section {
        padding: 75px 0 10px;
    }

    .section-heading {
        align-items: flex-start;
        flex-direction: column;

        gap: 13px;

        margin-bottom: 25px;
    }

    .section-heading > p {
        font-size: 11px;
    }


    /* GAMES */

    .games-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 10px;
    }

    .game-info {
        padding: 13px;
    }

    .game-info h3 {
        font-size: 12px;
    }

    .game-info p {
        font-size: 9px;
    }

    .game-info span {
        margin-top: 10px;

        font-size: 9px;
    }


    /* TRUST */

    .trust-section {
        padding: 45px 0;
    }

    .trust-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 0;
    }

    .trust-item {
        min-height: 75px;

        padding: 10px;

        border-right: 0;
        border-bottom:
            1px solid var(--border);
    }

    .trust-item:nth-child(3),
    .trust-item:nth-child(4) {
        border-bottom: 0;
    }


    /* SERVICES */

    .service-grid {
        grid-template-columns: 1fr;
    }

    .service-card {
        min-height: auto;

        padding: 20px;
    }


    /* MINI */

    .mini-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 9px;
    }

    .mini-card {
        padding: 12px;

        min-height: 72px;
    }

    .mini-icon {
        width: 36px;
        height: 36px;

        font-size: 12px;
    }

    .mini-card h3 {
        font-size: 10px;
    }

    .mini-card p {
        font-size: 8px;
    }


    /* COMMUNITY */

    .community-section {
        padding: 70px 0;
    }

    .community-box {
        padding: 30px 22px;
    }

    .community-links {
        flex-direction: column;
    }

    .community-link {
        width: 100%;
    }


    /* PAYMENT */

    .payment-section {
        padding-bottom: 75px;
    }

    .payment-box {
        grid-template-columns: 1fr;

        gap: 30px;

        padding: 28px 20px;

        text-align: center;
    }

    .payment-warning {
        text-align: left;
    }

    .qr-wrapper img {
        width: 210px;
        height: 210px;
    }


    /* FAQ */

    .faq-section {
        padding-bottom: 75px;
    }

    .faq-list summary {
        padding:
            18px 35px 18px 0;

        font-size: 12px;
    }

    .faq-list details p {
        padding:
            0 25px 18px 0;

        font-size: 11px;
    }


    /* SUPPORT */

    .support-section {
        padding-bottom: 75px;
    }

    .support-box {
        flex-direction: column;

        align-items: flex-start;

        padding: 24px 20px;
    }

    .support-actions {
        width: 100%;
    }

    .support-actions .btn {
        width: auto;
        flex: 1;
    }


    /* FOOTER */

    .site-footer {
        padding-top: 55px;
    }

    .footer-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 35px 20px;
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .footer-bottom {
        flex-direction: column;

        align-items: flex-start;
    }


    /* FLOATING BUTTON */

    .floating-whatsapp {
        right: 15px;
        bottom: 15px;

        width: 53px;
        height: 53px;
    }

    .back-to-top {
        right: 15px;
        bottom: 78px;
    }

    .whatsapp-tooltip {
        display: none;
    }

}


/* =========================================================
   SMALL PHONES
   ========================================================= */

@media (max-width: 390px) {

    .container {
        width: min(
            calc(100% - 22px),
            var(--container)
        );
    }

    .games-grid {
        gap: 8px;
    }

    .game-info {
        padding: 11px;
    }

    .game-info h3 {
        font-size: 11px;
    }

    .mini-grid {
        gap: 7px;
    }

    .hero-content h1 {
        font-size: 38px;
    }

}
