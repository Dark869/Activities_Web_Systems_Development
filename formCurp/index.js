(function() {

    function isEmpty(camp) {
        return camp.value.trim() === "";
    }

    function genListErrors(errors) {
        let res = '';
        for (let element of errors) {
            res += `<li>${element}</li>`;
        }
        return res;
    }

    function isCorrectFormatCurp(curp) {
        const curpRegex = /^([A-Z]{4})(\d{2})(\d{2})(\d{2})([HM]{1})(AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TL|TS|VZ|YN|ZS|NE)([B-DF-HJ-NP-TV-Z]{3})([A-Z\d]{1})(\d{1})$/;
        return curpRegex.test(curp);
    }

    function isElderlyAgo(curp) {
        const year = parseInt(curp.substring(4, 6), 10);
        const month = parseInt(curp.substring(6, 8), 10);
        const day = parseInt(curp.substring(8, 10), 10);

        const yearComplete = year < 50 ? 2000 + year : 1900 + year;
        const dateBirth = new Date(yearComplete, month - 1, day);

        const dateNow = new Date();

        let age = dateNow.getFullYear() - dateBirth.getFullYear();
        const monthNow = dateNow.getMonth();
        const dayNow = dateNow.getDate();

        if (monthNow < month || (monthNow === month && dayNow < day)) {
            age--;
        }

        const isElderly = age >= 18;

        return isElderly;
    }

    window.onload = function() {
        let form = document.getElementById('form');
        form.onsubmit = function(event) {
            let errors = new Array();
            let withErrors = false;

            const user = document.getElementById('nombre');
            const curp = document.getElementById('curp').value.trim().toUpperCase();

            if (isEmpty(user)) {
                errors.push('Error: Campo nombre vacío');
                withErrors = true;
            }

            if (isEmpty(document.getElementById('curp'))) {
                errors.push('Error: Campo CURP vacío');
                withErrors = true;
            } else {
                if (!isCorrectFormatCurp(curp)) {
                    errors.push('Error: Formato de CURP incorrecto');
                    withErrors = true;
                }
            }

            if (!isElderlyAgo(curp)) {
                errors.push('Error: Tienes que ser mayor de edad.');
                withErrors = true;
            }

            if (withErrors) {
                event.preventDefault();
                let divErrors = document.getElementById('errors');
                let listErrors = document.getElementById('listErrors');
                listErrors.innerHTML = genListErrors(errors);
                divErrors.style.display = 'block';
            }
        };
    };

})();
