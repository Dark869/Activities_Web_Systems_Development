(function(){

    function changeBgColor(){
        let colorR = Math.floor(Math.random() * 255);
        let colorG = Math.floor(Math.random() * 255);
        let colorB = Math.floor(Math.random() * 255);

        document.body.style.backgroundColor =
            `rgb(${colorR}, ${colorG}, ${colorB})`;

        console.log(`rgb(${colorR}, ${colorG}, ${colorB})`);
    }

    window.onload = function(){
    
        setInterval(changeBgColor, 1000);
        
    }
    
})();