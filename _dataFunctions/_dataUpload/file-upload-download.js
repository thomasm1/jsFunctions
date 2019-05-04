// npm install --save ng2-file-upload multer file-saver

var express = require('express');
var _router = express.Router(); 
var express = require('multer');

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

var upload = multer({storage:store}).single('file');

_router.post('/upload', function(req,res,next){
     upload(req,res,function(err){
         if(err){
            return res.status(501).json({error:err});
         }
         
         return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
         });
   });
