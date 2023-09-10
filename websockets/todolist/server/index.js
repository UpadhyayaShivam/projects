const express =  require('express');
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

const port = 5050;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const socketio = require('socket.io')(http, {
    cors:{
        origin:"*",
    }
});

socketio.on('connection' , (sockect)=>{
    console.log(`${sockect.id} user just connected`);
    sockect.on('disconnected' , ()=>{
        sockect.disconnected();
        console.log(`user disconnected`);
    });
});

app.get('/api',( request , response )=>{
        response.json({
            message: "hello u know",
        });
});



app.listen(port ,()=>{
    console.log(`listening to the port ${port}`);
});