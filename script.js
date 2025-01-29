function showPopup(info) {
    document.getElementById('dialogText').textContent = info;
    document.getElementById('infoDialog').showModal();
}

function closePopup() {
    document.getElementById('infoDialog').close();
}