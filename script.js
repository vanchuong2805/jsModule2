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

const images = document.querySelectorAll('#collection img');

images.forEach(img => {
    img.addEventListener('mouseenter', function () {
        showImage(this)
    })

    img.addEventListener('mouseleave', function () {
        resetShowIMG()
    })

    img.addEventListener('focus', function () {
        showImage(this)
    })

    img.addEventListener('blur', function () {
        resetShowIMG()
    })
});