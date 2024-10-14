(function(){
    let numberInputLabel = 0;

    function addInputText(){
        const container = document.getElementById('container');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const br = document.createElement('br');
        numberInputLabel++;

        label.textContent = 'Campo ' + numberInputLabel;
        label.id = 'label_' + numberInputLabel;
        label.htmlFor = 'input_' + numberInputLabel;

        input.type = 'text';
        input.id = 'input_' + numberInputLabel;
        input.name = 'input_' + numberInputLabel;

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(br);
    }

    function removeInputText(){
        const container = document.getElementById('container');

        if(container.lastChild){
            container.removeChild(container.lastChild);
            container.removeChild(container.lastChild);
            container.removeChild(container.lastChild);
            numberInputLabel--;
        }
    }

    window.onload = function(){
        const add = document.getElementById('add');
        const remove = document.getElementById('remove');

        add.addEventListener('click', addInputText);
        remove.addEventListener('click', removeInputText);
    }
})();