$(document).ready(function () {
    $("#jqxRating").jqxRating({ width: 350, height: 35, theme: 'classic'});
    $("#jqxRating").on('change', function (event) {
        $("#rate").find('span').remove();
        $("#rate").append('<span>' + event.value + '</span');
    });
});