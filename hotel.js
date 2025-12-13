const sidepanel = document.getElementById("sidepanel");
const openbutton = document.getElementById("openbutton");
const closebutton = document.getElementById("closebutton");

openbutton.addEventListener("click",() => {
    sidepanel.style.width = "250px";
});

closebutton.addEventListener("click",() => {
    sidepanel.style.width = "0";
});

fetch("http://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=6cff9a6c350512ca8853afea99d73f33&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data);
    temperature.textContent = "Current temperature: "+data.main.temp+" \u00b0C";
    description.textContent = "Current weather: "+data.weather[0].description; //0 gives current weather, 1 is tomorrow, think of it like an array
    high.textContent = "High today is " +data.main.temp_max+" \u00b0C"; //its like file folders and pathing to target the right thing
    low.textContent = "Low today is " +data.main.temp_min+" \u00b0C";
    feelslike.textContent = "It currently feels like " +data.main.feels_like+" \u00b0C";

//get the icon for the weather 04d is within the API it directly correlates to the icon needed
let iconCode = data.weather[0].icon;
let iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; //this is a fancier way to concatenate (+ adding two thing together)
console.log(iconURL);
icon.src = iconURL //this is filling the src attribute in the html using js
icon.alt = data.weather[0].description+" icon";
})

.catch(error => {
        console.error("Error fetching data:", error);
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