const sidepanel = document.getElementById("sidepanel");
const openbutton = document.getElementById("openbutton");
const closebutton = document.getElementById("closebutton");

openbutton.addEventListener("click",() => {
    sidepanel.style.width = "250px";
});

closebutton.addEventListener("click",() => {
    sidepanel.style.width = "0";
});


/*const mobileNav = document.getElementById("mobileNav");
const openmobileNav = document.getElementById("openMobileNav");
const closemobileNav = document.getElementById("closeMobileNav"); //this may need to be a lowerxase m

openmobileNav.addEventListener("click", () => {
    mobileNav.style.width = "250px";
});

closemobileNav.addEventListener("click", () => {
    mobileNav.style.width = "0";
});
*/