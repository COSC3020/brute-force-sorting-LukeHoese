function permutationSort(a) {
    let count = 0;

    function permute(array, start) {
        if (start === array.length) {
            count++;
            if (checkSorted(array)) {
                return true;
            }
            return false;
        }

        for (let i = start; i < array.length; i++) {
            [array[start], array[i]] = [array[i], array[start]];
            
            if (permute(array, start + 1)) {
                return true;
            }
            
            [array[start], array[i]] = [array[i], array[start]];
        }

        return false;
    }

    function checkSorted(array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                return false;
            }
        }
        return true;
    }

    permute(a, 0);

    return count;
}
