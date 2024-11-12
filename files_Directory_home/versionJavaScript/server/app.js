import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Configura el directorio público para los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para obtener archivos del directorio home del usuario
app.get('/list/:username', (req, res) => {
    const { username } = req.params;
    const userHome = path.join('/home', username);

    // Verifica si el directorio existe
    if (fs.existsSync(userHome)) {
        // Lee el contenido del directorio
        fs.readdir(userHome, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Error leyendo el directorio' });
            }
            res.json({ files });
        });
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});