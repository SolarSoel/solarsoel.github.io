let options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
};
document.getElementById ("date").textContent = new Date().toLocaleDateString("en-US", options);