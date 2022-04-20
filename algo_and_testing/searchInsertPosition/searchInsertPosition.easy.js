/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */
const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let index = Math.floor((end - start) / 2) + start; // this is the midpoint

  if (target > nums[end - 1]) index = end;
  else {
    while (start < end) {
      let val = nums[index];
      if (val === target) return index;
      else {
        if (target < val) {
          end = index;
        } else if (target > val) {
          start = index + 1;
        }
        index = Math.floor((end - start) / 2) + start;
      }
    }
  }
  return index;
};

module.exports = searchInsert;
