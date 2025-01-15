
const carImages = document.querySelectorAll('.car-image');
const mainCarImage = document.getElementById('carImage');

carImages.forEach(carImage => {
    carImage.addEventListener('mouseover', function() {
        const newCarSrc = `img/${carImage.getAttribute('data-car')}`;
        mainCarImage.src = newCarSrc;
    });
});

$(document).ready(function(){
    $(".btn-show-image").hover(
        function() {
            $(this).css("background-color", "yellow");
        }, 
        function() {
            $(this).css("background-color", "#4CAF50");
        }
    );
});
