#http-get-multiplier#
A simple NodeJS http server which accepts two numbers over GET request and returns their output.

##Installation##

To install, first clone the repository and install the npm modules.
```bash
git clone https://bitbucket.org/kshitijjain/http-get-multiplier.git
npm install
```

##Getting Started##
Start the server using `npm start` command
```bash
npm start
```
  
The server will start on port 3001. Navigate to http://localhost:3001?a=5&b=10 to proceed.
Here a and b are the numbers whose product is required. On providing correct numbers, the product will be diplayed. If invalid or no numbers are provided, the server will return an error message.

##Unit Testing##
Unit test cases are written in mocha and chai. They are located in `test` directory.
To start the testing environment:
```bash
npm test
```