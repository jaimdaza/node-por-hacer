const argv = require('./config/yargs').argv;
const { crear, listarTareas, actualizar, borrar } = require('./por-hacer/por-hacer');
var colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = listarTareas(argv.completado);
        for (let tarea of listado) {
            console.log('=========POR HACER========='.green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado ? 'Se actualizo correctamente' : 'Error al actualizar');
        break;
    case 'borrar':
        let borrardo = borrar(argv.descripcion);
        console.log(borrardo ? 'Se Borro correctamente' : 'Error al actualizar');
        break;
    default:
        console.log('Comando no reconocido');
}