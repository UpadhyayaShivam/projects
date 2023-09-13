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

// app.get('/api',( request , response )=>{
//         response.json({
//             message: "hello u know",
//         });
// });

const fetchID = () => Math.random().toString(36).substring(2, 10);

//👇🏻 Nested object
let tasks = {
    pending: {
        title: "pending",
        items: [
            {
                id: fetchID(),
                title: "Send the Figma file to Dima",
                comments: [],
            },
        ],
    },
    ongoing: {
        title: "ongoing",
        items: [
            {
                id: fetchID(),
                title: "Review GitHub issues",
                comments: [
                    {
                        name: "David",
                        text: "Ensure you review before merging",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
    completed: {
        title: "completed",
        items: [
            {
                id: fetchID(),
                title: "Create technical contents",
                comments: [
                    {
                        name: "Dima",
                        text: "Make sure you check the requirements",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
};

//👇🏻 host the tasks object via the /api route
app.get("/api", (req, res) => {
    res.json(tasks);
});



app.listen(port ,()=>{
    console.log(`listening to the port ${port}`);
});