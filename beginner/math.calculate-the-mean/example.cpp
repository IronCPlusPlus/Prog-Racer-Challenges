#include <cstdint>
#include <cstddef>

// Create a float returning function called `calculateMean` with the parameters of `(const int* _arr, const size_t _size)`
float calculateMean(const int* _arr, const size_t _size)
{
    float sum = 0.0f;
    // Iterate through all the integers, and sum them up.
    for(uint32_t i = 0; i < _size; i++)
    {
        sum += _arr[i];
    }
    // Mean = sum / amountOfItems.
    return sum / _size;
}