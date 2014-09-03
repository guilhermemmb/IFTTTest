'use strict';

module.exports = function(System, app, auth, database) {

  // Home route
    var index = require('../controllers/index');
    var newsletter = require('../controllers/newsletter');

    app.route('/').get(index.render);

    app.route('/newsletter').post(newsletter.save);
    app.route('/coming-soon').get(newsletter.render);

};
