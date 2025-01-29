function showPopup(info) {
    document.getElementById('janelaTexto').textContent = info;
    document.getElementById('janela').showModal();
}

function closePopup() {
    document.getElementById('janela').close();
}