$(function (){
    function startBarProgress(){
        let contador = 0;
        const interval = setInterval(() => {
            contador++;
            $('.progress-bar').css('width', contador + '%');
            $('#progressConter').text(contador + '%');
            if(contador === 100){
                clearInterval(interval);
                $('#complete').show();
            } 
        }, 1000);
    }

    $('#start').click(startBarProgress);
})