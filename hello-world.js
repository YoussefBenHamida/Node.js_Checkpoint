//1
console.log("HELLO WORLD") 

// // 2 : Creating a server
const http = require('http')

const server = http.createServer(function(req,res){
    res.write('<h1>Hello Node!!!!</h1>');
    res.end();
});

server.listen(3000,(err) => {
    err ? console.log(err):console.log('The Server is Running on port 3000')}) 

//3 : Creating anf reading files
let fs = require('fs')
console.log(fs)

fs.appendFile('welcome.txt','hello Node',(err)=>{err?console.log(err):console.log('the textfile is created')})

fs.readFile('./hello.text',{encoding:'utf8'},(error,data)=>{
    error?console.log(error):console.log('hello.text file contains: ', data)
})
