module.exports = function (app){

    var model = require('./model/backend.problem.model.server');

    require('./services/backend.problem.services.server')(app,model);
};