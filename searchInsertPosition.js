// 35. Search Insert Position

// Share
// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// - 104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// - 104 <= target <= 104

var searchInsert = function (nums, target) {
    if (target <= nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let middle = parseInt((low + high) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (target > nums[middle] && target < nums[middle + 1]) {
            return middle + 1;
        } else if (target < nums[middle] && target > nums[middle - 1]) {
            return middle;
        } else if (target > nums[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }



};

console.log(searchInsert([1, 3, 5, 6], 5)); // => 2
console.log(searchInsert([1, 3, 5, 6], 2)); // => 1
console.log(searchInsert([1, 3, 5, 6], 7)); // => 4
