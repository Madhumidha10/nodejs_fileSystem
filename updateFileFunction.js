const fs = require("fs");

function updateFileFunction(req, res) {
  //Declare the folder name
  const fol = "backup";
  //Getting filename from request params
  let fname = req.params["fname"];
  //Getting updating data from request body
  let newData = req.body;
  
  //Read Directory
  fs.readdir(`./${fol}`, (err, files) => {
    if (err) res.send(err); //sending error response for directory not exists
    else
      fs.writeFile(`./${fol}/${fname}`, newData, (err) => {
        res.send("File Updated Successfully !!!"); //updated response
      });
  });
}
module.exports=updateFileFunction
