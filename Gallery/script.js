const GALLERY = document.getElementById("gallery");

function LoadGalleryImages() {
    for (let index = 1; index < 16; index++) {
        GALLERY.innerHTML += `<img src="../Assets/Gallery Images/Photo_${i}.jpeg" alt="Gallery Image">`;
    }
}