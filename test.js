const URL = 'https://xl666.pythonanywhere.com/registro';

function mandarPost(nombre, matricula, carrera, semestre, url = URL) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            matricula: matricula,
            carrera: carrera,
            semestre: semestre
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Algo salió mal');
        }
    })
    .then((text) => console.log(text))
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

html = mandarPost('Victor Emmanuel López Espejo Js', "S21015931", "Redes", "7");
console.log(html);
