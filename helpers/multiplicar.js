
const fs = require('fs');

// const crearArchivo = ( base = 5)=>{
//     return new Promise((resolve, reject) => {
//         console.log('::::::::::::::::::::::::::::::::::')
//         console.log('Tabla de ',base)
//         console.log('::::::::::::::::::::::::::::::::::')

//         let salida ='';
//         for (let index = 1; index <=10; index++) {
//             salida +=`${base} x ${index} = ${base*index}\n`
            
//         }
//         console.log(salida)
//         fs.writeFileSync(`tablas-${base}.txt`,salida);
//         resolve(`tablas-${base}.txt creada`)
        
//     });
// }

const crearArchivo = async( base = 5)=>{
        
    console.log('::::::::::::::::::::::::::::::::::')
    console.log('Tabla de ',base)
    console.log('::::::::::::::::::::::::::::::::::')

    let salida ='';
    for (let index = 1; index <=10; index++) {
        salida +=`${base} x ${index} = ${base*index}\n`
        
    }
    console.log(salida)
    fs.writeFileSync(`tablas-${base}.txt`,salida);
    return`tablas-${base}.txt creada`
            
       
}
module.exports ={
    crearArchivo
}