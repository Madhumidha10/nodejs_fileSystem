const fs = require("fs");

function deleteFileFunction(req, res) {
  //Declare the folder name
  const fol = "backup";
  //Getting filename from request params
  let fname = req.params["fname"];
  //Read Directory
  fs.readdir(`./${fol}`, (err, files) => {
    if (err) res.send(err); //sending error response for directory not exists
    else
      fs.unlink(`./${fol}/${fname}`, (err) => {
        if (err) res.send(err); //sending response file not exists
        else res.send("File Deleted successfullly !!!"); //successfully deleted response
      });
  });
}
module.exports=deleteFileFunction;
