
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[0];
        sum = sum + element;
    }
}

var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);