const { clear } = require("console");
const fs = require("fs");
//const archivo= require("./Data1.txt");




function productos(id, nombre, precio, fotoUrl) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.fotoUrl = fotoUrl

}

let producto1 = new productos(0, "leche", 100, 'https://ardiaprod.vtexassets.com/arquivos/ids/225464/Leche-Entera-La-Serenisima-3--Larga-vida-1-Lt-_1.jpg?v=637898903081930000')
let producto2 = new productos(1, "pollo", 150, "https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg")
let producto3 = new productos(2, "pasta", 50, 'https://leitesculinaria.com/wp-content/uploads/fly-images/354280/homemade-pasta-dough-1200x1200-c.jpg')




let arryProductos = [];
arryProductos.push(producto1, producto2, producto3)

//console.log(arryProductos)


function deleteAll() {
    async function borrartodo() {
        try {
            await fs.promises.writeFile('./Data1.txt', "no busques que no hay nada papu", null, '\t')
            console.log('guardado')
        } catch (err) {
            console.log('error al guardar')
        }

    }
    borrartodo()
}


function deleteId(id) {

    let idDearray = arryProductos.findIndex(producto => producto.id === id);

    if (idDearray == producto1.id) {
        let nuevoIdBuscado = arryProductos.filter((item) => item !== producto1)
        console.log(nuevoIdBuscado)

    } else if (idDearray == producto2.id) {
        let nuevoIdBuscado = arryProductos.filter((item) => item !== producto2)
        console.log(nuevoIdBuscado)

    } else if (idDearray == producto3.id) {
        let nuevoIdBuscado = arryProductos.filter((item) => item !== producto3)
        console.log(nuevoIdBuscado)

    } else if (idDearray != id) {
        console.log("no se pudo borrar")
    }

    async function getAll2() {
        try {
            await fs.promises.appendFile('./Data1.txt', JSON.stringify(nuevoIdBuscado, null, '\t'))
            console.log('guardado')
            
        } catch (err) {
            console.log('error al guardar')
        }

    }

}



function contenedor() {



    function save1() {
        archivo = fs.promises.readFile('./Data1.txt', "utf-8")
            .then(archivo => {
                console.log(archivo)
            })
            .catch(err => {
                console.log("hubo un error", err)
            })
    }



    function getByid(id) {
        let idbuscado = arryProductos.find(producto => producto.id === id);
        let idDearray = arryProductos.findIndex(producto => producto.id === id);
        console.log(idbuscado)

        if (idDearray == id) {

            console.log("este es el id", idDearray)
        } else (console.log("no existe este id"))


        async function getAll() {
            try {
                await fs.promises.appendFile('./Data1.txt', JSON.stringify(arryProductos, null, '\t'))
                console.log('guardado')
                
            } catch (err) {
                console.log('error al guardar')
            }

        }
        //guarda el array completo en archivo txt
        getAll()

    }
    //archi a trabajar
    save1()
    //busca el id seleccionado
    getByid(2)
    //eliminar por id 
    //deleteId(2)
    //eliminar todo
    //deleteAll()
      
}


contenedor()




const express = require(`express`);
const { json } = require("express");


const app=express()

app.listen(8080,()=>{
    console.log("bievenidos al servidor",8080);
});



function objectosEnpantalla(){
fs.readFile('./Data1.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
       console.log("ok")
      
 
    }
    let archivo=data
    console.log(archivo)


     app.get(`/productos/`, (req,res)=>{
    res.send(archivo)



})


  });

};

objectosEnpantalla()


function objectoRandom(){
let archivo3=JSON.stringify(arryProductos)
let archivo4=arryProductos[Math.floor(Math.random() * arryProductos.length)]
let archivo5=JSON.stringify(archivo4)
console.log("holaaa",archivo4)

app.get(`/radom/`, (req,res)=>{
    res.send(archivo5)}
  

)}
objectoRandom()