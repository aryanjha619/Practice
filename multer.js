const multer = require('multer');
 const storage = multer.diskStorage({
     destination:(req,file,cb)=>{
         cb(null,'uploads/');
     },
     filename: function(req,file,cb){

         const uniquesuffix = Date.now() + "-" + Math.round.apply(Math.random()*1e9);
         const filename = file.originalname.split(".")[0];
         cb(null,filename+uniquesuffix+".png");

     },
 });
exports.upload = multer({storage:storage});
