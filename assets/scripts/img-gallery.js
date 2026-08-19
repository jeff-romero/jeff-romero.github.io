let imageIndex = 0;
selectImage(imageIndex);

function crementSlide(k) {
    selectImage(imageIndex += k);
}

function selectImage(k) {
    imageIndex = k;

    let images = document.getElementsByClassName("selected-img");
    let gallery = document.getElementsByClassName("inactive");
    let displayProgress = document.getElementById("display-progress");

    if (imageIndex == images.length) {
        imageIndex = 0;
    }
    else if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (let i = 0; i < gallery.length; i++) {
        gallery[i].className = gallery[i].className.replace(" active", "");
    }

    images[imageIndex].style.display = "block";
    gallery[imageIndex].className += " active";
    displayProgress.innerText = `${imageIndex + 1} / ${images.length}`;
}
