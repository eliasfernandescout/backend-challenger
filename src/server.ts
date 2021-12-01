import express from 'express';

const app = express();
app.use(express.json());

app.listen(7002, () => {
    console.log('SERVER STARTED ON PORT 5002');
});
