const fs = require("fs");

function appendFileFunction(req, res) {
  //Declare the folder name
  const fol = "backup";
  //Getting filename from request params
  let fname = req.params["fname"];
  //Getting updating data from request body
  let addData = req.body;
  
  //Read Directory
  fs.readdir(`./${fol}`, (err, files) => {
    if (err) res.send(err); //sending error response for directory not exists
    else
      fs.appendFile(`./${fol}/${fname}`, addData, (err) => {
        res.send("File Appended Successfully !!!"); //updated response
      });
  });
}
module.exports=appendFileFunction
