const fs = require("fs");

function readFileFunction(req, res) {
  //Declare the folder name
  const fol = "backup";
  //Getting filename from request params
  let fname = req.params["fname"];
  //Read Directory
  fs.readdir(`./${fol}`, (err, files) => {
    if (err) res.send(err); //sending error response for directory not exists
    else
      fs.readFile(`./${fol}/${fname}`, "utf8", (err, content) => {
        if (err) res.send(err); //sending response file not exists
        else res.send(content); //sending file content
      });
  });
}
module.exports=readFileFunction;
