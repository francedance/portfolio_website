var express = require('express');
var path = require('path');


var index = require('./routes/index');



var app = express();

app.set('port',(process.env.PORT || 3000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',express.static(__dirname + '/public'));


index(app);


app.get('*', function(req, res, next) {
            var err = new Error();
                err.status = 404;
                     next(err);
        });

        // handling 404 errors
    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
                return next();
            }
 
                 res.send(err.message || 'Sorry! The page you are looking for right now does not exist :)');
                });


app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});