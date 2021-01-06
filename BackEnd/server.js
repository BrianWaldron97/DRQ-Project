// Skeleton for Server Taken from Expressjs.com
const express = require('express')
const app = express()

// Port changed from 3000 to 4000 to avoid collision of app - they are completely different domains
const port = 4000 

// CORS installed - Cross Origin Resource Sharing
// Unless this is installed, resources outside your domain cannot be used - this is for security
const cors = require('cors');

// Body parser
const bodyParser = require("body-parser");

// Acquiring Mongoose
const mongoose = require('mongoose');
const path = require('path');

// Cors no longer needed - not two domains anymore
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Path for build folder
app.use(express.static(path.join(__dirname, '../build')));
// Path for static folder
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// // parse application
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Conncection String from database - Using Mongoose to connect to our database
const mongoConnection = 'mongodb+srv://admin:admin@cluster0.te1pb.mongodb.net/books?retryWrites=true&w=majority';
mongoose.connect(mongoConnection, { useNewUrlParser: true });

// Schema
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookTitle: String,
    bookAuthor: String,
    publishYear: String,
    cover: String
});

// book collection
var BookModel = mongoose.model("book", bookSchema); 

// Listening for a GET request at /api/books
app.get('/api/books', (req, res) => {
    // Finds all records in database
    BookModel.find((err, data) => {
        res.json(data);
    })
})

// HTTP Req - get
app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    // Callback function
    BookModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// HTTP Req - put
app.put('/api/books/:id', (req, res) => {
    console.log("Edited Book: " +req.params.id);
    console.log(req.body);

    // Callback function
    BookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, data) => {
            res.send(data);
        })
})

// HTTP Req - delete
app.delete('/api/books/:id',(req, res) => {
    console.log("Delete Book: " + req.params.id);

    // Deleting Movie by ID
    BookModel.findByIdAndDelete(req.params.id,(err, data) => {
        res.send(data);
    })
})

// Listening for a POST request at /api/books - pull the info
app.post('/api/books', (req, res) => {
    console.log('Book Recieved');
    console.log(req.body.bookTitle);
    console.log(req.body.bookAuthor);
    console.log(req.body.publishYear);
    console.log(req.body.cover);

    BookModel.create({
        bookTitle: req.body.bookTitle,
        bookAuthor: req.body.bookAuthor,
        publishYear: req.body.publishYear,
        cover: req.body.cover
    })

    res.send('Book Added');
})

// GET request - Any URL not already taken/specified will return app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})