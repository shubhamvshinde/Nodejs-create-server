// const http = require("http");

// var htmlDoc = "<h1>Create Variable</h1>";
// http.createServer(function(request,response){
//         response.write(htmlDoc);
//         response.end("End responce");
//     })
//     .listen(9000);  //PORT


const http =require("http");
const server = http.createServer(function(req,res){
    res.write("<h1>Server Side</h1>");
    res.write("This is first HTTP server assignment using node</br></br>")
    res.write(JSON.stringify({Name:"Shubham Shinde"}));
    res.end()
})
server.listen(4000)