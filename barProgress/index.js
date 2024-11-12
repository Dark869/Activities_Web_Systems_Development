$(function (){
    function startBarProgress(){
        let contador = 0;
        const interval = setInterval(() => {
            contador++;
            $('.progress-bar').css('width', contador + '%');
            $('.progress-bar').text(contador + '%');
            if(contador === 100){
                clearInterval(interval);
                $('#complete').show();
            } 
        }, 100);
    }

    $('#start').click(startBarProgress);
})