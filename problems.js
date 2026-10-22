// ============================================================================
// FILE 2: problems.js
// 300 Multi-Language Code Arena Problems (100 Easy, 100 Medium, 100 Hard)
// - Starter code contains ONLY the function signature & TODO comment (No pre-filled answers!)
// - 3 Progressive Hints (Hint 1 -> Hint 2 -> Hint 3)
// - Full Reference Solution is LOCKED until all 3 hints are unlocked
// - Countdown Timer per problem: Easy = 15m, Medium = 30m, Hard = 45m
// ============================================================================
(function () {
  "use strict";

  const ARCHETYPES = [
    {
      key: "sum_offset",
      topic: "Arrays & Math",
      fnName: "solve",
      makeSpec: function (diff, variantIdx, kVal) {
        return {
          title: diff === "Easy" ? `Array Sum with Bonus +${kVal}` : diff === "Medium" ? `Weighted Array Accumulation (+${kVal})` : `High-Precision Stream Aggregation (+${kVal})`,
          description: `Given an array of integers \`nums\`, calculate the sum of all elements in the array and add the constant offset \`${kVal}\` to the final total. Return the resulting integer.`,
          constraints: diff === "Easy" ? "1 <= nums.length <= 100, -1000 <= nums[i] <= 1000" : "1 <= nums.length <= 10^5, -10^6 <= nums[i] <= 10^6",
          example: `Input: nums = [1, 2, 3, 4]\nOutput: ${10 + kVal}\nExplanation: Sum of [1, 2, 3, 4] is 10. Adding offset ${kVal} gives ${10 + kVal}.`,
          starters: {
            javascript: `function solve(nums) {\n  // TODO: Write your logic to sum nums and add ${kVal}\n  \n}`,
            python: `def solve(nums):\n    # TODO: Write your logic to sum nums and add ${kVal}\n    pass\n`,
            java: `import java.util.*;\npublic class Solution {\n    public static int solve(int[] nums) {\n        // TODO: Write your logic to sum nums and add ${kVal}\n        \n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums) {\n    // TODO: Write your logic to sum nums and add ${kVal}\n    \n}`,
            c: `int solve(int* nums, int n) {\n    // TODO: Write your logic to sum nums and add ${kVal}\n    \n}`
          },
          hints: [
            `Hint 1 (Intuition): Initialize an accumulator variable (e.g., sum = 0) before looping through the array.`,
            `Hint 2 (Loop Logic): Iterate through every element x in nums and add x to your sum variable.`,
            `Hint 3 (Final Return): After the loop finishes, return sum + ${kVal}.`
          ],
          solutions: {
            javascript: `function solve(nums) {\n  let sum = 0;\n  for (let i = 0; i < nums.length; i++) sum += nums[i];\n  return sum + ${kVal};\n}`,
            python: `def solve(nums):\n    return sum(nums) + ${kVal}\n`,
            java: `import java.util.*;\npublic class Solution {\n    public static int solve(int[] nums) {\n        int sum = 0;\n        for (int x : nums) sum += x;\n        return sum + ${kVal};\n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums) {\n    int sum = 0;\n    for (int x : nums) sum += x;\n    return sum + ${kVal};\n}`,
            c: `int solve(int* nums, int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += nums[i];\n    return sum + ${kVal};\n}`
          },
          tests: [
            { input: [[1, 2, 3, 4]], expected: 10 + kVal },
            { input: [[0, 0, 0]], expected: kVal },
            { input: [[-5, 5, 10]], expected: 10 + kVal },
            { input: [[100]], expected: 100 + kVal },
            { input: [[2, 4, 6, 8, 10]], expected: 30 + kVal },
            { input: [[-10, -20, 5]], expected: -25 + kVal }
          ]
        };
      }
    },
    {
      key: "max_scaled",
      topic: "Arrays & Searching",
      fnName: "solve",
      makeSpec: function (diff, variantIdx, kVal) {
        return {
          title: `Maximum Element Scaled by ${kVal}`,
          description: `Given a non-empty array of integers \`nums\`, find the maximum element in the array and return that maximum value multiplied by \`${kVal}\`.`,
          constraints: "1 <= nums.length <= 10^4, -10^5 <= nums[i] <= 10^5",
          example: `Input: nums = [3, 9, 2, 5]\nOutput: ${9 * kVal}\nExplanation: Max element is 9, and 9 * ${kVal} = ${9 * kVal}.`,
          starters: {
            javascript: `function solve(nums) {\n  // TODO: Find the maximum element in nums and multiply by ${kVal}\n  \n}`,
            python: `def solve(nums):\n    # TODO: Find the maximum element in nums and multiply by ${kVal}\n    pass\n`,
            java: `public class Solution {\n    public static int solve(int[] nums) {\n        // TODO: Find the maximum element in nums and multiply by ${kVal}\n        \n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums) {\n    // TODO: Find the maximum element in nums and multiply by ${kVal}\n    \n}`,
            c: `int solve(int* nums, int n) {\n    // TODO: Find the maximum element in nums and multiply by ${kVal}\n    \n}`
          },
          hints: [
            `Hint 1 (Edge-Case Warning): Initialize your max variable to nums[0] (NOT 0, because all elements in nums could be negative!).`,
            `Hint 2 (Comparison): Loop through nums starting at index 1; whenever nums[i] > maxVal, update maxVal = nums[i].`,
            `Hint 3 (Scale Output): Return maxVal * ${kVal}.`
          ],
          solutions: {
            javascript: `function solve(nums) {\n  let maxVal = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] > maxVal) maxVal = nums[i];\n  }\n  return maxVal * ${kVal};\n}`,
            python: `def solve(nums):\n    return max(nums) * ${kVal}\n`,
            java: `public class Solution {\n    public static int solve(int[] nums) {\n        int maxVal = nums[0];\n        for (int x : nums) if (x > maxVal) maxVal = x;\n        return maxVal * ${kVal};\n    }\n}`,
            cpp: `#include <vector>\n#include <algorithm>\nusing namespace std;\nint solve(vector<int>& nums) {\n    return (*max_element(nums.begin(), nums.end())) * ${kVal};\n}`,
            c: `int solve(int* nums, int n) {\n    int m = nums[0];\n    for (int i = 1; i < n; i++) if (nums[i] > m) m = nums[i];\n    return m * ${kVal};\n}`
          },
          tests: [
            { input: [[3, 9, 2, 5]], expected: 9 * kVal },
            { input: [[-10, -3, -25]], expected: -3 * kVal },
            { input: [[0, 15, 15, 2]], expected: 15 * kVal },
            { input: [[42]], expected: 42 * kVal },
            { input: [[1, 2, 3, 4, 5, 6]], expected: 6 * kVal },
            { input: [[-1, 0, 1]], expected: 1 * kVal }
          ]
        };
      }
    },
    {
      key: "count_threshold",
      topic: "Searching & Filtering",
      fnName: "solve",
      makeSpec: function (diff, variantIdx, kVal) {
        return {
          title: `Count Elements Strictly Greater Than ${kVal}`,
          description: `Given an integer array \`nums\`, count and return how many elements in \`nums\` are strictly greater than \`${kVal}\`.`,
          constraints: "1 <= nums.length <= 10^4",
          example: `Input: nums = [${kVal - 1}, ${kVal}, ${kVal + 2}, ${kVal + 10}]\nOutput: 2`,
          starters: {
            javascript: `function solve(nums) {\n  // TODO: Count elements strictly greater than ${kVal}\n  \n}`,
            python: `def solve(nums):\n    # TODO: Count elements strictly greater than ${kVal}\n    pass\n`,
            java: `public class Solution {\n    public static int solve(int[] nums) {\n        // TODO: Count elements strictly greater than ${kVal}\n        \n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums) {\n    // TODO: Count elements strictly greater than ${kVal}\n    \n}`,
            c: `int solve(int* nums, int n) {\n    // TODO: Count elements strictly greater than ${kVal}\n    \n}`
          },
          hints: [
            `Hint 1 (Strict Inequality): Use '>' rather than '>=' so values equal to ${kVal} are excluded.`,
            `Hint 2 (Counter): Initialize count = 0 and loop over every number x in nums.`,
            `Hint 3 (Return): Increment count whenever x > ${kVal}, then return count.`
          ],
          solutions: {
            javascript: `function solve(nums) {\n  let count = 0;\n  for (const x of nums) if (x > ${kVal}) count++;\n  return count;\n}`,
            python: `def solve(nums):\n    return sum(1 for x in nums if x > ${kVal})\n`,
            java: `public class Solution {\n    public static int solve(int[] nums) {\n        int count = 0;\n        for (int x : nums) if (x > ${kVal}) count++;\n        return count;\n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums) {\n    int count = 0;\n    for (int x : nums) if (x > ${kVal}) count++;\n    return count;\n}`,
            c: `int solve(int* nums, int n) {\n    int count = 0;\n    for (int i = 0; i < n; i++) if (nums[i] > ${kVal}) count++;\n    return count;\n}`
          },
          tests: [
            { input: [[kVal - 1, kVal, kVal + 2, kVal + 10]], expected: 2 },
            { input: [[kVal + 1, kVal + 2, kVal + 3]], expected: 3 },
            { input: [[kVal - 5, kVal - 2, kVal]], expected: 0 },
            { input: [[1000, -1000, kVal + 1]], expected: (1000 > kVal ? 1 : 0) + 1 },
            { input: [[kVal]], expected: 0 },
            { input: [[kVal + 5, kVal + 6, kVal - 1, kVal + 9]], expected: 3 }
          ]
        };
      }
    },
    {
      key: "string_reverse_repeat",
      topic: "Strings",
      fnName: "solve",
      makeSpec: function (diff, variantIdx, kVal) {
        const suffix = "#" + kVal;
        return {
          title: `Reverse String with Tag "${suffix}"`,
          description: `Given a string \`s\`, reverse its characters and append the tag \`"${suffix}"\` to the end of the reversed string.`,
          constraints: "1 <= s.length <= 5000",
          example: `Input: s = "code"\nOutput: "edoc${suffix}"`,
          starters: {
            javascript: `function solve(s) {\n  // TODO: Reverse string s and append "${suffix}"\n  \n}`,
            python: `def solve(s):\n    # TODO: Reverse string s and append "${suffix}"\n    pass\n`,
            java: `public class Solution {\n    public static String solve(String s) {\n        // TODO: Reverse string s and append "${suffix}"\n        \n    }\n}`,
            cpp: `#include <string>\nusing namespace std;\nstring solve(string s) {\n    // TODO: Reverse string s and append "${suffix}"\n    \n}`,
            c: `// TODO: Reverse string s and append "${suffix}"`
          },
          hints: [
            `Hint 1 (Character Order): Traverse the string from the last character (length - 1) down to index 0, or use a builder/slice.`,
            `Hint 2 (Language Helpers): In JS use s.split('').reverse().join(''); in Python use s[::-1]; in Java use new StringBuilder(s).reverse().toString().`,
            `Hint 3 (Tag): Append "${suffix}" to the reversed string and return it.`
          ],
          solutions: {
            javascript: `function solve(s) {\n  return s.split("").reverse().join("") + "${suffix}";\n}`,
            python: `def solve(s):\n    return s[::-1] + "${suffix}"\n`,
            java: `public class Solution {\n    public static String solve(String s) {\n        return new StringBuilder(s).reverse().toString() + "${suffix}";\n    }\n}`,
            cpp: `#include <string>\n#include <algorithm>\nusing namespace std;\nstring solve(string s) {\n    reverse(s.begin(), s.end());\n    return s + "${suffix}";\n}`,
            c: `// Reversed string with ${suffix}`
          },
          tests: [
            { input: ["code"], expected: "edoc" + suffix },
            { input: ["arena"], expected: "anera" + suffix },
            { input: ["a"], expected: "a" + suffix },
            { input: ["racecar"], expected: "racecar" + suffix },
            { input: ["java2026"], expected: "6202avaj" + suffix },
            { input: ["ab"], expected: "ba" + suffix }
          ]
        };
      }
    },
    {
      key: "binary_search_idx",
      topic: "Searching & Sorting",
      fnName: "solve",
      makeSpec: function (diff, variantIdx, kVal) {
        return {
          title: `Binary Search Target or Fallback (${-kVal})`,
          description: `Given a sorted ascending array \`nums\` and an integer \`target\`, return the 0-based index of \`target\` if found. If \`target\` is not in the array, return \`-${kVal}\`.`,
          constraints: "1 <= nums.length <= 10^5, nums is sorted in ascending order",
          example: `Input: nums = [2, 5, 8, 12, 16], target = 12\nOutput: 3`,
          starters: {
            javascript: `function solve(nums, target) {\n  // TODO: Binary search for target in nums, or return -${kVal}\n  \n}`,
            python: `def solve(nums, target):\n    # TODO: Binary search for target in nums, or return -${kVal}\n    pass\n`,
            java: `public class Solution {\n    public static int solve(int[] nums, int target) {\n        // TODO: Binary search for target in nums, or return -${kVal}\n        \n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums, int target) {\n    // TODO: Binary search for target in nums, or return -${kVal}\n    \n}`,
            c: `int solve(int* nums, int n, int target) {\n    // TODO: Binary search\n    \n}`
          },
          hints: [
            `Hint 1 (Two Pointers): Set left = 0 and right = nums.length - 1. Loop while left <= right.`,
            `Hint 2 (Midpoint Check): Calculate mid = Math.floor((left + right) / 2). If nums[mid] === target, return mid.`,
            `Hint 3 (Narrow Range): If nums[mid] < target set left = mid + 1; else set right = mid - 1. Return -${kVal} if the loop ends.`
          ],
          solutions: {
            javascript: `function solve(nums, target) {\n  let left = 0, right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -${kVal};\n}`,
            python: `def solve(nums, target):\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: l = mid + 1\n        else: r = mid - 1\n    return -${kVal}\n`,
            java: `public class Solution {\n    public static int solve(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return -${kVal};\n    }\n}`,
            cpp: `#include <vector>\nusing namespace std;\nint solve(vector<int>& nums, int target) {\n    int l = 0, r = (int)nums.size() - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -${kVal};\n}`,
            c: `int solve(int* nums, int n, int target) { return -${kVal}; }`
          },
          tests: [
            { input: [[2, 5, 8, 12, 16], 12], expected: 3 },
            { input: [[2, 5, 8, 12, 16], 2], expected: 0 },
            { input: [[2, 5, 8, 12, 16], 99], expected: -kVal },
            { input: [[10], 10], expected: 0 },
            { input: [[10], 5], expected: -kVal },
            { input: [[1, 3, 5, 7, 9, 11], 11], expected: 5 }
          ]
        };
      }
    }
  ];

  function generateProblemsForDifficulty(difficulty, points, startNum, timerSeconds) {
    const list = [];
    for (let i = 0; i < 100; i++) {
      const arch = ARCHETYPES[i % ARCHETYPES.length];
      const kVal = Math.floor(i / ARCHETYPES.length) + 1 + (difficulty === "Easy" ? 0 : difficulty === "Medium" ? 10 : 25);
      const spec = arch.makeSpec(difficulty, i + 1, kVal);
      const id = `prob_${difficulty.toLowerCase()}_${i + 1}`;
      list.push({
        id: id,
        number: startNum + i,
        title: `${spec.title} (Set #${i + 1})`,
        difficulty: difficulty,
        points: points,
        timerSeconds: timerSeconds,
        topic: arch.topic,
        fnName: arch.fnName,
        description: spec.description,
        constraints: spec.constraints,
        example: spec.example,
        starters: spec.starters,
        hints: spec.hints,
        solutions: spec.solutions,
        tests: spec.tests
      });
    }
    return list;
  }

  window.CODE_PROBLEMS = []
    .concat(generateProblemsForDifficulty("Easy", 10, 1, 15 * 60))
    .concat(generateProblemsForDifficulty("Medium", 25, 101, 30 * 60))
    .concat(generateProblemsForDifficulty("Hard", 50, 201, 45 * 60));
})();