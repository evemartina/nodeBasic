
const fs = require('fs');
const color = require('colors')

const crearArchivo = async( base = 5,listar,hasta =10)=>{
        
   

    let salida =''
    let consola ='';

    for (let index = 1; index <= hasta; index++) {
        salida +=`${base} x ${index} = ${base*index}\n` 
        consola +=`${base} ${color.red('x')} ${index} ${color.green('=')} ${color.magenta(base*index)}\n`        
    }

    if(listar){
        console.log('::::::::::::::::::::::::::::::::::')
        console.log('Tabla de ',color.cyan(base))
        console.log('::::::::::::::::::::::::::::::::::')
        console.log(consola)
    }

    fs.writeFileSync(`./salida/ tablas-${base}.txt`,salida);
    return color.rainbow(`tablas-${base}.txt creada`)        
       
}
module.exports ={
    crearArchivo
}