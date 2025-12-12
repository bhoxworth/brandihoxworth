document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");

  const workToggle = document.getElementById("workToggle");
  const workWrap = document.querySelector(".nav-work");

  if (navToggle && nav) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("is-open");
      navToggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("is-open") ? "true" : "false"
      );
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || navToggle.contains(e.target)) return;
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
    if (workToggle && workWrap) {
    let closeTimer;

    const openWork = () => {
        clearTimeout(closeTimer);
        workWrap.classList.add("is-open");
        workToggle.setAttribute("aria-expanded", "true");
    };

    const closeWork = () => {
        closeTimer = setTimeout(() => {
        workWrap.classList.remove("is-open");
        workToggle.setAttribute("aria-expanded", "false");
        }, 3000); // 👈 longer delay (try 600–800)
    };

    workWrap.addEventListener("mouseenter", openWork);
    workWrap.addEventListener("mouseleave", closeWork);

    // click toggle (mobile)
    workToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearTimeout(closeTimer);
        workWrap.classList.toggle("is-open");
        workToggle.setAttribute(
        "aria-expanded",
         workWrap.classList.contains("is-open") ? "true" : "false"
    );
    });
  }
});
