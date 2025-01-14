
const carImages = document.querySelectorAll('.car-image');


const mainCarImage = document.getElementById('carImage');


carImages.forEach(carImage => {
    carImage.addEventListener('mouseover', function() {
        const newCarSrc = `img/${carImage.getAttribute('data-car')}`;
        mainCarImage.src = newCarSrc;
    });
});
