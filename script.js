// Get references to DOM elements
const addItemButton = document.getElementById('add-item-btn');
const removeItemButton = document.getElementById('remove-item-btn');
const itemList = document.getElementById('item-list');

// Function to add a new list item
function addListItem() {
    const listItem = document.createElement('li');
    listItem.textContent = 'New List Item ' + (itemList.children.length + 1);
    itemList.appendChild(listItem);

    // Optionally, apply a dynamic style change to the new item
    listItem.style.color = '#333';
    listItem.style.fontWeight = 'bold';
}

// Function to remove the last list item
function removeListItem() {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    } else {
        alert('No items to remove!');
    }
}

// Event listeners for buttons
addItemButton.addEventListener('click', addListItem);
removeItemButton.addEventListener('click', removeListItem);
