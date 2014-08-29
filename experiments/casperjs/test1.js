//selector action
var elementSelector = {
	selector : '#inputText',
	tests : [
		{
			fn : function() {
				return document.querySelector('#inputText') !== undefined;
			},
			msg : "elementSelector exists on DOM"
		}
	],

	execute : function() {
		return elementSelector;
	}
};

var elementBtn = {
	selector : '#btn',
	tests : [
		{
			fn : function() {
				return document.querySelector('#btn') !== undefined;
			},
			msg : "elementSelector exists on DOM"
		}
	],

	execute : function() {
		return elementBtn;
	}
};

var elementSelectorAfter = {
	selector : '#textBox',
	tests : [
		{
			fn : function() {
				return document.querySelector('#textBox') !== undefined;
			},
			msg : "elementSelector exists on DOM"
		}
	],

	execute : function() {
		return elementSelectorAfter;
	}
};

var actionClick = {
	type : 'click',
	execute : function(element) {
		return casper.click(element.selector);
	}
}

var actionFillField = {
	type : 'sendKeys',
	execute : function(element) {
		return casper.sendKeys(element.selector,"test");
	}
}

var actionGetText = {
	type : 'getText',
	execute : function(element) {
		var x = casper.evaluate(function () { return document.querySelector("#textBox").value; });
        casper.echo("geaihueahueahue ->>>>>>");
        require('utils').dump(x);
        return x;
	}
}
var actionCompareTo = {
	type : 'compareTo',

	execute : function(data) {
		return casper.test.assert(data == "test", "se o valor é igual");
	}
}

var sequence = [[elementSelector, actionFillField, elementBtn, actionClick], [elementSelectorAfter, actionGetText, actionCompareTo]];

casper.test.begin('testing', function(test) {
	casper.start('http://localhost:3000', function() {
	});

    casper.then(function() {
        casper.echo(this.getTitle());
        //unit tests about objects
        for(var y = 0;y < sequence[0].length; y++) {
            var elementTest = sequence[0][y];
            if(typeof(elementTest.tests) !== 'undefined') {
                for(var i = 0;i < elementTest.tests.length; i++) {
                    var testCase = 	elementTest.tests[i];
                    test.assert(casper.evaluate(testCase.fn), testCase.msg);
                }
            }
        }
        for(var y = 0;y < sequence[1].length; y++) {
            var elementTest = sequence[1][y];
            if(typeof(elementTest.tests) !== 'undefined') {
                for(var i = 0;i < elementTest.tests.length; i++) {
                    var testCase = 	elementTest.tests[i];
                    test.assert(casper.evaluate(testCase.fn), testCase.msg);
                }
            }
        }
    });

    var before = sequence[0];
    var after = sequence[1];

    var valB,valA = null;

    casper.eachThen(before, function(response) {
        valB = response.data.execute(valB);
    });

    casper.eachThen(after, function(response) {
        valA = response.data.execute(valA);
    });

	casper.run(function() {
		test.done();
	});
});

casper.on("load.finished", function() {
    this.echo( " LOOOOOOAD ");
});
