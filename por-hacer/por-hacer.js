const fs = require('fs');





let listadoPorhacer = [];


const cargarDB = () => {
    try {
        listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: 'false'
    }
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(err);
        else
            console.log(`Datos guardados correctamente`);
    });
}

const listarTareas = (completado) => {
    cargarDB();
    if (completado === null)
        return listadoPorhacer;
    return listadoPorhacer.filter(tarea => tarea.completado === completado);
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    listarTareas,
    actualizar,
    borrar
}