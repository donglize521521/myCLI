const ejs = require('ejs');
const path = require('path');

const compile = (templateName,data) =>{
  const templatePositon = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname,templatePositon);

  // console.log(templatePath);
  return new Promise((resolve, reject)=>{
    ejs.renderFile(templatePath,{data},{},(err, result) =>{
      if(err){
        console.log(err);
        reject(err)
        return;
      }
        resolve(result);
     //  callback(result)
   })
  })
 
}

module.exports = {
  compile
}