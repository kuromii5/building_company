let currentImageIndex = 0;
const PCimages = ['../../public/img/house2Crop.png', '../../public/img/house1Crop.png'];
const Mimages = ['../../public/img/house3Crop.png', '../../public/img/house1.png'];

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % PCimages.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + PCimages.length) % PCimages.length;
    updateImage();
}

function updateImage() {
    const currentImageBig = document.getElementById('currentImageBigPC');
    const currentImageSmall = document.getElementById('currentImageSmallPC');
    const currentImageBigM = document.getElementById('currentImageBigM');
    const currentImageSmallM = document.getElementById('currentImageSmallM');

    currentImageBig.src = PCimages[currentImageIndex];
    currentImageSmall.src = PCimages[currentImageIndex];
    currentImageBigM.src = Mimages[currentImageIndex];
    currentImageSmallM.src = Mimages[currentImageIndex];
}