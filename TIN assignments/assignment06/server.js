const http = require('http')
const fs = require('fs')
const url = require('url');
const port = 3000
const querystring = require('querystring');
const { resourceLimits } = require('worker_threads');

const server = http.createServer(function(req, res){

    parameters = querystring.parse(req.url)

    firstOperand = parseInt(parameters['firstOperand']);
    secondOperand = parseInt(parameters['secondOperand']);
    operationName = parameters['operationName']
    
    let result = 0;

   
    switch(operationName){
        case 'add': result = firstOperand + secondOperand; break;
            case 'subtract': result = firstOperand - secondOperand; break;
                case 'multiply': result = firstOperand * secondOperand; break;
                    case 'divide': result = firstOperand / secondOperand; break;
    }

    res.write('<h1>This is correct syntax and example:</h1>')
    res.write('<h1>http://localhost:3000/&firstOperand=5&secondOperand=12&operationName=add</h1>')
    res.write('<h1>Result: '+result+'</h1>')
})

server.listen(port, function(error){
if(error){
    console.log('Something went wrong', error)

}else{
    console.log('Server is listening on port ' + port)
}
})