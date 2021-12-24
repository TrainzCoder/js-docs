sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", navHighlight)

const navHighlight = () => {
    let scrollY = window.pageYOffset
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offSetTop - 50
        const sectionId = section.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-link a[href=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-link a[href=" + sectionId + "]").classList.remove("active");
        }
    });
}