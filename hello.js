/**
 * Created by RFreeman on 9/23/2016.
 */

// create a local variable
var message = 'hello there...';

// make a public function that can be called from other files
exports.sayHello = function() {
   console.log(message);
};

// call it from here this way: exports.sayHello();

// make a private hello function
var privateHello = function() {
    console.log(message);
}

