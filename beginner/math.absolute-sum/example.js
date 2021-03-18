// Create a Function called `absoluteSum` with the parameters of `(const int _arr[], const int _size)`
function absoluteSum(_arr, _size)
{
    var sum = 0;
    for (let index = 0; index < _arr.length; index++) {
        var pull = _arr[index];
        // For each element that is below zero, flip it.
        if (pull < 0)
            pull *= -1;
            
        // Make sure the function has a return type of `int` and the function returns the sum.
        sum += pull;
    }
    return sum;
}

process.exit(!(absoluteSum([-1]) == 1 && absoluteSum([1]) == 1 && absoluteSum([2, -1, -3, 4, 8]) == 18 && absoluteSum([-1, -3, -5, -4, -10, 0]) == 23 && absoluteSum([8, 9, 10, 32, 101, -10]) == 170 && absoluteSum([500]) == 500));