function permutationSort(a) {
    let count = 0;

    function generatePermutations(array, start) {
        if (start === array.length) {
            count++;
            if (isSorted(array)) {
                return true;
            }
            return false;
        }

        for (let i = start; i < array.length; i++) {
            [array[start], array[i]] = [array[i], array[start]];
            
            if (generatePermutations(array, start + 1)) {
                return true;
            }
            
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }

        return false;
    }

    function checkSorted(array) {
        for (let i = 1; i < arr.length; i++) {
            if (array[i] < array[i - 1]) {
                return false;
            }
        }
        return true;
    }

    permute(a, 0);

    return count;
}
