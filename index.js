//1 import json-server

const jsonServer = require('json-server')

//2 create a server application

const restServer = jsonServer.create()

//setup path for db.json

const router = jsonServer.router('db.json')

//return a middilware  instance used by json-server

const middilware = jsonServer.defaults()

//setup port for db.json

const port = 3001

//use in server

restServer.use(middilware)
restServer.use(router)

//to run the server

restServer.listen(port,()=>{
    console.log("rest server listening on port"+port);
})

