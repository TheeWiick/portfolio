/* =========================================================
   JaviDev — Portfolio
   Interacciones: header, menú móvil, scroll-spy y animaciones
   ========================================================= */

(() => {
    "use strict";

    // Marca que JS está activo: habilita las animaciones (fallback sin JS)
    document.documentElement.classList.add("js");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Header con fondo al hacer scroll ---------- */
    const header = document.querySelector(".site-header");

    const onScroll = () => {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---------- Menú móvil ---------- */
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggle");

    const closeMenu = () => {
        if (!nav || !navToggle) return;
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menú de navegación");
        document.body.classList.remove("menu-open");
    };

    const openMenu = () => {
        if (!nav || !navToggle) return;
        nav.classList.add("is-open");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "Cerrar menú de navegación");
        document.body.classList.add("menu-open");
    };

    if (nav && navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = nav.classList.contains("is-open");
            isOpen ? closeMenu() : openMenu();
        });

        // Cierra el menú al pulsar un enlace
        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        // Cierra al hacer clic fuera del menú
        document.addEventListener("click", (event) => {
            if (!nav.classList.contains("is-open")) return;
            if (nav.contains(event.target) || navToggle.contains(event.target)) return;
            closeMenu();
        });

        // Cierra con Escape
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && nav.classList.contains("is-open")) {
                closeMenu();
                navToggle.focus();
            }
        });

        // Al volver a escritorio, restaura el estado
        window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
            if (event.matches) closeMenu();
        });
    }

    /* ---------- Scroll-spy: enlace activo según la sección ---------- */
    const navLinks = [...document.querySelectorAll(".nav__link")];
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "true");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    if (sections.length && "IntersectionObserver" in window) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveLink(entry.target.id);
                });
            },
            { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
        );

        sections.forEach((section) => spy.observe(section));
    }

    /* ---------- Animaciones de aparición ---------- */
    const revealItems = [...document.querySelectorAll("[data-reveal]")];

    // Retardo escalonado entre elementos hermanos
    revealItems.forEach((item) => {
        const siblings = [...item.parentElement.children].filter((child) =>
            child.hasAttribute("data-reveal")
        );
        const index = siblings.indexOf(item);
        if (index > 0) {
            item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
        }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        revealItems.forEach((item) => revealObserver.observe(item));
    }

    /* ---------- Contadores animados del hero ---------- */
    const counters = [...document.querySelectorAll("[data-count]")];

    const runCounter = (el, delay = 0) => {
        const target = Number(el.dataset.count) || 0;
        const suffix = el.dataset.suffix || "";
        // Con "reducir movimiento" el conteo sigue, pero más corto y sin escalonar
        const duration = reduceMotion ? 600 : 1000;

        const tick = (startTime) => {
            const progress = Math.min((performance.now() - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.floor(target * eased) + suffix;

            if (progress < 1) {
                requestAnimationFrame(() => tick(startTime));
            } else {
                el.textContent = target + suffix;
            }
        };

        el.textContent = 0 + suffix;
        setTimeout(() => requestAnimationFrame(tick), delay);
    };

    if (counters.length && "IntersectionObserver" in window) {
        // Estado inicial en 0 (solo si se va a animar)
        counters.forEach((el) => {
            el.textContent = 0 + (el.dataset.suffix || "");
        });

        const counterObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const index = counters.indexOf(entry.target);
                    runCounter(entry.target, reduceMotion ? 0 : Math.max(index, 0) * 80);
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.6 }
        );

        counters.forEach((el) => counterObserver.observe(el));
    }

    /* ---------- Año del footer ---------- */
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
