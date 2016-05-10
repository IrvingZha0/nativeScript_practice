var frameModule = require("ui/frame");

var viewModule = require("ui/core/view");
var email;

var Observable = require("data/observable").Observable;

var user = new Observable({
    email: "user@domain.com",
    password: "password"
});

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = user;
};
exports.signIn = function() {
    console.log(email.text);
};


exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};