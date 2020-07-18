const descripcion = {
    demand: 'true',
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: 'true',
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion: descripcion,
        completado
    }).command('borrar', 'Borra una tarea por hacer', {
        descripcion
    }).command('listar', 'Borra una tarea por hacer', {
        completado: {
            default: null,
            alias: 'c',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}