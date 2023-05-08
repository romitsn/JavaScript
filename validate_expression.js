/*
 Function to Validate Expression
 Name : Romit Sen
 Date : 3rd May 2023
*/

function validateExpression(expression) {

    //Checking if the string does not contain anything other than brackets and digits
    expression = expression.trim();

    if (expression.match(/[^\{\}\(\)\[\]][0-9]*/g) || !expression) {
        console.log("\nThe expression is NOT valid. Expression MUST HAVE brackets and MAY HAVE numbers ONLY.\n");
        process.exit(1);
    }

    var arr2 = [];

    //arr1 stores only brackets, no numbers at this point
    var arr1 = expression.match(/[\{\}\(\)\[\]]+/g);
    var str_expr = arr1.join(''); //Array to String
    arr1 = Array.from(str_expr);


    if ((arr1.length) % 2 != 0) { // Checks if expression has even number of brackets
        console.log(`\nThe expression is NOT valid. Doesn't contain an EVEN number of brackets\n`);
    } else if (/^[\)\}\]]$/.test(arr1[0])) { // Checks if expression has an even number of brackets but starts with a closing bracket
        console.log(`\nThe expression is NOT valid. Expression starts with a closing bracket: ${arr1[0]}\n`);
    } else if (/^[\(\{\[]$/.test(arr1[arr1.length - 1])) { // Checks if expression has an even number of brackets but ends with an opening bracket
        console.log(`\nThe expression is NOT valid. Expression ends with an opening bracket : ${arr1[arr1.length - 1]}\n`);
    } else {
        //Iterate through the first array and store each element in a second array
        for (iter = 0; iter < arr1.length; iter++) {

            if (arr2.length == 0) {
                arr2.push(arr1[iter]);
            } else {
                if (arr2[arr2.length - 1] == '{' && arr1[iter] == '}') {
                    arr2.pop();
                } else if (arr2[arr2.length - 1] == '[' && arr1[iter] == ']') {
                    arr2.pop();
                } else if (arr2[arr2.length - 1] == '(' && arr1[iter] == ')') {
                    arr2.pop();
                } else {
                    arr2.push(arr1[iter]);
                }
            }
        }

        //Checking if array2 length if empty, then valid , else invalid
        if (arr2.length == 0) {
            console.log(`\nWooHoo !! The expression is valid\n`);
        } else {
            console.log(`\nArghh !! The expression is NOT valid : ${arr2}\n`);
        }
    }

}

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('\nPlease enter an expression (with Brackets and Numbers ONLY) :\n', exprs => {
    readline.close();
    validateExpression(exprs);
});
