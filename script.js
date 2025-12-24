// 1. Nav Fade-in on page load
window.addEventListener("load", () => {
    const navLinks = document.querySelectorAll("#nav-bar .nav-bar-links li a");
    navLinks.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(-20px)";
        setTimeout(() => {
            link.style.transition = "all 0.5s ease";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, index * 200); // ไล่ทีละ 0.2 วินาที
    });
});

// 2. Hover Animated Slide Effect
const navLinks = document.querySelectorAll("#nav-bar .nav-bar-links li a");
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transition = "all 0.3s ease";
        link.style.transform = "translateY(-5px) scale(1.05)";
        link.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.2)";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "translateY(0) scale(1)";
        link.style.boxShadow = "none";
    });
});

// 3. Logo Bounce on click
const logo = document.querySelector("#nav-bar .logo");
logo.addEventListener("click", () => {
    logo.style.transition = "all 0.3s ease";
    logo.style.transform = "translateY(-15px)";
    setTimeout(() => {
        logo.style.transform = "translateY(0)";
    }, 300);
});


