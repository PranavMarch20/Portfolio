// sidebar-date
function updateDate() {
    let now = new Date();
    let options = { month: "short", day: "numeric", year: "numeric" };
    let formattedDate = now.toLocaleDateString("en-US", options);

    document.getElementById("sidebar-date").textContent = formattedDate;
}

// Call function to set the date on page load
updateDate();
