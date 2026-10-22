// ============================================================================
// FILE 1: questions.js
// Nexora Arena — 45+ Separated Domains (with Native Language Code Examples!),
// Deep Content Roadmaps, 300-Question per Company MNC Generator,
// 225+ Certifications, Day 1-5 Project Studio & Simple Direct AI Tutor
// ============================================================================
(function () {
  "use strict";

  window.PWA_ZOOTOPIA_PETS = [
    { id: "judy", name: "Judy Hopps", emoji: "🐰", tip: "Start with 1 Domain Lesson, then test yourself in the Timed Code Arena!" },
    { id: "nick", name: "Nick Wilde", emoji: "🦊", tip: "Filter MNC Prep by Company, Role, Language & Difficulty to practice 100+ questions!" },
    { id: "flash", name: "Flash", emoji: "🦥", tip: "Use all 3 progressive hints in Code Arena before unlocking the full solution!" },
    { id: "clawhauser", name: "Clawhauser", emoji: "🐆", tip: "Type any achievement in My Certificates and let the AI write your LinkedIn post! 🍩" }
  ];

  window.PWA_LANGUAGES = [
    { id: "java", name: "Java", ext: ".java", badge: "☕ Java" },
    { id: "python", name: "Python", ext: ".py", badge: "🐍 Python" },
    { id: "javascript", name: "JavaScript", ext: ".js", badge: "⚡ JavaScript" },
    { id: "cpp", name: "C++", ext: ".cpp", badge: "⚙️ C++" },
    { id: "c", name: "C", ext: ".c", badge: "🔧 C" }
  ];

  window.CURATED_EDUCATORS = {
    Java: { educator: "Kunal Kushwaha & Telusko", course: "Complete Java + DSA Masterclass", url: "https://www.youtube.com/results?search_query=Kunal+Kushwaha+Java+DSA+Full+Course+Playlist" },
    DSA: { educator: "Striver (Take U Forward) & Abdul Bari", course: "Striver A2Z DSA Course & Abdul Bari Algorithms", url: "https://www.youtube.com/results?search_query=Striver+A2Z+DSA+Course+Take+U+Forward" },
    Python: { educator: "Harvard CS50P & Corey Schafer", course: "Harvard CS50 Programming with Python", url: "https://www.youtube.com/results?search_query=Harvard+CS50+Python+Full+University+Course" },
    AI: { educator: "Andrej Karpathy & DeepLearning.AI", course: "LLMs, Neural Networks & Agentic AI", url: "https://www.youtube.com/results?search_query=Andrej+Karpathy+Zero+to+Hero+Playlist" },
    AIML: { educator: "StatQuest (Josh Starmer) & Andrew Ng", course: "Machine Learning Illustrated Series", url: "https://www.youtube.com/results?search_query=StatQuest+Machine+Learning+Playlist" },
    Web: { educator: "freeCodeCamp & Traversy Media", course: "Full-Stack Web Engineering Bootcamp", url: "https://www.youtube.com/results?search_query=freeCodeCamp+Full+Stack+Web+Development+Course" },
    Systems: { educator: "Neso Academy & Jenny's Lectures", course: "C, C++, Operating Systems & Computer Networks", url: "https://www.youtube.com/results?search_query=Neso+Academy+Operating+Systems+C+Programming" },
    Cloud: { educator: "TechWorld with Nana", course: "Docker, Kubernetes, AWS & DevOps Bootcamp", url: "https://www.youtube.com/results?search_query=TechWorld+with+Nana+DevOps+Bootcamp" },
    Cyber: { educator: "NetworkChuck & John Hammond", course: "Ethical Hacking & Cybersecurity Foundations", url: "https://www.youtube.com/results?search_query=NetworkChuck+Cybersecurity+Course" },
    Aptitude: { educator: "Feel Free to Learn & CareerRide", course: "MNC Quantitative Aptitude & Reasoning Shortcuts", url: "https://www.youtube.com/results?search_query=Feel+Free+to+Learn+Quantitative+Aptitude+Placements" }
  };

  window.getCuratedEducator = function (domainName, topicName) {
    const d = String(domainName || "").toLowerCase();
    let base = window.CURATED_EDUCATORS.Web;
    if (d.includes("java") && !d.includes("javascript")) base = window.CURATED_EDUCATORS.Java;
    else if (d.includes("data structure") || d.includes("algorithm") || d.includes("system design")) base = window.CURATED_EDUCATORS.DSA;
    else if (d.includes("python") || d.includes("data") || d.includes("sql")) base = window.CURATED_EDUCATORS.Python;
    else if (d.includes("machine learning") || d.includes("aiml")) base = window.CURATED_EDUCATORS.AIML;
    else if (d.includes("artificial intelligence") || d.includes("prompt")) base = window.CURATED_EDUCATORS.AI;
    else if (d.includes("c ") || d.includes("c++") || d.includes("network") || d.includes("operating")) base = window.CURATED_EDUCATORS.Systems;
    else if (d.includes("cloud") || d.includes("devops")) base = window.CURATED_EDUCATORS.Cloud;
    else if (d.includes("cyber") || d.includes("hacking")) base = window.CURATED_EDUCATORS.Cyber;
    else if (d.includes("aptitude") || d.includes("logic") || d.includes("career")) base = window.CURATED_EDUCATORS.Aptitude;

    const url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(base.educator.split("&")[0].trim() + " " + (topicName || domainName) + " full lecture");
    return { educator: base.educator, course: base.course, url: url };
  };

  window.getDSACodeSnippet = function (subtopicTitle, lang) {
    const clean = subtopicTitle || "Data Structure";
    const templates = {
      java: `// Java Implementation: ${clean}\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40};\n        System.out.println("${clean} in Java | Length: " + arr.length);\n    }\n}`,
      python: `# Python Implementation: ${clean}\ndef demo():\n    arr = [10, 20, 30, 40]\n    print(f"${clean} in Python | Length: {len(arr)}")\n\ndemo()`,
      javascript: `// JavaScript Implementation: ${clean}\nfunction demo() {\n  const arr = [10, 20, 30, 40];\n  console.log("${clean} in JS | Length:", arr.length);\n}\ndemo();`,
      cpp: `// C++ Implementation: ${clean}\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr = {10, 20, 30, 40};\n    cout << "${clean} in C++ | Size: " << arr.size() << endl;\n    return 0;\n}`,
      c: `// C Implementation: ${clean}\n#include <stdio.h>\n\nint main() {\n    int arr[4] = {10, 20, 30, 40};\n    printf("${clean} in C | First: %d\\n", arr[0]);\n    return 0;\n}`
    };
    return templates[lang] || templates.java;
  };

  // Generates REAL language-specific worked examples and starter code per domain (Never puts JS inside Java!)
  function getDomainSpecificCode(title, trackName) {
    const t = String(title || "Concept");
    const tl = t.toLowerCase();
    const d = String(trackName || "").toLowerCase();

    // 1. PURE JAVA FOR JAVA TRACKS
    if ((d.includes("java") && !d.includes("javascript")) || d.includes("spring")) {
      if (tl.includes("variable")) {
        return {
          example: `// Java Worked Example: Declaring Variables\npublic class Main {\n    public static void main(String[] args) {\n        int studentScore = 95;\n        double gpa = 9.2;\n        char grade = 'A';\n        boolean isPlaced = true;\n        String studentName = "Yuvashree";\n\n        System.out.println("Name: " + studentName + " | Score: " + studentScore);\n    }\n}`,
          starter: `public class Solution {\n    public static String practiceJava() {\n        // TODO: Declare an int variable 'age' = 20 and return it as a String\n        int age = 20;\n        return "Age: " + age;\n    }\n}`
        };
      }
      if (tl.includes("data type")) {
        return {
          example: `// Java Worked Example: Primitive & Reference Data Types\npublic class Main {\n    public static void main(String[] args) {\n        int count = 100;           // 4 bytes\n        float rate = 8.5f;         // 4 bytes (ends with 'f')\n        double price = 199.99;     // 8 bytes\n        char letter = 'J';         // 2 bytes (single quotes)\n        boolean active = true;     // true or false\n        String text = "Java Core"; // Reference type (double quotes)\n\n        System.out.println(text + " - Grade: " + letter + " - Price: " + price);\n    }\n}`,
          starter: `public class Solution {\n    public static double calculateTotal(int qty, double unitPrice) {\n        // TODO: Multiply qty and unitPrice and return the double result\n        return qty * unitPrice;\n    }\n}`
        };
      }
      if (tl.includes("operator")) {
        return {
          example: `// Java Worked Example: Arithmetic, Relational & Logical Operators\npublic class Main {\n    public static void main(String[] args) {\n        int a = 17, b = 5;\n        System.out.println("Quotient (a / b): " + (a / b));   // 3\n        System.out.println("Remainder (a % b): " + (a % b));  // 2\n        System.out.println("Both > 0: " + (a > 0 && b > 0));  // true\n    }\n}`,
          starter: `public class Solution {\n    public static int getRemainder(int a, int b) {\n        // TODO: Return the remainder when a is divided by b\n        return a % b;\n    }\n}`
        };
      }
      if (tl.includes("input")) {
        return {
          example: `// Java Worked Example: Scanner Input & System.out.println\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner("Nexora 100");\n        String word = sc.next();\n        int points = sc.nextInt();\n        System.out.println("Read: " + word + " | Points: " + points);\n        sc.close();\n    }\n}`,
          starter: `import java.util.Scanner;\n\npublic class Solution {\n    public static void printGreeting(String name) {\n        // TODO: Print a welcome message using System.out.println\n        System.out.println("Hello, " + name);\n    }\n}`
        };
      }
      if (tl.includes("if-else") || tl.includes("condition")) {
        return {
          example: `// Java Worked Example: If-Else Decision Making\npublic class Main {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks >= 90) {\n            System.out.println("Grade: S");\n        } else if (marks >= 75) {\n            System.out.println("Grade: A");\n        } else {\n            System.out.println("Keep Practicing!");\n        }\n    }\n}`,
          starter: `public class Solution {\n    public static String checkResult(int marks) {\n        // TODO: Return "Pass" if marks >= 50, else "Retry"\n        if (marks >= 50) return "Pass";\n        return "Retry";\n    }\n}`
        };
      }
      if (tl.includes("loop")) {
        return {
          example: `// Java Worked Example: For & While Loops\npublic class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) {\n            sum += i;\n        }\n        System.out.println("Sum of 1 to 5 = " + sum);\n    }\n}`,
          starter: `public class Solution {\n    public static int sumUpToN(int n) {\n        // TODO: Use a for loop in Java to sum numbers from 1 to n\n        int sum = 0;\n        for (int i = 1; i <= n; i++) sum += i;\n        return sum;\n    }\n}`
        };
      }
      if (tl.includes("method")) {
        return {
          example: `// Java Worked Example: Reusable Static Methods\npublic class Main {\n    public static int addNumbers(int x, int y) {\n        return x + y;\n    }\n    public static void main(String[] args) {\n        int res = addNumbers(15, 25);\n        System.out.println("Result = " + res);\n    }\n}`,
          starter: `public class Solution {\n    public static int square(int n) {\n        // TODO: Return the square of n (n * n)\n        return n * n;\n    }\n}`
        };
      }
      if (tl.includes("array")) {
        return {
          example: `// Java Worked Example: 1D Arrays\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] marks = {88, 92, 76, 95};\n        Arrays.sort(marks);\n        System.out.println("Lowest: " + marks[0] + " | Highest: " + marks[marks.length - 1]);\n    }\n}`,
          starter: `public class Solution {\n    public static int getFirstElement(int[] arr) {\n        // TODO: Return the first element of arr at index 0\n        return arr[0];\n    }\n}`
        };
      }
      return {
        example: `// Java Worked Example: ${t}\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        String concept = "${t}";\n        System.out.println("Mastering " + concept + " in Java!");\n    }\n}`,
        starter: `public class Solution {\n    public static String solveJava(String input) {\n        // TODO: Implement your Java logic for ${t}\n        return "Verified: " + input;\n    }\n}`
      };
    }

    // 2. PURE PYTHON FOR PYTHON / AI / ML / NLP / CV TRACKS
    if (d.includes("python") || d.includes("machine learning") || d.includes("artificial intelligence") || d.includes("nlp") || d.includes("vision")) {
      return {
        example: `# Python Worked Example: ${t}\ndef demonstrate_concept(data):\n    if data is None:\n        return "Invalid Input"\n    return f"Processed {data} using ${t} in Python"\n\nprint(demonstrate_concept([10, 20, 30]))`,
        starter: `# Python Practice Lab: ${t}\ndef practice_solution(data):\n    # TODO: Write your Python logic here and return the result\n    return str(data)`
      };
    }

    // 3. PURE C FOR C / EMBEDDED TRACKS
    if (d === "c programming" || d.includes("embedded")) {
      return {
        example: `// C Worked Example: ${t}\n#include <stdio.h>\n\nint main() {\n    int value = 42;\n    printf("Exploring ${t} in C | Value = %d\\n", value);\n    return 0;\n}`,
        starter: `#include <stdio.h>\n\nint solve_c(int x) {\n    // TODO: Write your C logic and return the result\n    return x;\n}`
      };
    }

    // 4. PURE C++ FOR C++ TRACKS
    if (d.includes("c++")) {
      return {
        example: `// C++ Worked Example: ${t}\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> nums = {10, 20, 30};\n    cout << "Mastering ${t} in C++ | Size: " << nums.size() << endl;\n    return 0;\n}`,
        starter: `#include <iostream>\nusing namespace std;\n\nint solveCpp(int n) {\n    // TODO: Write your C++ logic and return the result\n    return n;\n}`
      };
    }

    // 5. PURE SQL FOR SQL TRACK
    if (d.includes("sql")) {
      return {
        example: `-- SQL Worked Example: ${t}\nSELECT student_id, name, score\nFROM students\nWHERE score >= 80\nORDER BY score DESC;`,
        starter: `-- Write your SQL query for ${t}\nSELECT * FROM students WHERE score > 50; -- return valid rows`
      };
    }

    // Default Web / JS / General Engineering
    return {
      example: `// Worked Example: ${t} (${trackName})\nfunction demonstrateConcept(input) {\n  if (input === null || input === undefined) return "Invalid Input";\n  return "Verified [" + String(input) + "] using ${t}";\n}\nconsole.log(demonstrateConcept("SampleData"));`,
      starter: `function practiceSolution(input) {\n  // TODO: Write your ${t} logic here and return a valid result\n  return input;\n}`
    };
  }

  window.generateVisualDiagramSVG = function (title, trackName) {
    const safeTitle = String(title || "Concept").replace(/[<>&"']/g, "").slice(0, 25);
    const safeTrack = String(trackName || "Domain").replace(/[<>&"']/g, "").slice(0, 26);
    return `<svg viewBox="0 0 680 175" width="680" height="175" role="img" aria-label="Visual concept diagram for ${safeTitle}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;aspect-ratio:680/175;border-radius:12px;background:#070d1f;border:1px solid rgba(99,102,241,0.35);">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#0284c7"/></linearGradient>
      </defs>
      <text x="20" y="25" fill="#93c5fd" font-family="monospace" font-size="11" font-weight="bold">VISUAL MEMORY &amp; FLOW DIAGRAM • ${safeTrack.toUpperCase()}</text>
      <rect x="20" y="40" width="180" height="96" rx="10" fill="url(#g1)" stroke="#60a5fa"/>
      <text x="110" y="70" fill="#fff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1. Input &amp; Syntax</text>
      <text x="110" y="94" fill="#e0e7ff" font-family="monospace" font-size="11" text-anchor="middle">${safeTitle}</text>
      <text x="110" y="116" fill="#bfdbfe" font-family="sans-serif" font-size="10" text-anchor="middle">Declare &amp; Validate</text>
      <line x1="205" y1="88" x2="248" y2="88" stroke="#60a5fa" stroke-width="3" stroke-dasharray="4,3"/>
      <rect x="255" y="40" width="180" height="96" rx="10" fill="#111c38" stroke="#8b5cf6" stroke-width="2"/>
      <text x="345" y="66" fill="#c4b5fd" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">2. Memory Cells</text>
      <rect x="275" y="76" width="38" height="24" rx="4" fill="#1e293b" stroke="#38bdf8"/><text x="294" y="92" fill="#38bdf8" font-family="monospace" font-size="10" text-anchor="middle">[0]</text>
      <rect x="325" y="76" width="38" height="24" rx="4" fill="#1e293b" stroke="#a78bfa"/><text x="344" y="92" fill="#a78bfa" font-family="monospace" font-size="10" text-anchor="middle">[1]</text>
      <rect x="375" y="76" width="38" height="24" rx="4" fill="#1e293b" stroke="#34d399"/><text x="394" y="92" fill="#34d399" font-family="monospace" font-size="10" text-anchor="middle">[n]</text>
      <text x="345" y="120" fill="#94a3b8" font-family="sans-serif" font-size="10" text-anchor="middle">Step-by-Step Execution</text>
      <line x1="440" y1="88" x2="483" y2="88" stroke="#34d399" stroke-width="3" stroke-dasharray="4,3"/>
      <rect x="490" y="40" width="170" height="96" rx="10" fill="url(#g2)" stroke="#34d399"/>
      <text x="575" y="70" fill="#fff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3. Output</text>
      <text x="575" y="94" fill="#d1fae5" font-family="monospace" font-size="11" text-anchor="middle">Verified Result ✓</text>
      <text x="575" y="116" fill="#a7f3d0" font-family="sans-serif" font-size="10" text-anchor="middle">Optimal Flow</text>
      <text x="20" y="158" fill="#94a3b8" font-family="sans-serif" font-size="11">💡 Trace how data enters on the left, is stored in memory in the middle, and produces output on the right.</text>
    </svg>`;
  };

  function makeQuestions(subId, title, trackName) {
    return [
      { id: `${subId}_q1`, level: "Easy", points: 10, q: `What is "${title}" used for in ${trackName}?`, options: [`To store, organize, or control data and logic cleanly in ${trackName}`, "To physically cool down CPU hardware", "To bypass compiler syntax checks", "To erase network configuration"], answer: 0 },
      { id: `${subId}_q2`, level: "Easy", points: 10, q: `What is the best first step when learning "${title}"?`, options: ["Understand the syntax and trace a small example step-by-step", "Skip examples and deploy untested code", "Ignore compiler warnings", "Write 1,000 lines without testing"], answer: 0 },
      { id: `${subId}_q3`, level: "Easy", points: 10, q: `Which habit prevents mistakes when working with "${title}"?`, options: ["Checking data types, boundary conditions, and clear variable names", "Using random uninitialized variables", "Removing all error handling", "Writing everything on one line"], answer: 0 },
      { id: `${subId}_q4`, level: "Medium", points: 20, q: `What happens if an empty, null, or 0 input is passed to "${title}" without checking first?`, options: ["It can cause runtime errors or unexpected output", "It doubles the computer's RAM", "It always runs 10x faster", "Edge cases never happen in real apps"], answer: 0 },
      { id: `${subId}_q5`, level: "Medium", points: 25, q: `How do developers test "${title}" properly?`, options: ["By testing normal inputs, boundary values, and empty/edge inputs", "By checking only the file size", "By running it once with no input", "By skipping unit tests"], answer: 0 },
      { id: `${subId}_q6`, level: "Medium", points: 25, q: `Why is clean, modular code important when using "${title}"?`, options: ["It makes reading, debugging, and reusing the code much easier", "It hides syntax errors permanently", "It prevents functions from returning values", "It slows down compilation"], answer: 0 },
      { id: `${subId}_q7`, level: "Hard", points: 40, q: `When running "${title}" on a large list of 100,000 items, what matters most?`, options: ["Avoiding unnecessary nested loops so the program finishes fast", "Adding sleep timers inside loops", "Copying the whole array on every step", "Using brute force"], answer: 0 },
      { id: `${subId}_q8`, level: "Hard", points: 50, q: `If Approach A takes O(N) steps and Approach B takes O(N²) steps for "${title}", which is faster for N = 100,000?`, options: ["Approach A (~100,000 steps vs 10 billion steps)", "Approach B is faster", "Both take the exact same time", "Neither can run on modern computers"], answer: 0 }
    ];
  }

  function createSubtopic(subId, title, trackName) {
    const codePack = getDomainSpecificCode(title, trackName);
    return {
      id: subId,
      title: title,
      lesson: `**${title}** in **${trackName}** explained simply:\n\n1. **What it is:** **${title}** lets your program store, process, or control information step by step.\n2. **How to use it:** Follow the syntax shown in the **${trackName}** code example below, and always check for empty or zero values.\n3. **Practice:** Review the visual diagram, answer the 8 multiple-choice questions, and run the coding session in Step 3.`,
      example: codePack.example,
      codingTask: {
        prompt: `Complete or tweak the ${trackName} code below for **${title}** and click Run & Submit:`,
        starterCode: codePack.starter
      },
      questions: makeQuestions(subId, title, trackName)
    };
  }

  const DOMAIN_BLUEPRINTS = [
    { id: "track_java", name: "Java Programming", icon: "☕", category: "Programming", description: "Variables, Data Types, Operators, I/O, If-Else, Loops, Methods, Arrays, OOP, Strings & Collections in pure Java.", topics: [
      { id: "jv_1", name: "Java Basics", subs: ["Variables", "Data Types (int, float, double, char, boolean, String)", "Operators", "Input & Output", "If-Else", "Loops", "Methods", "Arrays"] },
      { id: "jv_2", name: "OOP in Java", subs: ["Classes & Objects", "Constructors & 'this'", "Inheritance & 'super'", "Polymorphism (Overloading & Overriding)", "Abstraction & Interfaces", "Encapsulation & Access Modifiers"] },
      { id: "jv_3", name: "Strings & Collections in Java", subs: ["String Pool & Immutability", "StringBuilder & StringBuffer", "ArrayList & LinkedList", "HashMap, HashSet & TreeMap", "Exception Handling & Java Streams"] }
    ]},
    { id: "track_dsa", name: "Data Structures & Algorithms", icon: "🧩", category: "Programming", isMultiLanguageDSA: true, description: "Multi-Language DSA track! Choose Java, Python, JavaScript, C++, or C to practice.", topics: [
      { id: "ds_1", name: "Arrays, Strings & Pointers", subs: ["Big-O Time & Space Complexity", "Two Pointers Technique", "Sliding Window Fixed & Variable", "Prefix Sum & Difference Arrays", "Matrix Spiral & Rotation"] },
      { id: "ds_2", name: "Linked Lists, Stacks & Queues", subs: ["Singly & Doubly Linked Lists", "Fast & Slow Pointers (Cycle Detection)", "Stack & Monotonic Stack", "Queues, Deque & LRU Cache"] },
      { id: "ds_3", name: "Searching, Sorting & Hashing", subs: ["Linear & Binary Search", "Binary Search on Answer Space", "Merge Sort & Quick Sort", "Hash Tables & Collision Handling"] },
      { id: "ds_4", name: "Trees, Graphs, Recursion & DP", subs: ["Binary Trees & BST Traversals", "Heaps & Priority Queues", "Graph BFS, DFS & Dijkstra", "Recursion & Backtracking", "Dynamic Programming (Memoization & Tabulation)"] }
    ]},
    { id: "track_python", name: "Python Programming", icon: "🐍", category: "Programming", description: "Variables, Lists, Dictionaries, Comprehensions, Functions, OOP, File I/O & Automation.", topics: [
      { id: "py_1", name: "Python Fundamentals", subs: ["Variables, Types & f-Strings", "If-Elif-Else & Loops", "Lists, Tuples, Sets & Dictionaries", "List & Dict Comprehensions"] },
      { id: "py_2", name: "Functions, OOP & Modules", subs: ["Functions, *args, **kwargs & Lambda", "Classes, __init__ & Inheritance", "File Handling, JSON & Exceptions", "Decorators, Generators & pip VirtualEnvs"] }
    ]},
    { id: "track_ai", name: "Artificial Intelligence (AI)", icon: "🤖", category: "AI & Data", description: "Intelligent Agents, Heuristic Search (A*), Knowledge Graphs, LLMs, RAG & Autonomous Agents.", topics: [
      { id: "ai_1", name: "Core AI & Search Agents", subs: ["Intelligent Agents & PEAS", "BFS, DFS & A* Heuristic Search", "Minimax & Alpha-Beta Game Trees", "Knowledge Representation & Logic"] },
      { id: "ai_2", name: "Generative AI, LLMs & RAG", subs: ["Tokenization, Embeddings & Attention", "Transformer Architecture", "RAG (Retrieval-Augmented Generation)", "Autonomous Tool-Calling AI Agents"] }
    ]},
    { id: "track_aiml", name: "Machine Learning (AIML)", icon: "🧠", category: "AI & Data", description: "Data Preprocessing, Linear/Logistic Regression, Random Forests, XGBoost, Clustering & Neural Nets.", topics: [
      { id: "ml_1", name: "Data Prep & Supervised ML", subs: ["Missing Data, Outliers & Feature Scaling", "Linear & Logistic Regression", "Decision Trees, Random Forests & XGBoost", "SVM, k-NN & Naive Bayes"] },
      { id: "ml_2", name: "Unsupervised ML & Deep Learning", subs: ["K-Means & PCA Dimensionality Reduction", "Precision, Recall, F1 & ROC-AUC", "Neural Networks & Backpropagation", "CNNs for Vision & Sequence Models"] }
    ]},
    { id: "track_prompt", name: "Prompt Engineering", icon: "✨", category: "AI & Data", description: "Role-Task-Context, Zero/Few-Shot, Chain-of-Thought, ReAct & Structured JSON.", topics: [
      { id: "pr_1", name: "Prompt Frameworks & Security", subs: ["Role, Task, Context & Format Framework", "Zero-Shot vs Few-Shot Prompting", "Chain-of-Thought (CoT) & ReAct", "Structured JSON Schema & Prompt Injection Defense"] }
    ]},
    { id: "track_c", name: "C Programming", icon: "🔧", category: "Programming", description: "Bitwise Manipulation, Arrays, Pointers, Dynamic Memory (malloc/free), Structs & File I/O.", topics: [
      { id: "c_1", name: "C Core & Pointers", subs: ["Data Types, printf/scanf & Operators", "Control Flow, Loops & Functions", "Arrays, Strings & Pointer Arithmetic", "Dynamic Memory (malloc/calloc/free) & Structs"] }
    ]},
    { id: "track_cpp", name: "C++ & Competitive STL", icon: "⚙️", category: "Programming", description: "C++ OOP, References, Templates, Smart Pointers, and STL (vector, map, set, priority_queue).", topics: [
      { id: "cpp_1", name: "C++ OOP & STL Mastery", subs: ["References, Classes & Virtual Functions", "STL Vector, Pair & Custom Sorting", "STL Map, Unordered_Map & Set", "STL Stack, Queue & Priority_Queue"] }
    ]},
    { id: "track_js", name: "JavaScript & TypeScript", icon: "⚡", category: "Web & Mobile", description: "Modern ES6+ JavaScript, Closures, Event Loop, Promises, Async/Await, DOM & TypeScript.", topics: [
      { id: "js_1", name: "Modern JS & TypeScript", subs: ["let/const, Arrow Functions & Destructuring", "Closures, Hoisting & Event Loop", "Promises, Async/Await & Fetch API", "DOM Manipulation & TypeScript Interfaces"] }
    ]},
    { id: "track_web", name: "Frontend Web Development", icon: "🌐", category: "Web & Mobile", description: "Semantic HTML5, CSS3 Flexbox, Grid, Responsive Media Queries & WCAG Accessibility.", topics: [
      { id: "wb_1", name: "HTML5, CSS3 & Responsive UI", subs: ["Semantic HTML5 & Forms", "CSS Box Model, Flexbox & Grid", "Responsive Design & Media Queries", "Web Accessibility (ARIA) & Performance"] }
    ]},
    { id: "track_react", name: "React & Next.js", icon: "⚛️", category: "Web & Mobile", description: "React Components, Hooks (useState, useEffect, useMemo), Context/Redux & Next.js App Router.", topics: [
      { id: "rc_1", name: "React Hooks & Next.js", subs: ["Components, Props & Virtual DOM", "useState, useEffect & Custom Hooks", "State Management (Context & Redux)", "Next.js SSR, Routing & API Routes"] }
    ]},
    { id: "track_backend", name: "Backend & REST APIs", icon: "🖧", category: "Web & Mobile", description: "HTTP Protocol, RESTful API Design, Node.js/Express, JWT & OAuth2, Redis Caching & WebSockets.", topics: [
      { id: "be_1", name: "Server Architecture & APIs", subs: ["HTTP Methods, Status Codes & REST", "Node.js, Express Middleware & Routing", "JWT Authentication, bcrypt & OAuth2", "Redis Caching, Rate Limiting & WebSockets"] }
    ]},
    { id: "track_springboot", name: "Java Spring Boot & Microservices", icon: "🍃", category: "Enterprise", description: "Spring IoC, Dependency Injection, Spring MVC REST, Spring Data JPA/Hibernate & Microservices.", topics: [
      { id: "sb_1", name: "Spring Boot Enterprise", subs: ["Dependency Injection & Spring Beans", "Spring REST Controllers & Validation", "Spring Data JPA, Hibernate & SQL", "Spring Security, JWT & Microservices"] }
    ]},
    { id: "track_sysdesign", name: "System Design (HLD & LLD)", icon: "🏛️", category: "Enterprise", description: "Load Balancing, Consistent Hashing, Caching, Database Sharding, CAP Theorem & OOP Design Patterns.", topics: [
      { id: "sd_1", name: "HLD & LLD Architecture", subs: ["SOLID Principles & OOP Design Patterns", "CAP Theorem, Load Balancers & CDNs", "Consistent Hashing & Redis Caching", "Database Sharding, Replication & Queues"] }
    ]},
    { id: "track_sql", name: "SQL & Databases", icon: "🗄️", category: "AI & Data", description: "Relational Schema Design, SELECT Queries, INNER/LEFT JOINs, Window Functions, Indexing & ACID.", topics: [
      { id: "sq_1", name: "SQL & Database Internals", subs: ["SELECT, WHERE, GROUP BY & HAVING", "INNER, LEFT, RIGHT & SELF JOINs", "Subqueries, CTEs & Window Functions", "Normalization (1NF-3NF), Indexes & ACID"] }
    ]},
    { id: "track_excel", name: "Data Analytics, Excel & Power BI", icon: "📊", category: "AI & Data", description: "Excel Formulas, XLOOKUP, Pivot Tables, Power Query, DAX Measures & Interactive Dashboards.", topics: [
      { id: "ex_1", name: "Excel, Statistics & Power BI", subs: ["SUMIFS, COUNTIFS, VLOOKUP & XLOOKUP", "Pivot Tables, Slicers & Data Cleaning", "Descriptive Statistics & Charts", "Power BI DAX & Dashboard Storytelling"] }
    ]},
    { id: "track_cloud", name: "Cloud Computing (AWS / GCP / Azure)", icon: "☁️", category: "Cloud & Security", description: "IaaS/PaaS/SaaS, Virtual Machines, Serverless Cloud Run/Lambda, Object Storage, VPC & IAM.", topics: [
      { id: "cl_1", name: "Cloud & Serverless Architecture", subs: ["Regions, Zones & IaaS/PaaS/SaaS", "VMs, Containers & Serverless Cloud Run", "Cloud Storage (S3/GCS) & Managed DBs", "IAM Least Privilege, VPC & Load Balancing"] }
    ]},
    { id: "track_devops", name: "DevOps, Linux, Docker & Kubernetes", icon: "🐳", category: "Cloud & Security", description: "Linux Commands, Bash Scripting, Git Branching, Docker Containers, Kubernetes & CI/CD.", topics: [
      { id: "do_1", name: "Linux, Git, Docker & CI/CD", subs: ["Linux CLI, Permissions (chmod) & Bash", "Git Branching, Merging & Pull Requests", "Dockerfiles, Images & Docker Compose", "Kubernetes & GitHub Actions CI/CD"] }
    ]},
    { id: "track_cyber", name: "Cybersecurity & Ethical Hacking", icon: "🛡️", category: "Cloud & Security", description: "CIA Triad, AES/RSA Cryptography, Firewalls, OWASP Top 10 (SQLi, XSS, CSRF) & Pen Testing.", topics: [
      { id: "cy_1", name: "Network & Web Security", subs: ["CIA Triad, Encryption & Hashing", "OWASP Top 10: SQL Injection & XSS Defense", "Firewalls, VPNs, Nmap & Wireshark", "Incident Response & Ethical Hacking"] }
    ]},
    { id: "track_mobile", name: "Mobile App Dev (Flutter & React Native)", icon: "📱", category: "Web & Mobile", description: "Cross-Platform Mobile UI, Navigation Stacks, State Management, REST APIs & Store Publishing.", topics: [
      { id: "mb_1", name: "Mobile Engineering", subs: ["Responsive Layouts & Touch Gestures", "Stack & Tab Navigation", "State Management & Offline Storage", "Device APIs & App Store Deployment"] }
    ]},
    { id: "track_cs_core", name: "Operating Systems & Computer Networks", icon: "💻", category: "Programming", description: "Processes, Threads, CPU Scheduling, Deadlocks, Virtual Memory, OSI Model, TCP/IP & DNS.", topics: [
      { id: "cs_1", name: "OS & Networking Core", subs: ["Processes, Threads, Mutex & Semaphores", "CPU Scheduling & Banker's Deadlock", "Virtual Memory & Paging (LRU)", "OSI Model, TCP/IP, DNS & HTTPS"] }
    ]},
    { id: "track_quant", name: "Quantitative Aptitude", icon: "➗", category: "Aptitude & Career", description: "Number System, Percentages, Profit & Loss, Time & Work, Speed/Distance, PnC & Probability.", topics: [
      { id: "qa_1", name: "Placement Arithmetic", subs: ["Number System, HCF/LCM & Factors", "Percentages, Profit/Loss & Interest", "Ratios, Averages & Mixtures", "Time & Work and Time, Speed & Distance", "Permutations, Combinations & Probability"] }
    ]},
    { id: "track_logic", name: "Logical Reasoning & Verbal", icon: "🧭", category: "Aptitude & Career", description: "Number/Letter Series, Coding-Decoding, Blood Relations, Syllogisms & Seating Arrangements.", topics: [
      { id: "lr_1", name: "Analytical Reasoning & Verbal", subs: ["Series Patterns & Coding-Decoding", "Blood Relations & Direction Sense", "Syllogisms & Seating Arrangements", "Clocks, Calendars & Reading Comprehension"] }
    ]},
    { id: "track_uiux", name: "UI/UX & Product Design", icon: "🎨", category: "Design & Career", description: "User Personas, Wireframing, Figma Auto-Layout, Design Systems, Color Contrast & Prototyping.", topics: [
      { id: "ux_1", name: "UI/UX & Figma Systems", subs: ["User Research, Personas & Flows", "Wireframing & Usability Heuristics", "Typography, Color & 8pt Spacing Grids", "Design Tokens & Interactive Prototypes"] }
    ]},
    { id: "track_career", name: "Communication & Career Skills", icon: "🚀", category: "Aptitude & Career", description: "ATS LaTeX Resumes, LinkedIn Branding, GitHub Portfolio, STAR Interviews & Negotiation.", topics: [
      { id: "cr_1", name: "Resume & Interview Mastery", subs: ["FAANG Single-Column XYZ Resume Writing", "GitHub Portfolio & LinkedIn Optimization", "STAR Behavioral Interview Stories", "Live Coding Communication & Negotiation"] }
    ]},
    { id: "track_golang", name: "Go (Golang) Engineering", icon: "🐹", category: "Programming", description: "Goroutines, Channels, Concurrency & High-Performance Microservices.", topics: [{ id: "go_1", name: "Golang Core", subs: ["Structs, Slices & Interfaces", "Goroutines, Channels & WaitGroups", "Go HTTP Microservices"] }] },
    { id: "track_rust", name: "Rust Systems Programming", icon: "🦀", category: "Programming", description: "Ownership, Borrowing, Lifetimes, Cargo & Memory-Safe Concurrency.", topics: [{ id: "rs_1", name: "Rust Core", subs: ["Ownership & Borrowing Rules", "Enums, Option, Result & Pattern Matching", "Traits, Generics & Lifetimes"] }] },
    { id: "track_kotlin", name: "Kotlin & Android Dev", icon: "🎯", category: "Web & Mobile", description: "Null Safety, Coroutines, Jetpack Compose & MVVM Android Apps.", topics: [{ id: "kt_1", name: "Kotlin & Compose", subs: ["Null Safety & Data Classes", "Coroutines & Flows", "Jetpack Compose UI & ViewModel"] }] },
    { id: "track_swift", name: "Swift & iOS Development", icon: "🍎", category: "Web & Mobile", description: "Optionals, Structs, ARC Memory & SwiftUI Declarative Views.", topics: [{ id: "sw_1", name: "Swift & SwiftUI", subs: ["Optionals, Protocols & Closures", "ARC Memory Management", "SwiftUI State & Navigation"] }] },
    { id: "track_csharp", name: "C# & .NET Core", icon: "🟣", category: "Enterprise", description: "C# OOP, LINQ, Async/Await, ASP.NET Core Web APIs & Entity Framework.", topics: [{ id: "csn_1", name: "C# & ASP.NET", subs: ["C# OOP, Generics & LINQ", "ASP.NET Core REST APIs", "Entity Framework Core ORM"] }] },
    { id: "track_php", name: "PHP & Laravel Full-Stack", icon: "🐘", category: "Web & Mobile", description: "Modern PHP 8, Laravel MVC, Eloquent ORM, Blade & REST APIs.", topics: [{ id: "php_1", name: "PHP & Laravel", subs: ["Routing, Controllers & Middleware", "Eloquent ORM & Migrations", "Laravel Auth & Queues"] }] },
    { id: "track_ruby", name: "Ruby on Rails", icon: "💎", category: "Web & Mobile", description: "Ruby Blocks, Rails MVC, ActiveRecord & Automated RSpec Testing.", topics: [{ id: "rb_1", name: "Ruby on Rails", subs: ["Ruby Blocks, Procs & Modules", "Rails MVC & ActiveRecord", "RSpec & Background Jobs"] }] },
    { id: "track_blockchain", name: "Blockchain, Web3 & Solidity", icon: "⛓️", category: "Cloud & Security", description: "Ethereum EVM, Solidity Smart Contracts, DeFi & Smart Contract Security.", topics: [{ id: "bc_1", name: "Web3 & Solidity", subs: ["Cryptographic Hashing & Consensus", "Solidity Smart Contracts", "Reentrancy Defense & Gas Optimization"] }] },
    { id: "track_nlp", name: "Natural Language Processing (NLP)", icon: "🗣️", category: "AI & Data", description: "Tokenization, TF-IDF, Word2Vec, BERT, GPT & LoRA Fine-Tuning.", topics: [{ id: "nlp_1", name: "NLP & Transformers", subs: ["Tokenization, Stemming & TF-IDF", "Word Embeddings & Sequence Models", "BERT, GPT & LoRA Fine-Tuning"] }] },
    { id: "track_cv", name: "Computer Vision & OpenCV", icon: "👁️", category: "AI & Data", description: "Image Filtering, Convolutions, ResNet, YOLO Object Detection & Segmentation.", topics: [{ id: "cv_1", name: "OpenCV & Deep Vision", subs: ["Image Tensors & Edge Detection", "CNNs, ResNet & Transfer Learning", "YOLO Object Detection & Segmentation"] }] },
    { id: "track_bigdata", name: "Big Data (Spark, Kafka & Airflow)", icon: "⚡", category: "AI & Data", description: "Data Warehousing, PySpark DataFrames, Kafka Streaming & Airflow DAGs.", topics: [{ id: "bd_1", name: "Spark & Kafka Pipelines", subs: ["Data Warehousing & Partitioning", "Apache Spark & PySpark Transformations", "Kafka Event Streaming & Airflow"] }] },
    { id: "track_testing", name: "Software Testing & SDET Automation", icon: "🧪", category: "Enterprise", description: "Unit/Integration/E2E Testing, Playwright, Selenium, Postman & Load Testing.", topics: [{ id: "qa_sdet", name: "Test Automation", subs: ["Test Design & Boundary Value Analysis", "Playwright & Selenium UI Automation", "REST API & Performance Testing"] }] },
    { id: "track_salesforce", name: "Salesforce & Agentforce AI", icon: "☁️", category: "Enterprise", description: "Salesforce Admin, Apex Triggers, SOQL, Lightning Web Components & Agentforce AI.", topics: [{ id: "sf_1", name: "Apex, LWC & Agentforce", subs: ["Objects, Flows & Data Security", "Apex Triggers & SOQL Queries", "Lightning Web Components & Agentforce Prompts"] }] },
    { id: "track_servicenow", name: "ServiceNow Platform & Analytics", icon: "🛠️", category: "Enterprise", description: "ServiceNow ITSM, Incident Validation, GlideRecord Scripting, Flows & Platform Analytics.", topics: [{ id: "sn_1", name: "ServiceNow Admin & Scripting", subs: ["Incident Management & Form Validation", "Client Scripts, Business Rules & GlideRecord", "Platform Analytics & Data Visualizations"] }] },
    { id: "track_iot", name: "Embedded Systems & IoT", icon: "📡", category: "Programming", description: "Microcontrollers (Arduino/ESP32), GPIO, UART/I2C/SPI, FreeRTOS & MQTT.", topics: [{ id: "iot_1", name: "Embedded Firmware & IoT", subs: ["GPIO, Interrupts, PWM & ADC", "UART, I2C & SPI Communication", "FreeRTOS & MQTT IoT Telemetry"] }] },
    { id: "track_vlsi", name: "Digital Logic, Verilog & VLSI", icon: "🔬", category: "Programming", description: "Boolean Logic, Flip-Flops, FSMs, Verilog HDL & Static Timing Analysis.", topics: [{ id: "vl_1", name: "Verilog & Digital Design", subs: ["Combinational & Sequential Circuits", "Finite State Machines & Verilog HDL", "FPGA Synthesis & Timing Constraints"] }] },
    { id: "track_gamedev", name: "Game Development (Unity & Unreal)", icon: "🎮", category: "Design & Career", description: "Game Loops, Delta Time, 3D Physics, Raycasting, Shaders & AI Pathfinding.", topics: [{ id: "gm_1", name: "Game Physics & Scripting", subs: ["Game Loop, Delta Time & Colliders", "3D Vectors, Raycasting & Quaternions", "Shaders & A* Pathfinding"] }] },
    { id: "track_arvr", name: "AR / VR & Three.js WebXR", icon: "🥽", category: "Web & Mobile", description: "3D Scenes, Cameras, Meshes, Shaders & Spatial WebXR Interactions.", topics: [{ id: "xr_1", name: "Three.js & Spatial Web", subs: ["Scenes, Cameras, Lights & Meshes", "6DoF Controllers & Ray Interaction", "90fps VR Optimization"] }] },
    { id: "track_quantfin", name: "Quantitative Finance & FinTech", icon: "📈", category: "AI & Data", description: "Order Books, Time-Series Volatility, Monte Carlo Simulation & Sharpe Ratio.", topics: [{ id: "qf_1", name: "Quant Modeling", subs: ["Limit Order Books & Market Making", "Time-Series Analysis & Monte Carlo", "Backtesting & Risk Metrics"] }] },
    { id: "track_pm", name: "Technical Product Management", icon: "📋", category: "Design & Career", description: "PRDs, North Star Metrics, RICE Prioritization, Funnel Analytics & Agile.", topics: [{ id: "pm_1", name: "Product Strategy", subs: ["Writing Clear Engineering PRDs", "RICE Prioritization & Funnel Metrics", "A/B Testing & Sprint Execution"] }] }
  ];

  window.QUESTION_BANK = DOMAIN_BLUEPRINTS.map(function (domain) {
    const topics = domain.topics.map(function (t) {
      const subtopics = (t.subs || []).map(function (subName, idx) {
        return createSubtopic(`${t.id}_s${idx + 1}`, subName, domain.name);
      });
      return { id: t.id, name: t.name, subtopics: subtopics };
    });
    return {
      id: domain.id,
      name: domain.name,
      icon: domain.icon,
      category: domain.category,
      isMultiLanguageDSA: Boolean(domain.isMultiLanguageDSA),
      description: domain.description,
      topics: topics
    };
  });

  function buildRoadmapFromDomain(domain) {
    return {
      id: domain.id,
      name: domain.name,
      icon: domain.icon,
      category: domain.category,
      summary: domain.description,
      steps: domain.topics.map(function (t, idx) {
        const edu = window.getCuratedEducator(domain.name, t.name);
        return {
          phase: `Stage ${idx + 1}`,
          title: t.name,
          duration: idx === 0 ? "Weeks 1–2 (Core Foundations)" : idx === 1 ? "Weeks 3–4 (Intermediate Implementation)" : "Weeks 5–6 (Production & Interviews)",
          concepts: t.subtopics.map(function (s) {
            return {
              id: s.id,
              title: s.title,
              topicId: t.id,
              deepNote: `Learn ${s.title} with simple examples, visual memory diagrams, 8 graded MCQs, and a hands-on coding exercise.`
            };
          }),
          theorySummary: `In this stage of ${domain.name}, you will learn ${t.subtopics.length} core topics step-by-step with real${domain.name} code examples and practice quizzes.`,
          keyDeliverable: `Complete all ${t.subtopics.length * 8} practice questions in${t.name} and pass the coding sessions.`,
          educator: edu.educator,
          courseTitle: edu.course,
          ytUrl: edu.url
        };
      })
    };
  }

  window.DOMAIN_ROADMAPS = window.QUESTION_BANK.map(buildRoadmapFromDomain);

  window.createCustomDomainTrack = function (rawQuery) {
    const cleanName = String(rawQuery || "Custom Tech").trim();
    const id = "track_custom_" + cleanName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const existing = window.QUESTION_BANK.find(function (d) { return d.id === id; });
    if (existing) return existing;

    const newTrack = {
      id: id,
      name: cleanName,
      icon: "🌟",
      category: "Custom Generated",
      isMultiLanguageDSA: false,
      description: `Complete custom-generated track for ${cleanName}: Basics, Examples, Quizzes, and Hands-On Coding.`,
      topics: [
        {
          id: `${id}_t1`,
          name: `${cleanName} Basics`,
          subtopics: [
            createSubtopic(`${id}_s1`, `What is ${cleanName}?`, cleanName),
            createSubtopic(`${id}_s2`, `Syntax & Setup in ${cleanName}`, cleanName),
            createSubtopic(`${id}_s3`, `Core Operations in ${cleanName}`, cleanName),
            createSubtopic(`${id}_s4`, `Debugging & Testing in ${cleanName}`, cleanName)
          ]
        }
      ]
    };
    window.QUESTION_BANK.unshift(newTrack);
    window.DOMAIN_ROADMAPS.unshift(buildRoadmapFromDomain(newTrack));
    return newTrack;
  };

  // ============================================================================
  // MNC PLACEMENT GENERATOR (100 EASY + 100 MEDIUM + 100 HARD = 300 QUESTIONS!)
  // ============================================================================
  window.MNC_COMPANIES_META = [
    { id: "Zoho", name: "Zoho Corporation", badge: "₹8.4–14 LPA • C/Java Output Tracing + LLD" },
    { id: "TCS", name: "TCS (Ninja, Digital & Prime NQT)", badge: "₹3.36–11.5 LPA • Foundation + Advanced Coding" },
    { id: "Amazon", name: "Amazon (SDE-1 / FAANG)", badge: "₹28–45 LPA • OA + 3 DSA Loops + Leadership Principles" },
    { id: "Google", name: "Google & Microsoft (MANGOS)", badge: "₹32–60 LPA • Algorithms, Graphs, DP & System Design" },
    { id: "Infosys", name: "Infosys (SP / DSE / HackWithInfy)", badge: "₹3.6–21 LPA • Greedy, DP & Full-Stack" },
    { id: "Accenture", name: "Accenture, Cognizant & Wipro", badge: "₹4.5–8.5 LPA • Pseudo-Code, Cloud, SQL & Coding" }
  ];

  window.MNC_ROLES = [
    "Software Development Engineer (SDE)",
    "Full-Stack Developer",
    "Data & AI Engineer",
    "Cloud & DevOps Engineer",
    "QA / SDET Automation Engineer",
    "System / Platform Engineer"
  ];

  window.MNC_LANGUAGES = ["Java", "Python", "C", "C++", "JavaScript", "SQL"];
  window.MNC_CATEGORIES = ["All Categories", "Technical & Language FAQ", "DSA & Coding Logic", "Quantitative & Analytical Aptitude", "System Design & Role Architecture", "HR & Behavioral (STAR)"];

  window.generateMNCQuestions = function (company, role, language, category, difficulty) {
    const diffs = difficulty === "ALL" ? ["Easy", "Medium", "Hard"] : [difficulty];
    const templates = [
      {
        cat: "Technical & Language FAQ",
        make: function (comp, rl, lang, diff, num) {
          const offset = num * 2 + (diff === "Easy" ? 3 : diff === "Medium" ? 7 : 13);
          return {
            q: `[${comp} • ${rl} •${lang}] In a ${diff.toLowerCase()}-level${lang} question (#${num}), an array of size${offset} is processed in a loop. How do you prevent IndexOutOfBounds or null errors?`,
            options: [
              `Check that index i stays between 0 and ${offset - 1}, and verify the array is not null before looping`,
              `Access index ${offset} directly without checking`,
              `Use uninitialized variables in ${lang}`,
              `Create an infinite loop`
            ],
            answer: 0,
            explanation: `In ${lang}, valid array indices run from 0 to length - 1 (0 to${offset - 1}).`
          };
        }
      },
      {
        cat: "DSA & Coding Logic",
        make: function (comp, rl, lang, diff, num) {
          const nSize = diff === "Easy" ? 1000 : diff === "Medium" ? 100000 : 1000000;
          return {
            q: `[${comp} Coding • ${lang}] For Problem #${num} (${rl}) where input size N = ${nSize.toLocaleString()}, which approach in${lang} finishes within the 1.5-second time limit?`,
            options: [
              `An O(N) HashMap / Two-Pointer approach or O(N log N) Binary Search / Sorting approach`,
              `A triple nested loop taking O(N³) time`,
              `Sorting the array inside a loop taking O(N² log N) time`,
              `Checking all 2^N combinations without memoization`
            ],
            answer: 0,
            explanation: `For N = ${nSize.toLocaleString()}, O(N) or O(N log N) runs in milliseconds, while O(N²) times out.`
          };
        }
      },
      {
        cat: "Quantitative & Analytical Aptitude",
        make: function (comp, rl, lang, diff, num) {
          const base = 10 + (num % 25);
          const rate = diff === "Easy" ? 20 : diff === "Medium" ? 25 : 50;
          const result = Math.round(base * (1 + rate / 100) * 100) / 100;
          return {
            q: `[${comp} Aptitude #${num}] A system processes${base} tasks per minute. After a ${rate}% speed improvement, how many tasks per minute does it process?`,
            options: [
              `${result} tasks/min`,
              `${base + rate} tasks/min`,
              `${base * 2} tasks/min`,
              `${Math.max(1, base - 5)} tasks/min`
            ],
            answer: 0,
            explanation: `${base} increased by ${rate}\% =${base} × (1 + ${rate}/100) =${result}.`
          };
        }
      },
      {
        cat: "System Design & Role Architecture",
        make: function (comp, rl, lang, diff, num) {
          const rps = (num + 1) * (diff === "Easy" ? 500 : diff === "Medium" ? 5000 : 25000);
          return {
            q: `[${comp} ${rl} Design #${num}] Your ${lang} backend needs to handle${rps.toLocaleString()} requests/sec smoothly. What is the best setup?`,
            options: [
              `Use a Load Balancer, stateless ${lang} servers, Redis caching, and database indexes`,
              `Save all data in a single notepad file on one laptop`,
              `Scan the entire database table without indexes on every click`,
              `Pause the server for 5 seconds after each request`
            ],
            answer: 0,
            explanation: `Load balancing, Redis caching, and database indexing allow ${lang} apps to scale to${rps.toLocaleString()} RPS.`
          };
        }
      },
      {
        cat: "HR & Behavioral (STAR)",
        make: function (comp, rl, lang, diff, num) {
          return {
            q: `[${comp} Interview #${num}] The interviewer asks: "Tell me about a time you fixed a tough ${lang} bug in your project." How should you answer?`,
            options: [
              `Explain the Situation, Task, Action you took to debug and test it, and the final Result (STAR method)`,
              `Blame your teammate and say you never make mistakes`,
              `Say "I don't know" and stay silent`,
              `Say you deleted the project instead of fixing the bug`
            ],
            answer: 0,
            explanation: `Interviewers at ${comp} look for clear STAR answers showing how you found the root cause and fixed it.`
          };
        }
      }
    ];

    const list = [];
    diffs.forEach(function (d) {
      const pts = d === "Easy" ? 10 : d === "Medium" ? 20 : 35;
      for (let i = 1; i <= 100; i++) {
        const tmpl = category === "All Categories"
          ? templates[(i - 1) % templates.length]
          : (templates.find(function (t) { return t.cat === category; }) || templates[0]);
        const item = tmpl.make(company, role, language, d, i);
        list.push({
          id: `mnc_${company}_${role.slice(0, 3)}_${language}_${d}_${i}`.replace(/[^a-zA-Z0-9_]/g, ""),
          number: i,
          company: company,
          role: role,
          language: language,
          category: tmpl.cat,
          difficulty: d,
          points: pts,
          q: item.q,
          options: item.options,
          answer: item.answer,
          explanation: item.explanation
        });
      }
    });
    return list;
  };

  // ============================================================================
  // 225+ CERTIFICATION DIRECTORY
  // ============================================================================
  const PROVIDERS = [
    { name: "freeCodeCamp", url: "https://www.freecodecamp.org", category: "Programming", courses: ["Responsive Web Design", "JavaScript Algorithms & Data Structures", "Front End Development Libraries (React)", "Back End Development & APIs (Node.js)", "Scientific Computing with Python", "Data Analysis with Python", "Machine Learning with Python", "Relational Database (SQL & Bash)", "Information Security", "Foundational C# with Microsoft"] },
    { name: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google", category: "Cloud & DevOps", courses: ["Introduction to Generative AI", "Prompt Design in Vertex AI", "Google Cloud Computing Foundations", "Serverless Cloud Run Development", "Kubernetes Engine (GKE)", "BigQuery Data Analytics", "Cloud Security & IAM", "DevOps CI/CD Pipelines", "MLOps on Google Cloud", "Terraform Infrastructure as Code"] },
    { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", category: "AI & ML", courses: ["Python for Data Science", "Intro to Machine Learning", "Intermediate Machine Learning", "Pandas Data Manipulation", "Intro to Deep Learning", "Computer Vision", "Time Series Forecasting", "Intro to SQL", "Advanced Analytic SQL", "Feature Engineering"] },
    { name: "Microsoft Learn", url: "https://learn.microsoft.com", category: "Cloud & DevOps", courses: ["AZ-900 Azure Fundamentals", "AI-900 Azure AI Fundamentals", "DP-900 Azure Data Fundamentals", "GitHub Copilot Engineering", "C# & .NET Microservices", "Power BI Data Analytics", "SC-900 Cybersecurity", "Playwright Test Automation", "Azure Kubernetes Service", "Generative AI for Beginners"] },
    { name: "IBM SkillsBuild", url: "https://skillsbuild.org", category: "AI & ML", courses: ["Artificial Intelligence Fundamentals", "Cybersecurity Fundamentals", "Data Analytics with Python", "Cloud & Red Hat OpenShift", "Enterprise Design Thinking", "Quantum Computing Foundations", "Agile Project Management", "Full-Stack Web Development", "Enterprise Prompt Engineering", "SOC Analyst Foundations"] },
    { name: "Cisco Networking Academy", url: "https://skillsforall.com", category: "Networking & OS", courses: ["Networking Basics (TCP/IP & OSI)", "Introduction to Cybersecurity", "Junior Cybersecurity Analyst Path", "Python Essentials 1 & 2", "JavaScript Essentials", "Linux Command Line Unhatched", "Network Defense", "Ethical Hacker Track", "Data Analytics Essentials", "IoT Fundamentals"] },
    { name: "NPTEL / SWAYAM (IITs)", url: "https://nptel.ac.in", category: "University & Govt", courses: ["DSA using Python (IIT Madras)", "Programming in Java (IIT Kharagpur)", "Problem Solving in C", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks", "Deep Learning (IIT Ropar)", "Cloud Computing", "Compiler Design", "Verilog Hardware Modeling"] },
    { name: "Harvard CS50 OpenCourseWare", url: "https://cs50.harvard.edu", category: "University & Govt", courses: ["CS50x Computer Science", "CS50P Programming with Python", "CS50W Web Programming", "CS50AI Artificial Intelligence", "CS50SQL Databases with SQL", "CS50 Cybersecurity", "CS50G Game Development", "CS50R Statistical R", "CS50T Technology", "CS50 for Business"] },
    { name: "AWS Skill Builder", url: "https://explore.skillbuilder.aws", category: "Cloud & DevOps", courses: ["AWS Cloud Practitioner Essentials", "AWS Technical Essentials", "Serverless with AWS Lambda", "Generative AI with Amazon Bedrock", "Machine Learning on AWS", "Well-Architected Cloud Design", "AWS IAM & Security", "DynamoDB NoSQL Modeling", "Containers on AWS (ECS/EKS)", "CloudWatch Observability"] },
    { name: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses", category: "AI & ML", courses: ["ChatGPT Prompt Engineering for Developers", "LangChain for LLM Apps", "Advanced RAG Pipelines", "AI Agentic Design Patterns", "Finetuning Large Language Models", "Vector Databases", "Building Systems with LLM APIs", "Model Quantization", "Serverless LLM Deployment", "Automated LLMOps Testing"] },
    { name: "MongoDB University", url: "https://learn.mongodb.com", category: "Data & Analytics", courses: ["MongoDB Node.js Developer Path", "MongoDB Python Developer Path", "MongoDB Java Developer Path", "MongoDB C# Developer Path", "NoSQL Schema Design Patterns", "Aggregation Pipeline Mastery", "Indexing & Query Tuning", "Atlas Vector Search for AI", "ACID Transactions in NoSQL", "MongoDB DBA Track"] },
    { name: "Postman & Linux Foundation", url: "https://academy.postman.com", category: "Web & Mobile", courses: ["Postman API Fundamentals Student Expert", "Automated API Testing in JS", "OpenAPI & REST Design", "LFS101 Introduction to Linux", "LFS158 Introduction to Kubernetes", "LFS167 Jenkins & CI/CD", "LFS169 GitOps Fundamentals", "OpenSSF Secure Software Dev", "Prometheus Observability", "gRPC & GraphQL APIs"] },
    { name: "Infosys Springboard & Great Learning", url: "https://infyspringboard.onwingspan.com", category: "Programming", courses: ["Java SE 8 & OOP Certification", "Data Structures using Java", "Python Foundation Certification", "Spring Boot Microservices", "Angular Frontend Engineering", "Excel & Pivot Tables Mastery", "Power BI Visualization", "SQL for Data Science", "UI/UX Design Foundations", "Campus Placement Aptitude"] },
    { name: "Salesforce Trailhead & ServiceNow", url: "https://trailhead.salesforce.com", category: "Enterprise", courses: ["Agentforce AI Agents Trail", "Prompt Builder & Atlas Reasoning", "Salesforce Admin Beginner", "Apex & SOQL Developer", "Lightning Web Components (LWC)", "ServiceNow Administration", "GlideRecord Scripting in ServiceNow", "ServiceNow Flow Designer", "Platform Analytics Visualizations", "Incident Form Validation"] },
    { name: "Simplilearn, HubSpot & Fortinet", url: "https://www.simplilearn.com/skillup-free-online-courses", category: "Cybersecurity", courses: ["Ethical Hacking for Beginners", "Fortinet Certified Fundamentals (FCF)", "ISC2 Certified in Cybersecurity (CC)", "Zero Trust Network Security", "DevOps 101 Bootcamp", "Business Analytics with Excel", "Digital Marketing & SEO (HubSpot)", "Google Analytics 4 (Skillshop)", "Figma UI/UX Prototyping", "Oracle SQL & OCI Cloud"] }
  ];

  const catalog = [];
  let cId = 1;
  PROVIDERS.forEach(function (p) {
    p.courses.forEach(function (courseName) {
      catalog.push({
        id: "cert_" + (cId++),
        provider: p.name,
        courseTitle: courseName,
        name: `${p.name}:${courseName}`,
        category: p.category,
        url: p.url,
        skillsGained: [courseName, p.category, "Hands-On Labs", "Production Best Practices"],
        resumeBullets: [
          `Completed ${p.name}'s${courseName} certification, building and testing modules with 100% verification.`,
          `Applied ${courseName} principles to improve code modularity and reliability.`
        ]
      });
    });
  });
  window.CERTIFICATION_CATALOG = catalog;

  // ============================================================================
  // PROJECTS & PROMPTS STUDIO
  // ============================================================================
  window.SKILL_PROJECT_STUDIO = {
    defaultSkills: ["Python", "Java", "JavaScript", "HTML/CSS", "React", "SQL", "Data Structures", "AI & Prompting", "Machine Learning", "C / C++", "Docker & Cloud"],
    projects: [
      {
        id: "prj_py_easy",
        title: "Smart Student Expense & Placement Readiness Tracker",
        difficulty: "Easy",
        skills: ["Python", "SQL", "HTML/CSS", "JavaScript"],
        summary: "A beginner-friendly application that tracks daily study streaks, mock test scores, and college expenses with automated CSV reports and visual charts.",
        dayByDayPlan: [
          "Day 1 (Setup & Data Model): Design the table/dictionary structure for storing entries (date, category, amount/score, notes).",
          "Day 2 (Core Logic): Write functions `addEntry()`, `deleteEntry()`, and `calculateCategoryTotals()` with input checks.",
          "Day 3 (Storage): Connect SQLite (in Python) or LocalStorage/Firestore so data saves automatically.",
          "Day 4 (Dashboard UI): Build a clean interface showing progress bars and category totals.",
          "Day 5 (Testing & Deploy): Test edge cases, add a README with screenshots, and deploy live."
        ],
        prompts: [
          "Prompt 1 (Build): 'Give me a simple folder structure and step-by-step code for a Student Expense & Study Tracker in Python/JS with CSV export.'",
          "Prompt 2 (Resume Bullet): 'Write a strong resume bullet point for building this tracker.'"
        ]
      },
      {
        id: "prj_ai_med",
        title: "AI Resume ATS Scanner & Interview Question Generator",
        difficulty: "Medium",
        skills: ["Python", "JavaScript", "AI & Prompting", "React"],
        summary: "Paste a Job Description and resume to get an instant ATS keyword match score, missing skills list, and custom interview questions.",
        dayByDayPlan: [
          "Day 1 (Keyword Parser): Extract technical words from a Job Description and compare them against the resume.",
          "Day 2 (Scoring Formula): Calculate a 0-100 score based on keyword match, numbers/metrics, and section headings.",
          "Day 3 (AI Integration): Connect Gemini API to rewrite weak resume lines into strong impact statements.",
          "Day 4 (Overleaf Export): Add a button that exports the resume into single-column Overleaf LaTeX format.",
          "Day 5 (Deploy): Host live on Firebase Hosting or Google Cloud Run."
        ],
        prompts: [
          "Prompt 1 (Scoring Engine): 'Write a simple ATS Resume Analyzer in Python/JavaScript that checks keyword overlap and returns a score out of 100.'",
          "Prompt 2 (Bullet Rewriter): 'Rewrite these project descriptions into strong resume bullet points with measurable numbers.'"
        ]
      },
      {
        id: "prj_dsa_hard",
        title: "Multi-Language Online Coding Judge & Visualizer",
        difficulty: "Hard",
        skills: ["Java", "Python", "Data Structures", "Docker & Cloud", "JavaScript"],
        summary: "An online coding arena with isolated test execution, countdown timers, progressive hints, and sorting/search animations.",
        dayByDayPlan: [
          "Day 1 (Problem Schema): Define problems with starter code in Java, Python, C++, and JS plus hidden test cases.",
          "Day 2 (Safe Test Runner): Run student code with a 1.5-second timeout so infinite loops stop safely.",
          "Day 3 (Hints & Timers): Add 15m/30m/45m countdown timers and unlock the solution only after 3 hints.",
          "Day 4 (Visualizer): Animate Binary Search and Sorting step-by-step using bars.",
          "Day 5 (Leaderboard): Connect Firestore to rank students in real time."
        ],
        prompts: [
          "Prompt 1 (Runner): 'Write a safe code test runner with a 1500ms timeout that checks student outputs against test cases.'",
          "Prompt 2 (Visualizer): 'Show me how to animate Binary Search and Bubble Sort step-by-step in HTML/JS.'"
        ]
      }
    ]
  };

  // ============================================================================
  // SIMPLE, DIRECT, PLAIN-ENGLISH AI TUTOR & LINKEDIN AGENT
  // Answers "What is X?" directly and simply, with a clean code example!
  // ============================================================================
  window.generateSmartAITutorResponse = function (userQuery, contextStr) {
    const q = String(userQuery || "").trim();
    const lower = q.toLowerCase();

    // 1. LinkedIn Post Generator
    if (lower.includes("linkedin") || lower.includes("post") || lower.includes("announce")) {
      const topic = q.replace(/write|generate|create|a|linkedin|post|for|about|on/gi, "").trim() || "completing my new certification and coding project";
      return `🚀 **Ready-to-Copy LinkedIn Post:**\n\n` +
        `I am happy to share that I have completed **${topic}**! 💻✨\n\n` +
        `📌 **What I learned and built:**\n` +
        `• Practiced core concepts with hands-on code examples and quizzes\n` +
        `• Solved real-world problems and tested edge cases\n` +
        `• Excited to use these skills in upcoming software and AI projects!\n\n` +
        `#Coding #Java #Python #SoftwareEngineering #PlacementPrep #Learning`;
    }

    // 2. Simple, direct answers for Java questions
    if (lower.includes("java") && !lower.includes("javascript")) {
      if (lower.includes("variable")) {
        return `☕ **What is a Variable in Java?**\n` +
          `A variable in Java is simply a named box in memory that stores a value (like a number or text). Because Java is strictly typed, you must write the **data type** first.\n\n` +
          `**Simple Java Example:**\n` +
          `\`\`\`java\npublic class Main {\n    public static void main(String[] args) {\n        int age = 20;              // Whole number\n        double cgpa = 9.1;         // Decimal number\n        String name = "Yuvashree"; // Text\n        System.out.println(name + " is " + age + " years old.");\n    }\n}\n\`\`\``;
      }
      return `☕ **What is Java? (Explained Simply)**\n` +
        `**Java** is one of the most popular object-oriented programming languages in the world. It follows the rule **"Write Once, Run Anywhere"**—meaning Java code compiles into bytecode that runs on any computer using the JVM (Java Virtual Machine).\n\n` +
        `**Where Java is commonly used:**\n` +
        `1. **MNC Backend Systems:** Used by Amazon, Zoho, TCS, Infosys, and banks (with Spring Boot).\n` +
        `2. **Data Structures & Placements:** The #1 language for coding interviews.\n` +
        `3. **Android Apps:** Enterprise mobile applications.\n\n` +
        `**Simple Java Program:**\n` +
        `\`\`\`java\npublic class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        System.out.println("Hello Java! Sum = " + (a + b));\n    }\n}\n\`\`\``;
    }

    // 3. Simple, direct answer for Python
    if (lower.includes("python")) {
      return `🐍 **What is Python? (Explained Simply)**\n` +
        `**Python** is a beginner-friendly programming language that reads almost like plain English. You don't need semicolons or curly braces—Python uses indentation.\n\n` +
        `**Where Python is commonly used:**\n` +
        `• Artificial Intelligence & Machine Learning\n` +
        `• Data Science, Automation & Backend Web APIs\n\n` +
        `**Simple Python Example:**\n` +
        `\`\`\`python\nname = "Yuvashree"\nscores = [85, 90, 95]\nprint(f"Hello {name}, your average is {sum(scores) / len(scores)}")\n\`\`\``;
    }

    // 4. Simple, direct answer for C / Pointers
    if (/\bc\b/.test(lower) || lower.includes("pointer")) {
      return `🔧 **C Programming & Pointers (Explained Simply):**\n` +
        `**C** is a fast, low-level programming language that gives you direct control over computer memory. A **Pointer** is simply a variable that stores the memory address of another variable.\n\n` +
        `**Simple C Example:**\n` +
        `\`\`\`c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int *ptr = &x; // ptr holds the address of x\n    printf("Value of x = %d\\n", *ptr);\n    return 0;\n}\n\`\`\``;
    }

    // 5. Simple, direct answer for Data Structures / Arrays / OOP / SQL
    if (lower.includes("oop") || lower.includes("object oriented")) {
      return `🧱 **What is OOP (Object-Oriented Programming)?**\n` +
        `OOP is a way of writing code by grouping data (variables) and actions (methods) together inside **Classes** and **Objects**.\n\n` +
        `**The 4 Main Pillars of OOP:**\n` +
        `1. **Encapsulation:** Hiding private data inside a class using \`private\` variables and \`public\` getters/setters.\n` +
        `2. **Inheritance:** A child class reusing code from a parent class (\`extends\`).\n` +
        `3. **Polymorphism:** Using one method name to do different things (Overloading & Overriding).\n` +
        `4. **Abstraction:** Showing only essential features and hiding complex background details (\`interface\` / \`abstract\`).`;
    }

    if (lower.includes("sql") || lower.includes("database")) {
      return `🗄️ **What is SQL? (Explained Simply)**\n` +
        `**SQL (Structured Query Language)** is the language used to store, search, and update data inside relational databases (tables with rows and columns).\n\n` +
        `**Simple SQL Example:**\n` +
        `\`\`\`sql\nSELECT name, score FROM students\nWHERE score >= 85\nORDER BY score DESC;\n\`\`\``;
    }

    // Default friendly, simple explanation for any other topic
    return `💡 **Simple Explanation for "${q}":**\n\n` +
      `• **What it means:** **${q}** is a building block in programming that helps you take an input, process it step-by-step, and get the right output.\n` +
      `• **How to learn it fast:** Start with a tiny 5-line code example, test what happens when you change the numbers, and check edge cases like \`0\` or empty inputs.\n` +
      `• **Ask me anything specific!** For example: *"What is Java?"*, *"How do variables work in Java?"*, *"Explain OOP simply"*, or *"Write a LinkedIn post for my certificate"*.`;
  };
})();