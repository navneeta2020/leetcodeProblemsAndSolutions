// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let maxLength = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let tempStr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (!tempStr.includes(s[j])) {
                tempStr += s[j];
                if (j === s.length - 1) {
                    maxLength = tempStr.length > maxLength ? tempStr.length : maxLength;
                }
            } else {
                maxLength = tempStr.length > maxLength ? tempStr.length : maxLength;
                break;
            }
        }
    }

    return maxLength;
};

// console.log(lengthOfLongestSubstring("pwwkew")); // 3
// console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("dvdf")); // 3
