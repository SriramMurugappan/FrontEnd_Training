function printResults(res){
    console.log("Results :"+ res);
}

//definition of calc function
function calc(val1,val2,printResults){
    var res=val1 *val2;
    printResults(res);
}

//Invoke or call calc() function
//Pass the printResults() function as the parameter to
//calc() function along with 2 other parameters i.e.,100 and 200
calc(100,200,printResults);
//Even variables and data structures can be reused.

var IMEINo=12456467287858;

//How to reuse these functions in another functions.
//We can use module.exports to export all the reusable functions and reusable codes.
//
module.exports = {calculate: calc,pr: printResults,IMEI_No: IMEINo }