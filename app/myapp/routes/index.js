var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/saveEmail', function(req, res) {
    var email = req.body.email + "\n";

    var fs = require('fs');
    var error = false;
    var stream = fs.appendFile("emails.txt",email,function(err) {
        if (err) {
            error = true;
        }
    },function() {
        if(!error) {
            res.json({ok:true});
        }
        else {
            res.json(500,{ ok:false});
        }
        res.end();
    });
});


module.exports = router;
