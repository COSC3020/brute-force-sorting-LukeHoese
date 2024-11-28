function permutationSort(a) {
    let count = 0;

    // Helper function to generate all permutations of the array
    function generatePermutations(arr, start) {
        if (start === arr.length) {
            count++; // Increment count for each permutation tried
            // Check if the array is sorted
            if (isSorted(arr)) {
                return true; // If sorted, return true
            }
            return false; // If not sorted, continue
        }

        for (let i = start; i < arr.length; i++) {
            // Swap elements at indices `start` and `i`
            [arr[start], arr[i]] = [arr[i], arr[start]];
            
            // Recursively generate permutations
            if (generatePermutations(arr, start + 1)) {
                return true; // If sorted permutation is found, exit
            }
            
            // Swap back to restore the original order
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }

        return false; // No sorted permutation found at this level
    }

    // Helper function to check if the array is sorted
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    // Start the permutation generation from index 0
    generatePermutations(a, 0);

    return count;
}
