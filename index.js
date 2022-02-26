const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:1234@boilerplate.ps2v6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));




app.get('/', (req,res) => res.send("Eunsol World"));

app.listen(PORT, () => console.log('Server is Running!'));