const sections = document.querySelectorAll("span")
const navLi = document.querySelectorAll(".nav_link")
console.log(sections)


window.onscroll = () => {
    var current = "";
    
    sections.forEach((section) => {
        const y = window.scrollY;
        const sectionTop = section.offsetTop;

        if (y >= sectionTop - 137 ) {
        current = section.getAttribute("id");
        }
    });
    
    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
        a.classList.add("active");
        }
    });
};