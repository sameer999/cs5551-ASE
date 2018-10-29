var http= require('http');
var fs = require('fs');
http.createServer(function(req, res){
    fs.appendFile('text.txt','end of the file', function(err){
        if (err) throw err;
        console.log('file saved suuccessfully');
        res.end();
    });
    //res.end();
}).listen(8080);