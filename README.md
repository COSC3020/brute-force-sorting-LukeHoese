# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

The runtime complexity of the algorithm would be O(n!(n)). This is because n! is the number of permutations that can be created from a set of size n, thus that many permutations would theoretically be needed, and the extra n comes from the sort checking algorithm which needs to iterate over each element for every permutation. Best case input for my algorithm would be a sorted list, as it would be sent to sort check before any permutations are made, resulting in a run time of O(n). Worst case input would be an input which would only result in the sorted array at the very last permutation. For my permutation algorithm this would be a reverse sorted list. The complexity can change drastically if you generate random permutations without memory of whats been checked. This means that every permutation has a 1/n! chance of being the sorted algorithm, but worst case time complexity would go to infinity because there is no guarantee that the algorithm will check every permutation if its entirely random without memory.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.
