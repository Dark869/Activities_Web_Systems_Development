(function () {
    let array = [1, 2, 4, 8, 16];
    let valor = 10;

    function myMap(array, fn) {
        let newArray = [];
         if(array.length === 0) {
            return [];
        }
        return loopArrayRecursive(array, 0, newArray, fn);
    }

    function loopArrayRecursive(array, index, newArray, fn) {
        newArray.push(fn(array[index]));
        if (index === array.length - 1) {
            return newArray;
        } else {
            return loopArrayRecursive(array, index + 1, newArray, fn);
        }
    }

    function sumar(num) {
        return num + valor;
    }

    function restar(num) {
        return num - valor;
    }

    function multiplicar(num) {
        return num * valor;
    }

    function dividir(num) {
        return num / valor;
    }

    function cambiarMinusculas(texto) {
        return texto.toLowerCase();
    }

    function cambiarMayusculas(texto) {
        return texto.toUpperCase();
    }

    window.onload = function () {
        document.getElementById('original').innerHTML = array;
        document.getElementById('map').innerHTML =
        myMap(array, restar);
    };
})();
