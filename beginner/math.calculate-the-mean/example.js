// Create a float returning function called `calculateMean` with the parameters of `(const int* _arr, const size_t _size)`
function calculateMean(_arr, _size)
{
    var sum = 0.0;
    // Iterate through all the integers, and sum them up.
    for(var i = 0; i < _size; i++)
    {
        sum += _arr[i];
    }
    // Mean = sum / amountOfItems.
    return sum / _size;
}