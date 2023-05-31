var fs = require('fs');
var http = require('http');
var url = require('url');



///fs.writeFileSync('read.php','<?php for($i = 0; $i < 10; $i++){ echo $i; } ?>');

//fs.writeFileSync('read.txt','welcome again shoaib ali!');

//fs.writeFileSync('winter.html','<!DOCTYPE html>\r<html>\r<body>\r<h1>Winter</h1>\r<p>I love the snow!</p>\r</body>\r</html>');

//var data = fs.readFileSync('read.php');

//var res = fs.unlinkSync('winter.html');

//console.log(res);

//var http = require('http');

http.createServer(function (req, res) {
    /* res.writeHead(200);
    res.write(data);
    return res.end(); */
   var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
   
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
