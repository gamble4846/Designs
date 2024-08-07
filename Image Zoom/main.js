var ImageZoomElements = document.getElementsByClassName("ImageZoom");

for (var i = 0; i < ImageZoomElements.length; i++) {
    const imageZoomEle = ImageZoomElements[i];
    imageZoomEle.addEventListener('click', () => {
        imageZoomEle.classList.toggle('Open');
    }, false);
}