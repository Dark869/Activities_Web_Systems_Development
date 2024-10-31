(function(){
    function changeSong(event){
        const player = document.getElementById('player');
        const textCurrent = document.getElementById('audioActual');

        if(event.target.tagName === 'LI'){
            const song = event.target.id;

            switch(song){
                case 'op1':
                    player.src = 'public/audios/muriendome_Duki.mpeg';
                    textCurrent.innerHTML = 'Muriendome - Duki';
                    break;
                case 'op2':
                    player.src = 'public/audios/givenchy_Duki.mpeg';
                    textCurrent.innerHTML = 'Givenchy - Duki';
                    break;
                case 'op3':
                    player.src = 'public/audios/ticket_Duki.mpeg';
                    textCurrent.innerHTML = 'Ticket - Duki';
                    break;
                case 'op4':
                    player.src = 'public/audios/luna_Duki.mpeg';
                    textCurrent.innerHTML = 'Luna - Duki';
                    break;
                case 'op5':
                    player.src = 'public/audios/y_nada_mas_YSY_Duki.mpeg';
                    textCurrent.innerHTML = 'Y no da mas - YSY & Duki';
                    break;
            }

            player.load();
            player.play();
        }
    }

    window.onload = function(){
        const optionsList = document.getElementById('ulMenu');
        
        optionsList.addEventListener('click', changeSong);
    };
})();
