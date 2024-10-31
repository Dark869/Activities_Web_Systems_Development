$(function() {
    const songs = {
        'op1': {
            src: 'public/audios/muriendome_Duki.mpeg',
            title: 'Muriendome - Duki'
        },
        'op2': {
            src: 'public/audios/givenchy_Duki.mpeg',
            title: 'Givenchy - Duki'
        },
        'op3': {
            src: 'public/audios/ticket_Duki.mpeg',
            title: 'Ticket - Duki'
        },
        'op4': {
            src: 'public/audios/luna_Duki.mpeg',
            title: 'Luna - Duki'
        },
        'op5': {
            src: 'public/audios/y_nada_mas_YSY_Duki.mpeg',
            title: 'Y no da mas - YSY & Duki'
        }
    };

    function changeSong(option){
        const optionSong = option.target.id;

        if(songs[optionSong]) {
            $('#audioActual').html(songs[optionSong].title);
            $('#player').attr('src', songs[optionSong].src);

            $('#player')[0].load();
            $('#player')[0].play();
        }
    }

    $('.options').click(changeSong);
});