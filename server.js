var http= require('http');
var url= require('url');

var httpServer= http.createServer(function(req, res){
        var query= url.parse(req.url, true).query;

        if(query.a!= undefined && query.b!= undefined && isNaN(query.a)== false && isNaN(query.b)== false){
            res.end( "Product is " + (parseFloat(query.a) * parseFloat(query.b)).toString());
        }
        else{
            res.end("Invalid input. Please make sure you are entering only numbers as a and b");
        }
});

exports.listen= function(port){
    httpServer.listen(port, function(){
        console.log(`Server listening on port ${port}. Please navigate to http://localhost:${port}?a=5&b=10 to proceed`);
    });
};

exports.close= function(){
    httpServer.close();
};