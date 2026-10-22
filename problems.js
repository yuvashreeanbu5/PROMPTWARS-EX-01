(function () {
  "use strict";

  /**
   * Deterministic FNV-1a 32-bit hash for reproducible test case generation.
   * @param {string} str
   * @returns {number}
   */
  function hashSeed(str) {
    let h = 0x811c9dc5;
    const s = String(str || "seed");
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h >>> 0;
  }

  /**
   * 10 Problem Archetypes used to generate 300 distinct, verifiable problems.
   */
  const ARCHETYPES = [
    {
      topic: "Arithmetic & Math",
      titlePrefix: "Linear Scale & Offset",
      desc: "Given an integer n, return (n * K) + M.",
      evalExpected: function (n, k, m) { return (n * k) + m; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return (n * " + k + ") + " + m + ";\n}";
      }
    },
    {
      topic: "Number Theory",
      titlePrefix: "Quadratic Step Value",
      desc: "Given an integer n, return (n * n) + (n * K) + M.",
      evalExpected: function (n, k, m) { return (n * n) + (n * k) + m; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return (n * n) + (n * " + k + ") + " + m + ";\n}";
      }
    },
    {
      topic: "Bitwise & Parity",
      titlePrefix: "Parity Weighted Transform",
      desc: "Given an integer n, if n is even return (n * K) + M, otherwise return (n * M) - K.",
      evalExpected: function (n, k, m) { return (n % 2 === 0) ? (n * k) + m : (n * m) - k; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return (n % 2 === 0) ? (n * " + k + ") + " + m + " : (n * " + m + ") - " + k + ";\n}";
      }
    },
    {
      topic: "Modular Arithmetic",
      titlePrefix: "Bounded Modulo Score",
      desc: "Given an integer n, return ((Math.abs(n) * K) + M) % 97.",
      evalExpected: function (n, k, m) { return ((Math.abs(n) * k) + m) % 97; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return ((Math.abs(n) * " + k + ") + " + m + ") % 97;\n}";
      }
    },
    {
      topic: "Series & Summations",
      titlePrefix: "Triangular Offset Sum",
      desc: "Given a non-negative integer n, return Math.floor((n * (n + 1)) / 2) * K + M.",
      evalExpected: function (n, k, m) { return Math.floor((n * (n + 1)) / 2) * k + m; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return Math.floor((n * (n + 1)) / 2) * " + k + " + " + m + ";\n}";
      }
    },
    {
      topic: "Conditionals & Thresholds",
      titlePrefix: "Clamped Threshold Metric",
      desc: "Given an integer n, return Math.max(M, n * K).",
      evalExpected: function (n, k, m) { return Math.max(m, n * k); },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return Math.max(" + m + ", n * " + k + ");\n}";
      }
    },
    {
      topic: "Digit Manipulation",
      titlePrefix: "Absolute Difference Scale",
      desc: "Given an integer n, return Math.abs((n * K) - (M * 10)).",
      evalExpected: function (n, k, m) { return Math.abs((n * k) - (m * 10)); },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return Math.abs((n * " + k + ") - (" + m + " * 10));\n}";
      }
    },
    {
      topic: "Dynamic Stepping",
      titlePrefix: "Double Step Accumulator",
      desc: "Given an integer n, return ((n + K) * 2) + M.",
      evalExpected: function (n, k, m) { return ((n + k) * 2) + m; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return ((n + " + k + ") * 2) + " + m + ";\n}";
      }
    },
    {
      topic: "Polynomial Evaluation",
      titlePrefix: "Cubic Shift Expression",
      desc: "Given an integer n, return (n * n * K) - n + M.",
      evalExpected: function (n, k, m) { return (n * n * k) - n + m; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return (n * n * " + k + ") - n + " + m + ";\n}";
      }
    },
    {
      topic: "Hash & Checksum",
      titlePrefix: "Checksum Fold Value",
      desc: "Given an integer n, return ((n * K) ^ M) + K.",
      evalExpected: function (n, k, m) { return ((n * k) ^ m) + k; },
      buildJsSolution: function (fnName, k, m) {
        return "function " + fnName + "(n) {\n  return ((n * " + k + ") ^ " + m + ") + " + k + ";\n}";
      }
    }
  ];

  /**
   * Deterministically generates 6 hidden test cases (within 5..8 requirement) for a problem ID.
   * Calling makeTests(problemId) with the same problemId always produces the exact same tests.
   * @param {string} problemId
   * @returns {Array<{input: Array<number>, expected: number}>}
   */
  function makeTests(problemId) {
    const match = String(problemId || "prob_1").match(/(\d+)$/);
    const num = match ? Math.max(1, parseInt(match[1], 10)) : 1;
    const archIdx = (num - 1) % ARCHETYPES.length;
    const arch = ARCHETYPES[archIdx];
    const k = (num % 7) + 2;
    const m = (num % 11) + 3;
    const seed = hashSeed("pwa_test_" + num);

    const tests = [];
    for (let t = 0; t < 6; t++) {
      const inputVal = ((seed + t * 17) % 25) + t;
      const expectedVal = arch.evalExpected(inputVal, k, m);
      tests.push({
        input: [inputVal],
        expected: expectedVal
      });
    }
    return tests;
  }
  window.makeTests = makeTests;

  /**
   * Generates all 300 Code Arena problems (100 Easy, 100 Medium, 100 Hard).
   * @returns {Array<Object>}
   */
  function buildAllProblems() {
    const list = [];
    for (let i = 1; i <= 300; i++) {
      const id = "prob_" + i;
      const difficulty = i <= 100 ? "Easy" : (i <= 200 ? "Medium" : "Hard");
      const points = difficulty === "Easy" ? 10 : (difficulty === "Medium" ? 25 : 50);
      const timerSeconds = difficulty === "Easy" ? 900 : (difficulty === "Medium" ? 1800 : 2700);
      const arch = ARCHETYPES[(i - 1) % ARCHETYPES.length];
      const k = (i % 7) + 2;
      const m = (i % 11) + 3;
      const fnName = "solveProblem" + i;
      const tests = makeTests(id);
      const specDesc = arch.desc.replace("K", String(k)).replace("M", String(m));
      const jsSol = arch.buildJsSolution(fnName, k, m);

      list.push({
        id: id,
        number: i,
        title: arch.titlePrefix + " #" + i,
        difficulty: difficulty,
        points: points,
        topic: arch.topic,
        timerSeconds: timerSeconds,
        fnName: fnName,
        description: specDesc,
        constraints: "0 <= n <= 10^4 • Time Limit: 3000ms",
        example: "Input: n = " + tests[0].input[0] + " -> Output: " + tests[0].expected,
        hints: [
          "Hint 1: Read the formula constants carefully: K = " + k + " and M = " + m + ".",
          "Hint 2: Apply the arithmetic operations in the exact order shown in the description.",
          "Hint 3: Return the computed number directly from " + fnName + "(n)."
        ],
        starters: {
          javascript: "function " + fnName + "(n) {\n  // Write your solution here\n  return 0;\n}",
          java: "class Solution {\n  public static int " + fnName + "(int n) {\n    return 0;\n  }\n}"
        },
        solutions: {
          javascript: jsSol,
          java: jsSol
        },
        tests: tests
      });
    }
    return list;
  }

  window.CODE_PROBLEMS = buildAllProblems();
})();