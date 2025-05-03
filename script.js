// Select elements
const toggleHealthBtn = document.getElementById("toggleHealthBtn");
const addTipBtn = document.getElementById("addTipBtn");
const statusText = document.getElementById("status-text");
const healthTips = document.getElementById("health-tips");

// Function to toggle health status text
toggleHealthBtn.addEventListener("click", function() {
    const currentText = statusText.textContent;
    if (currentText === "Your health data will appear here.") {
        statusText.textContent = "Keep up the great work with your health!";
        statusText.style.color = "green";
    } else {
        statusText.textContent = "Your health data will appear here.";
        statusText.style.color = "black";
    }
});

// Function to add a new health tip to the list
addTipBtn.addEventListener("click", function() {
    const newTip = prompt("Enter a new health tip:");
    if (newTip) {
        const newListItem = document.createElement("li");
        newListItem.textContent = newTip;
        healthTips.appendChild(newListItem);
    }
});
