const argv = require('yargs')
    .options('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        description:'Base para la tabla de multiplicar'
    })
    .options('l',{
        alias:'listar',
        type:'boolean',       
        default:false,
        description:'Muestra la tabla por consola'
    })
    .options('h',{
        alias:'hasta',
        type:'number',  
        default:10,     
        description:'Multiplicar hasta'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un nuemero';
        }
        return true;
    })
    .argv;


  module.exports = argv;