(function() {

    function handleImageClick(imageSrc) {
        const overlayImage = document.getElementById("overlayImage");
        overlayImage.src = imageSrc;

        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
    }

    window.onload = function() {
        const images = document.querySelectorAll('.imgs img'); 
        const overlay = document.getElementById("overlay");
        const closeBtn = document.getElementById("closeBtn");

        images.forEach(img => {
            img.addEventListener('click', function() {
                handleImageClick(img.src);
            });
        });

        closeBtn.addEventListener("click", function() {
            overlay.style.display = "none";
        });
    };

})();
