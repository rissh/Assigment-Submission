# Assigment-Submission


## Algorithm

- Initialize the largest_index variable to -1. This will keep track of the largest index that we can reach in the array list.
- Initialize the new_largest_index variable to -1. This will keep track of the largest index that we can reach in the array list at the current iteration.
- Initialize the count variable to 0. This will keep track of the number of jumps that we need to make.
- If the length of array is 1, return count.
- Iterate over the elements in the array list.
- For each element, calculate the total index that we can reach by adding the element's value and the current index. If this total is greater than - -new_largest_index, set new_largest_index to the total.
- If largest_index is less than or equal to the current index, set largest_index to new_largest_index and increment count by 1.
- If largest_index is greater than or equal to the last index in the array list, return count.
After the loop finishes, return count.


## Complexity

- Time complexity: O(n)
- Space complexity: O(1)


## Author

- [LinkedIn](https://www.linkedin.com/in/rishikesh-jagadale-331812207/)
- [Github](https://github.com/rissh)
