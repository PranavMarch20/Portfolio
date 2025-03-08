// hero-time 
function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let amPm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zero to minutes if needed
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let timeString = `${hours}:${minutes} ${amPm}`;

    document.getElementById("hero-time").textContent = timeString;
}

// Update time initially and then every second
updateTime();
setInterval(updateTime, 1000);



// sidebar-date
function updateDate() {
    let now = new Date();
    let options = { month: "short", day: "numeric", year: "numeric" };
    let formattedDate = now.toLocaleDateString("en-US", options);

    document.getElementById("sidebar-date").textContent = formattedDate;
}

// Call function to set the date on page load
updateDate();


