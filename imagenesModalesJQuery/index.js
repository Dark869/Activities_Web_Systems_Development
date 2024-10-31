$(function() {
    function handleImageClick(imageSrc) {
        $('#overlayImage').attr('src', imageSrc);

        $('#overlay').css('display', 'flex');
    }

    $('.imagenes').on('click', function(){
        handleImageClick($(this).attr('src'));
    });
    
    $('#closeBtn').on('click', function(){
        $('#overlay').css('display', 'none');
    })
});
