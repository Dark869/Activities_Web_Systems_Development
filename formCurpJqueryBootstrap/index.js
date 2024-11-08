$(function() {
    let withErrors = false;

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

    function isEmpty(camp) {
        return camp.val().trim() === ""; 
    }

    $('#form').on('submit', function(event) {
        withErrors = false;

        if (isEmpty($('#name'))) {
            withErrors = true;
            $('#invalidoName').text("Por favor, ingrese su nombre.");
            $('#invalidoName').show();
            $('#name').addClass('is-invalid');
        } else {
            $('#name').removeClass('is-invalid').addClass('is-valid');
            $('#invalidoName').hide();
        }

        if (isEmpty($('#password'))) {
            withErrors = true;
            $('#password').next('.invalid-feedback').show();
            $('#password').addClass('is-invalid');
        } else {
            $('#password').removeClass('is-invalid').addClass('is-valid');
            $('#password').next('.invalid-feedback').hide();
        }

        if (isEmpty($('#curp'))) {
            withErrors = true;
            $('#curp').next('.invalid-feedback').show();
            $('#curp').addClass('is-invalid');
        } else if ($('#curp').val().trim().length !== 18) {
            withErrors = true;
            $('#curp').next('.invalid-feedback').text('El CURP debe tener 18 caracteres.');
            $('#curp').addClass('is-invalid');
        } else if (!isCorrectFormatCurp($('#curp').val().trim().toUpperCase())) {
            withErrors = true;
            $('#curp').next('.invalid-feedback').text('Formato de CURP incorrecto.');
            $('#curp').addClass('is-invalid');
        } else if (!isElderlyAgo($('#curp').val().trim().toUpperCase())) {
            withErrors = true;
            $('#curp').next('.invalid-feedback').text('Tienes que ser mayor de edad.');
            $('#curp').addClass('is-invalid');
        } else {
            $('#curp').removeClass('is-invalid').addClass('is-valid');
            $('#curp').next('.invalid-feedback').hide();
        }

        if ($('#jqxRating').jqxRating('value') === 0) {
            withErrors = true;
            $('#jqxRating').next('.invalid-feedback').show();
            $('#jqxRating').addClass('is-invalid');
        } else if ($('#jqxRating').jqxRating('value') <= '3') {
            withErrors = true;
            $('#jqxRating').next('.invalid-feedback').text('La calificación debe ser mayor a 3.');
            $('#jqxRating').addClass('is-invalid');
        } else {
            $('#jqxRating').removeClass('is-invalid').addClass('is-valid');
            $('#jqxRating').next('.invalid-feedback').hide();
        }
        

        if (withErrors) {
            $('#form').addClass('needs-validation');
            event.preventDefault();
        }
    });
});