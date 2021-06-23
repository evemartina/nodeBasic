
const { crearArchivo} = require('./helpers/multiplicar')
console.clear()
// const base = 3;
console.log(process.argv)

const[,,arg3 ='base=5'] = process.argv;
const [,base] = arg3.split('=');

console.log(arg3 )
crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(error=>console.log(error));