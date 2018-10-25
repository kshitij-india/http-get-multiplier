var request= require('request');
var expect= require('chai').expect;

var server= require('../server');

describe("Product of two numbers server tests",function(){

    before('start the server', function(done){
        server.listen(3001, function(){
            done();
        });
    });

   describe('correct product should be displayed for valid inputs', function(){

        it('should return 6 when input is 2 and 3', function(done){
            request('http://localhost:3001?a=2&b=3', function(error, response, body){
                expect(body).to.equal("Product is 6");
                done();
            });
        });

        it('should return -5 when input is -2.5 and 2', function(done){
            request('http://localhost:3001?a=-2.5&b=2', function(error, response, body){
                expect(body).to.equal("Product is -5");
                done();
            });
        });

        it('should display correct output for any subdomain as long as a and b are specified properly', function(done){
            request('http://localhost:3001/gjkhtuihjkghjkf?a=-2.5&b=3', function(error, response, body){
                expect(body).to.equal("Product is -7.5");
                done();
            });
        });

        it('should display correct output even when other parameters are specified with a and b, ignoring all other parameters', function(done){
            request('http://localhost:3001?a=10&c=jfghfjkghjk&b=5', function(error, response, body){
                expect(body).to.equal("Product is 50");
                done();
            });
        });
    });

    describe('proper error message should be displayed for invalid inputs', function(){

        describe('should display error when either a or b or both are not entered', function(){

            it('should display error when a is not entered', function(done){
                request('http://localhost:3001?b=2', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });

            it('should display error when b is not entered', function(done){
                request('http://localhost:3001?a=2', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });

            it('should display error when both a and b are not entered', function(done){
                request('http://localhost:3001', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });
        });

        describe('should display error message when either a or b or both are not numbers', function(){

            it('should display error when a is not a number', function(done){
                request('http://localhost:3001?a=dkfj&b=2', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });

            it('should display error when b is not a number', function(done){
                request('http://localhost:3001?a=7&b=jtuit', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });

            it('should display error when both a and b are not numbers', function(done){
                request('http://localhost:3001?a=dkfj&b=ulkl', function(error, response, body){
                    expect(body).to.equal("Invalid input. Please make sure you are entering only numbers as a and b");
                    done();
                });
            });
        });
    });

    after('close the server', function(){
        server.close();
    });
});