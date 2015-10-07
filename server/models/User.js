var mongoose = require('../lib/mongoose');
var UserSchema = mongoose.Schema;

var schema = new UserSchema({
    name: {
        type: String,
        unique: true
    },
    hashPassword: {
        type: String
    },
    salt: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function(password) {
    return password + this.salt;
}

schema.methods.checkPassword = function(password){
    return this.encryptPassword(password) === this.hashPassword;
}

schema.virtual('password').set(function(password) {
    this._plainPassword = password;
    this.salt = 'salt';
    this.hashPassword = this.encryptPassword(password);
});

schema.virtual('password').get(function() {
    return this._plainPassword;
});

module.exports = mongoose.model('User', schema);