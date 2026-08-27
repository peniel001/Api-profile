import http from 'node:http'
import fs from 'node:fs'

const data = fs.readFileSync('./data/data.json')
const me = JSON.parse(data)
const PORT = 3000
const server = http.createServer((req, res) => {
    const { method, url } = req
    res.setHeader('Content-Type', 'application/json')
    if (method === 'GET' && url === '/me') {
        res.writeHead(200)
        res.end(JSON.stringify({
            status: 'success',
            user: {
                "email": "penielcrypt@gmail.com",
                "name": "Chioma Don",
                "stack": "Node.js"
            },
            timestamp: new Date().toISOString(),
        
        }))
        return
    }



    res.end('Hello from the backend')

})
server.listen(PORT, () => {
    console.log(`server is listing on port: ${PORT}`)
})