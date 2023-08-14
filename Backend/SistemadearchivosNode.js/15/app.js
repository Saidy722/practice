
//Crea un programa que lea un archivo de texto con información de una lista de usuarios (nombre, email, contraseña), verifique si la contraseña es segura (tiene al menos 8 caracteres, al menos una letra mayúscula, al menos una letra minúscula y al menos un número) y escriba en otro archivo solo los usuarios que tienen contraseñas seguras.

const fs = require('fs');

// Verificar si la contraseña cumple con los criterios de seguridad
function verificarContraseña(contraseña) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return regex.test(contraseña);
}

fs.readFile('info.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const usuarios = JSON.parse(data);
    const usuariosSeguros = [];

    usuarios.forEach((usuario) => {
        const { Usuario, 'Correo Electrónico': correo, Contraseña: contraseña } = usuario;

        if (verificarContraseña(contraseña)) {
            usuariosSeguros.push(usuario);
        }
    });

    const usuariosSegurosTexto = JSON.stringify(usuariosSeguros, null, 2);

    fs.writeFile('aprobed.json', usuariosSegurosTexto, (err) => {
        if (err) {
            console.error('Error al escribir el archivo de usuarios seguros:', err);
            return;
        }

        console.log('Usuarios seguros escritos en aprobed.json');
    });
});











