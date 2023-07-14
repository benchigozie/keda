export function navFunction () {
    const hamburger = document.querySelector(".hamburger");
    const expandHam = document.querySelector(".expand-ham");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        expandHam.classList.toggle("active");
        console.log("fffff");
    });
};  