const descripción = {
    demand: true,
    alias: 'd',
    desc: 'Descripción por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripción
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripción,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripción
    })
    .help()
    .argv;

module.exports = {
    argv
}