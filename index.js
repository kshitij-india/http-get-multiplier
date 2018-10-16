var http= require('http');
var url= require('url');

var httpServer= http.createServer(function(req, res){
    if(req.url!= '/favicon.ico'){
        var query= url.parse(req.url, true).query;

        if(query.a!= undefined && query.b!= undefined && isNaN(query.a)== false && isNaN(query.b)== false){
            res.end( "Product is " + (parseFloat(query.a) * parseFloat(query.b)).toString());
        }
        else{
            res.end("Invalid input. Please make sure you are entering only numbers as a and b");
        }
    }

});

httpServer.listen(3001, function(){
    console.log("Server listening on port 3001");
});