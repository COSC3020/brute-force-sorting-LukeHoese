function permutationSort(a) {
    var count = 0;

    if (a.length == 0 || a.length == 1) {
        return count;
    }

    // function to check if array is sorted
    function sortCheck(array) {
        for (let i = 1; i < array.length; i++) {
            // if at any point two adjacent elements are not in the correct order, array is not sorted
            if (array[i] < array[i - 1]) {
                return false
            }
        }
        return true
    }

    function permute(n) {
        if (sortCheck(a)) {
            return;
        }

        for (let i = 0; i < n - 1; i++) {
            permute(n - 1);

            if (n % 2 == 0) {
                [a[i], a[n - 1]] = [a[n - 1], a[i]];
            }
            else {
                [a[0], a[n - 1]] = [a[n - 1], a[0]];
            }

            count++;
        }

        permute(n - 1);
    }

    permute(a.length)
    return count;
}
