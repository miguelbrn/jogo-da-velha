const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'localhost:3000',
    methods: ['GET', 'POST']
  }
}) 

const port = 3001;

app.use(express.json())
app.use(cors())

http.listen(port, () => console.log('Ativo na 3001'))
