import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req, res)=> {
    if (req.url === '/api' && req.method === 'GET') {
        res.end('This is from server!')
    }
})

server.listen(PORT, ()=> console.log(`Server is listennig on port: ${PORT}`))