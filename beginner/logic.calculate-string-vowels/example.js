const vowels = ['a', 'e', 'i', 'o', 'u']; 
// Create a function called `calcVowels` that takes in `(const char *_str, const size_t _size)`.
function calcVowels(_str)
{
    var sum = 0;
    // Iterate through each character, and check if they are a vowel.
    for(var i = 0; i < _size; i++)
    {
        const pull = _str[i];
        // Ensure that capital-cased characters are lower-cased.
        if (pull >= 65 && pull <= 90)
            pull += 32;
        for (var j = 0; j < 5; j++)
        {
            if (vowels[j] == pull)
                sum++;
        }
    }
    // Ensure that you are returning the sum as an `int`
    return sum;
}