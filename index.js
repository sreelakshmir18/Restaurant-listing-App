// 1) import json-server

const jsonServer = require('json-server')

// 2) Create a  server application using jsonServer

const restServer = jsonServer.create()

// 3) Setup path for db.json

const router = jsonServer.router('db.json')

// 4) return middleware

const middleware = jsonServer.defaults()

//5) setup a port number

const port = 3001

//use in restServer

restServer.use(middleware)
restServer.use(router)

//to run the server

restServer.listen(port,()=>{
    console.log("Restaurant server listening on port"+ port);
})