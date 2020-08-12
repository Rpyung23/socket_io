const path = require('path');
const express = require('express');
const app = express();
app.set('port',process.env.PORT || 3000);
//stactic file
app.use(express.static(path.join(__dirname,'public')));//html index
//incia el server
const  server = app.listen(app.get('port'),()=>
{
    console.log("SERVER INICIADO"+app.get('port'));
    //console.log(path.join(__dirname())); para obtener la ruta de las carpertas / o \
});
const socket_io = require('socket.io');
const io = socket_io(server);//creo el soket io bidirecional y lo guaro en una variable
/**Espero a que se conecte un cliente**/
io.on('connection',(socket_cliente)=>
{
    console.log("CON NEW : "+socket_cliente.id);
});