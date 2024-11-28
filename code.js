function permutationSort(a) {
    var count = 0;

    // Function to check if the array is sorted
    function sortCheck(array) {
        for (let i = 1; i < array.length; i++) {
            // If two adjacent elements are out of order, it's not sorted
            if (array[i] < array[i - 1]) {
                return false;
            }
        }
        return true;
    }

    // Heap's algorithm to generate permutations
    function permute(n) {
        // Base case: if we've generated a full permutation
        if (n === 1) {
            count++; // Increment permutation count
            if (sortCheck(a)) {
                return true; // If sorted, stop the recursion
            }
            return false; // Otherwise, keep trying
        }

        // Generate permutations recursively
        let foundSorted = false;
        for (let i = 0; i < n - 1; i++) {
            foundSorted = permute(n - 1); // Recurse with the remaining elements

            // Swap based on Heap's algorithm
            if (n % 2 === 0) {
                [a[i], a[n - 1]] = [a[n - 1], a[i]]; // Swap i and n-1 for even n
            } else {
                [a[0], a[n - 1]] = [a[n - 1], a[0]]; // Swap 0 and n-1 for odd n
            }

            // If sorted permutation found, stop further recursion
            if (foundSorted) return true;
        }

        // Handle the last permutation after the loop
        return permute(n - 1);
    }

    // Start generating permutations from the whole array
    permute(a.length);

    // Return the count of permutations tried before sorting
    return count;
}

// Example usage:
const arr = [1, 0, 2];
console.log(permutationSort(arr)); // Output: number of permutations tried before sorted
console.log(arr); // The sorted array [0, 1, 2]

