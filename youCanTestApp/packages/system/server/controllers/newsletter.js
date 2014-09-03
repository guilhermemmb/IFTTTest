'use strict';

var mean = require('meanio');

exports.render = function(req, res) {

  var modules = [];
  // Preparing angular modules list with dependencies
  for (var name in mean.modules) {
    modules.push({
      name: name,
      module: 'mean.' + name,
      angularDependencies: mean.modules[name].angularDependencies
    });
  }

  // Send some basic starting info to the view
  res.render('index', {
    user: req.user ? {
      name: req.user.name,
      _id: req.user._id,
      username: req.user.username,
      roles: req.user.roles
    } : {},
    modules: modules,
    isAdmin: false,
    adminEnabled: false
  });
};
/**
 * Save an email
 */
exports.save = function(req, res) {
    var email = req.body.email + '\n';

    var fs = require('fs');
    var error = false;

    fs.appendFile('emails.txt',email,function(err) {
            if (err) {
                error = true;
            }
        }, function() {
            if(!error) {
                res.json({ok:true});
            }
            else {
                res.json(500,{ ok:false});
            }
        }
    );
};

