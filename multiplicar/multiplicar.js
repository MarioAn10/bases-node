const fs = require('fs');
const colors = require('colors');


const createFile = async (base, limit) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base ingresada no es un número.');
            return;
        } else if (!Number(limit)) {
            reject('El límite ingresado no es un número.');
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-limite-${limit}.txt`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-limite-${limit}.txt`.green);
            }
        });
    });

}

const listTable = async (base, limit) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base ingresada no es un número.');
            return;
        } else if (!Number(limit)) {
            reject('El límite ingresado no es un número.');
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });

}

module.exports = {
    createFile,
    listTable
}