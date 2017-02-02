var express = require('express');
var app = express();
var result = {}

function getInfosFromHeader(header){
    result['ipaddress'] = header['x-forwarded-for'];
    result['language'] = header['accept-language'].split(",")[0]
    var userAgent = header['user-agent'];
    result['OS'] = userAgent.slice((userAgent.indexOf("(")+1), userAgent.indexOf(")"))

}


app.get('/', function(req, res){
    var header = req.headers
    getInfosFromHeader(header)
    res.send(result);
})

app.listen(process.env.PORT || 8080, function(){
    console.log("Listenando da porta 8080");
})