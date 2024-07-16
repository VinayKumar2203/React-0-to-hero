const fs=require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
    case 'read':
        readFile(file);
        break;
    case 'delete':
        deleteFile(file);
        break;
    case 'create':
        createFile(file);
        break;
    case 'append':
        appendFile(file,content);
        break;
    case 'rename':
        renameFile(file,content);
        break;
    case 'list':
        listDirectory(file);
        break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
function readFile(filePath){
  fs.readFile(filePath,"utf8",(err,data)=>{
     if (err) {
        console.log("error read file",err)
     }else{
        console.log(data);
     }
  })
}
function deleteFile(filePath){
  fs.unlink(filePath,(err)=>{
     if (err) {
        console.log("error delete file",err)
     }else{
        console.log(`file ${filePath} deleted`);
     }
  })
}
function createFile(filePath){
  fs.writeFile(filePath,"",(err)=>{
     if (err) {
        console.log("error creating file",err)
     }else{
        console.log(`file ${filePath} create`);
     }
  })
}
function appendFile(filePath,content){
  fs.appendFile(filePath,content + '\n',(err)=>{
     if (err) {
        console.log("error append file",err)
     }else{
        console.log(`file ${filePath} append`);
     }
  })
}
function renameFile(oldPath,newPath){
  fs.rename(oldPath,newPath ,(err)=>{
     if (err) {
        console.log("error renameFile ",err)
     }else{
        console.log(`File '${oldPath}' renamed to '${newPath}'`);
     }
  })
}
function listDirectory(dirPath){
  fs.renameFile(dirPath,(err,files)=>{
     if (err) {
        console.log("error renameFilisting directoryle ",err)
     }else{
        files.forEach(file => {
            console.log(file);
        });
     }
  })
}