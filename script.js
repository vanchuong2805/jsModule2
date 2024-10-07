function showImage(img) {
    const showIMG = document.getElementById("showIMG")
    const text = document.getElementById("text")
    showIMG.style.backgroundImage = `url(${img.src})`;
    showIMG.style.backgroundSize = 'cover'
    text.textContent = img.alt
    text.style.color = img.getAttribute('data-color');
}

function resetShowIMG() {
    const showIMG = document.getElementById("showIMG");
    const text = document.getElementById("text");
    showIMG.style.backgroundImage = 'none';
    showIMG.style.backgroundColor = 'antiquewhite';
    text.textContent = 'Image will display here!';
    text.style.color = 'green';
}

document.body.addEventListener('click', function (event) {
    const showIMG = document.getElementById("showIMG");
    if (!showIMG.contains(event.target) && !event.target.closest('#collection img')) {
        resetShowIMG()
    }
    if (event.target.matches('#collection img')) {
        showImage(event.target)
    }
})