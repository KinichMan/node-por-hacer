const fs = require('fs');

let lsitadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(lsitadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        lsitadoPorHacer = require('../db/data.json');

    } catch (error) {
        lsitadoPorHacer = [];
    }


}

const crear = (descripción) => {
    cargarDB();
    let porHAcer = {
        descripción,
        completado: false
    };
    lsitadoPorHacer.push(porHAcer);
    guardarDB();
    return (porHAcer);
}

const getListado = () => {
    cargarDB();
    return lsitadoPorHacer;
}

const actualizar = (descripción, completado = true) => {
    cargarDB();

    let index = lsitadoPorHacer.findIndex(tarea => {
        return tarea.descripción === descripción;
    })
    if (index >= 0) {
        lsitadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borar = (descripción) => {
    cargarDB();
    let nuevoListado = lsitadoPorHacer.filter(tarea => {
        return tarea.descripción != descripción;
    });
    if (lsitadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        lsitadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borar
}