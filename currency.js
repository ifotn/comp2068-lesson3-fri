/**
 * Created by RFreeman on 9/23/2016.
 */

// reference the accounting npm package
var accounting = require('accounting');

// create a variable and assign a numeric value
var amount = 98.3458;
amount = accounting.formatMoney(amount, { "symbol": "RUS"} );

// display the amount
console.log(amount);
