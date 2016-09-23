/**
 * Created by RFreeman on 9/23/2016.
 */
// link to connect package
var connect = require('connect');

// link to the url module to parse url parameters
var url = require('url');
var accounting = require('accounting');

// instantiate a new connect object
var app = connect();

// set up a hello function
var hello = function(req, res, next) {
    res.end('Hello world');
};

var goodbye = function(req, res, next) {
    res.end('Goodbye world');
};

var generic = function(req, res, next) {
    //res.end('You reached localhost:3000 and nodemon is running');
    //res.load('./default.html'); ???
}

var calculateTax = function(req, res, next) {
    // get the subtotal value from the url
    // http://localhost:3000/calculatetax?subtotal=99.99
    var qs = url.parse(req.url, true).query;
    var subTotal = qs.subtotal;

    // calculate the tax amount on this subtotal
    var tax = parseFloat(subTotal) * 0.13;

    // calculate the total
    var total = tax + parseFloat(subTotal);

    // display all 3 amounts
    res.end('SubTotal: ' + accounting.formatMoney(subTotal) + '\n' +
            'Tax: ' + accounting.formatMoney(tax) + '\n' +
            'Total: ' + accounting.formatMoney(total));
};

// execute hello function when requests come in
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/calculatetax', calculateTax);
app.use(generic);

// start the web server on port 3000 (can be any port)
app.listen(3000);

// display message that the server is running
console.log('Connect running on port 3000');
