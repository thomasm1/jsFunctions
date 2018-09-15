var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
// var mongojs = require('mongojs')
// var db = mongojs(connectionString, [collections])
var app = express();
/* var logger = function(req, res, next){
    console.log('Tom's logging...');
    next();
}
app.use(logger);
*/ 
// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
    });
// Express Validator Middleware ::  the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

    var person = [{
        name: 'TMM',    age: 40, id: 1},
        {name: 'tmm',    age: 3, id: 2},
        {name: 'thomas',    age:88, id: 3}];

    var users = [
        { 
            id: 1, 
            fname: 'tom',
            lname: 'milt',
            email: 'thomas.maestas1@hotmail.com',
        },  { 
            id: 2, 
            fname: 'tomtom',
            lname: 'miltmilt',
            email: 'thomas.maestas2@hotmail.com',
        },  { 
            id: 3, 
            fname: 'tomtomtom',
            lname: 'miltmiltmilt',
            email: 'thomas.maestas3@hotmail.com',
        }];
var titlejuillet = 'Juillet 1.0.0.3 FROM EJS';

app.get('/', function(req, res){
   // res.json(person); //   
   // res.send('Hello from Tom. Express currently broadcasting on port 3000 !');
    // res.render('index'); 
    res.render('index', {
        title: titlejuillet, 
        users: users,
    });
});

app.post('/users/add', function(req, res){ 

   req.checkBody('fname', 'First Name is Required').notEmpty();
   req.checkBody('lname', 'Last Name is Required').notEmpty();
   req.checkBody('email', 'Email is Required').notEmpty();
console.log('checking 1-2-3')
console.log(req.checkBody.fname);
    var errors = req.validationErrors(); // . Use req.getValidationResult() gives ERROR
    
    if(errors){
        // res.json(person); //   
   // res.send('Hello from Tom. Express currently broadcasting on port 3000 !'); 
     res.render('index', {
       title: titlejuillet, 
       users: users,
      errors: errors
     });
    } else { 
        var newUser = {
            fname: req.body.fname, 
            lname: req.body.lname,
            email: req.body.email
        }
        console.log('SUCCESS');
     }
});

app.listen(3000, function(){
    console.log('EJS Server starting, cough cough, on Port 3000...');
})
