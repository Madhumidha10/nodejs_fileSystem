const fs = require("fs");


function createFilefunction(res) {
  //Declare the folder name
  const fol = "backup";
  
//***************Getting current timestamp , date and time *****************
var today_dt = new Date();
var ms = today_dt.getTime();
var sec = today_dt.getSeconds();
var min = today_dt.getMinutes();
var hr = today_dt.getHours();
var date = today_dt.getDate();
var year = today_dt.getFullYear();
var month = today_dt.getMonth() + 1;

  //creating a filename like dd-m-yyy_hh_mm_sec
  var file_name = `${date}-${month}-${year}_${hr}_${min}_${sec}`;

  //create file content like below
  var content = `Date :${today_dt} \n Year:${year} \n Month:${month} \n Date:${date} \n hours:${hr} \n Minutes:${min} \n seconds:${sec} \n Milliseconds:${ms}`;

  //create a file inside the corresponding folder
  fs.writeFile(`${fol}/${file_name}.txt`, content, (err) => {
    if (err) res.send(err);
    else res.send({"msg":"File Created Successfully","filename":`${file_name}.txt`});
  });
}
module.exports=createFilefunction
