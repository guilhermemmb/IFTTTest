var selenium  = require("selenium-standalone");


var spawnOptions = { stdio: 'pipe' };

 var seleniumArgs = [
   '-debug'
];

var server = selenium(spawnOptions, seleniumArgs);
//var server = selenium();

server.stdout.on('data', function(output) {
     //console.log(output);
});