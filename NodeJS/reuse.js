//Reuse calc ,printResult and IMEINo here.
//Import Callbacks.js
//Import the callbacks module and refer to it as call
var call=require('./Callbacks');//No need to mention .js
call.calculate(200,300, call.pr);

console.log(call.IMEI_No)
