var webdriverio = require("webdriverio");
var chai = require("chai");

var options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};

webdriverio = webdriverio.remote(options).init().url('http://localhost:3000');

webdriverio.setValue("#inputText",  "test", function() {
    console.log("test");
});

webdriverio.click("#btn");

webdriverio.getAttribute("#textBox", "value", function(err, attr) {
    chai.assert.equal(attr,"test","ahuhauhea");
});

webdriverio.end();
