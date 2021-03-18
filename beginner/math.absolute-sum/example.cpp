#include <cstddef>
#include <cstdint>

// Create a Function called `absoluteSum` with the parameters of `(const int _arr[], const int _size)`
int absoluteSum(const int _arr[], const size_t _size)
{
    int sum = 0;
    for (uint32_t i = 0; i < _size; i++)
    {
        int pull = _arr[i];
        // For each element that is below zero, flip it.
        if (pull < 0)
            pull *= -1;
        sum += pull;
    }

    // Make sure the function has a return type of `int` and the function returns the sum.
    return sum;
}