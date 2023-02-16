const http =require('http');

const hostname = '0.0.0.0';
const port=3000;

const server = http.createServer((reg, res) =>{
    res.statusCode200;
    res.setHeader('content-Type', 'text/plain');
    res.end('zeet-Node');

});
server.listen(port, hostname, ()=>{
    console.log('server runnig at http://${hostname}:${port}/');
});