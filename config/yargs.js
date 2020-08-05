const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar.', opts)
    .command('create', 'Crea un archivo con la multiplicación de la base y el factorial del límite.', opts)
    .help()
    .argv;

module.exports = {
    argv
}