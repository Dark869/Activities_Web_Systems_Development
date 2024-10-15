(function(){
    let TopPX = 0;
    let LeftPX = 0;

    function moveImage(direction, position){
        let image = document.getElementById('f1');

        if (direction === 'top'){
            if (position === -1){
                if (TopPX !== 0){
                    TopPX -= 10;
                    image.style.top = TopPX + "px";
                    image.style.transform = "rotate(180deg)";
                }
            }

            if (position === 1){
                TopPX += 10;
                image.style.top = TopPX + "px";
                image.style.transform = "rotate(0deg)";
            }
        }

        if (direction === 'left'){
            if (position === -1){
                if (LeftPX !== 0){
                    LeftPX -= 10;
                    image.style.left = LeftPX + "px";
                    image.style.transform = "rotate(90deg)";
                }
            }

            if (position === 1){
                LeftPX += 10;
                image.style.left = LeftPX + "px";
                image.style.transform = "rotate(270deg)";
            }
        }
    }

    function handleKeysArrow(){
        switch(event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                moveImage('top', -1);
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                moveImage('top', 1);
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                moveImage('left', -1);
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                moveImage('left', 1);
                break;
        }
    }

    window.onload = function(){
        document.addEventListener('keydown', handleKeysArrow);
    };

})();