//import required packages

const express = require("express");
const fs= require("fs");
require('dotenv').config()
//import external functions
const  createFilefunction  = require("./createFilefunction");
const  deleteFileFunction = require("./deleteFileFunction");
const  readFileFunction  = require("./readFileFunction");
const  updateFileFunction  = require("./updateFileFunction");
const  appendFileFunction = require("./appendFileFunction");
//create a app using express
const app = express();
//body parser
app.use(express.text())
//assigned a port number
const port=process.env.PORT







// ***************** Create new File
app.post('/createFile', (req, res) => {
    try {
        createFilefunction(res);
    } catch (error) {
        res.send(error);
    }
})

//**************** Read a File by Filename
app.get('/readFile/:fname', (req, res) => {
  try {
    readFileFunction(req, res);
  } catch (error) {
     res.send(error) 
  }
})
//**************** Delete a File by Filename
app.delete('/deleteFile/:fname', (req, res) => {
try {
    deleteFileFunction(req, res);
} catch (error) {
    res.send(error)
}
})
//**************** Update a File by Filename
app.put('/updateFile/:fname', (req, res) => {
    try {
        updateFileFunction(req, res);
    } catch (error) {
        res.send(error)
    }
})


//**************** Append a File by Filename
app.put('/appendFile/:fname', (req, res) => {
    try {
        appendFileFunction(req, res);
    } catch (error) {
        res.send(error)
    }
})
// //****************Retrieve all text file in that particular folder*/
app.get('/getFiles', (req, res) => {
 
try {
      
    let fol = "backup";
    //Retrieve all the text files in this folder
    let filenames = fs.readdirSync(fol);
    res.send(filenames)

} catch (error) {
    res.send(error)
}
    });
//*********************** create a server Listening Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



