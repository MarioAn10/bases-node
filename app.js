const colors = require('colors');
const argv = require('./config/yargs').argv;
const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Archivo creado: ${file}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido'.red);
}