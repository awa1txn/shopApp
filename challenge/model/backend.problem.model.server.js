var q = require('q');
var mongoose = require('mongoose');
var userSchema = require('./backend.problem.model.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
module.exports = userModel;

function findUserByCredentials (username, password){
    var d = q.defer();
    userModel
        .find({username:username}, {password:password}, function (err, data){
            if(err) {
                d.reject(err);
            } else {
                d.resolve(data);
            }
        });
    return d.promise;

}
function findUserByUsername(username){
    var d = q.defer();
    userModel
        .find({username: username}, function (err, data) {
            if(err) {
                d.reject(err);
            } else {
                console.log(data);
                d.resolve(data);
            }
        });
    return d.promise;

}

function findUserById(userId){
    var d = q.defer();
    userModel
        .findOne({_id: userId}, function (err, data) {
            if(err) {
                d.reject(err);
            } else {
                d.resolve(data);
            }
        });
    return d.promise;

}


function  deleteUser(userId) {
    var d = q.defer();
    userModel
        .remove({_id: userId}, function (err, data) {
            if(err){
                d.reject(err);
            }
            else {
                d.resolve(data);
            }
        });
    return d.promise;

}

function createUser(user) {
    var deffered = q.defer();
    userModel
        .create(user, function (err, data) {
            if(err){
                deffered.reject(err);
            }
            else {
                deffered.resolve(data);
            }
        });
    return deffered.promise;
}

function updateUser(userId, user){
    var d = q.defer();
    userModel
        .update({_id: userId}, {$set: user},  function (err, data) {
            if(err){
                d.reject(err);
            }
            else {
                d.resolve(data);
            }
        });
    return d.promise;

}