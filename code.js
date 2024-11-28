function permutationSort(a) {
    // initialize count to 0
    let count = 0;

    // helper function to "create" permutations
    function permute(array, start) {
        // once permutation is complete, 
        if (start === array.length) {
            // increment count for every array permutation checked
            count++;
            if (checkSorted(array)) {
                return true;
            }
            return false;
        }

        // loop over each element as i
        for (let i = start; i < array.length; i++) {
            // generate permutations by swapping the element at index start with the element at the index of the current i
            [array[start], array[i]] = [array[i], array[start]];

            // recursive call to generate permutations with a different value for "start"
            if (permute(array, start + 1)) {
                // if a recursive call returns true, return true for entire call
                return true;
            }

            // revert to original array
            [array[start], array[i]] = [array[i], array[start]];
        }

        return false;
    }

    // helper function to check if array is sorted
    function checkSorted(array) {
        // loop over every element
        for (let i = 1; i < array.length; i++) {
            // check if each adjacent element is ordered correctly, if not return false
            if (array[i] < array[i - 1]) {
                return false;
            }
        }
        return true;
    }

    // initial call of recursive function with "start" set to 0
    permute(a, 0);

    return count;
}
