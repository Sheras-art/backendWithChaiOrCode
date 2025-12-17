import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const jokes = [
    {
        id: 1,
        content: "I am joke one"
    },
    {
        id: 2,
        content: "I am joke two"
    },
    {
        id: 3,
        content: "I am joke three"
    },
    {
        id: 4,
        content: "I am joke four"
    }
]

app.get('/', (req, resp)=>{
    resp.send("Running")
})

app.get('/api/jokes', (req, resp)=>{
    resp.json(jokes);    
})

app.listen(process.env.PORT, ()=>console.log(`server is running at ${process.env.PORT}`)
)