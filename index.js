const express = require("express");
const app = express();
const port = 5000;
const failuresEnabled = true;

// GET /projects
app.get("/projects", (req, res) => {
  res.json([
    {
      projectId: "P001",
      title: "Website Redesign",
      description:
        "Complete overhaul of the company website to improve user experience and modernize the aesthetic.",
      assignedUsers: [
        {
          userId: "U001",
          firstname: "Alice",
          lastname: "Smith",
        },
        {
          userId: "U002",
          firstname: "Bob",
          lastname: "Johnson",
        },
      ],
    },
    {
      projectId: "P002",
      title: "Mobile App Development",
      description:
        "Development of a new mobile application for both iOS and Android platforms, focusing on core features and scalability.",
      assignedUsers: [
        {
          userId: "U003",
          firstname: "Charlie",
          lastname: "Brown",
        },
        {
          userId: "U004",
          firstname: "Diana",
          lastname: "Prince",
        },
      ],
    },
  ]);
});

// GET /projects/{projectId}/subtasks
app.get("/projects/:projectId/subtasks", (req, res) => {
  const { projectId } = req.params;
  console.log("Query received:", req.query);
  console.log("Project ID:", projectId);
  const subtasks = [
    {
      subtaskId: "S001",
      projectId: "P001",
      name: "Homepage Mockups",
      tags: ["design", "frontend"],
    },
    {
      subtaskId: "S002",
      projectId: "P001",
      name: "Backend API Integration",
      tags: ["development", "backend"],
    },
    {
      subtaskId: "S003",
      projectId: "P001",
      name: "User Acceptance Testing (UAT)",
      tags: ["testing", "qa"],
    },
    {
      subtaskId: "S004",
      projectId: "P002",
      name: "iOS UI/UX Design",
      tags: ["design", "mobile"],
    },
    {
      subtaskId: "S005",
      projectId: "P002",
      name: "Android Feature Implementation",
      tags: ["development", "mobile"],
    },
    {
      subtaskId: "S006",
      projectId: "P002",
      name: "Database Schema Design",
      tags: ["backend", "database"],
    },
  ];
  res.json(subtasks.filter((subtask) => subtask.projectId === projectId));
});

// GET /subtasks?projectId={projectId}
app.get("/subtasks", (req, res) => {
  const { projectId } = req.query;
  const subtasks = [
    {
      subtaskId: "S001",
      projectId: "P001",
      name: "Homepage Mockups",
      tags: ["design", "frontend"],
    },
    {
      subtaskId: "S002",
      projectId: "P001",
      name: "Backend API Integration",
      tags: ["development", "backend"],
    },
    {
      subtaskId: "S003",
      projectId: "P001",
      name: "User Acceptance Testing (UAT)",
      tags: ["testing", "qa"],
    },
    {
      subtaskId: "S004",
      projectId: "P002",
      name: "iOS UI/UX Design",
      tags: ["design", "mobile"],
    },
    {
      subtaskId: "S005",
      projectId: "P002",
      name: "Android Feature Implementation",
      tags: ["development", "mobile"],
    },
    {
      subtaskId: "S006",
      projectId: "P002",
      name: "Database Schema Design",
      tags: ["backend", "database"],
    },
    {
      subtaskId: "S007",
      projectId: "P002",
      name: "comments will have 404",
      tags: ["backend", "database"],
    },
  ];
  res.json(subtasks.filter((subtask) => subtask.projectId === projectId));
});

// GET /subtasks/{subtaskId}/comments
app.get("/subtasks/:subtaskId/comments", (req, res) => {
  const { subtaskId } = req.params;
  if (subtaskId === "S007" && failuresEnabled) {
    res.status(404).json({ error: "comments not found" });
  }
  const comments = [
    {
      commentId: "C001",
      subtaskId: "S001",
      text: "The client loved the initial homepage mockups! Let's refine the hero section.",
    },
    {
      commentId: "C002",
      subtaskId: "S001",
      text: "Need to ensure mobile responsiveness for all mockup elements.",
    },
    {
      commentId: "C003",
      subtaskId: "S002",
      text: "Started integrating the user authentication endpoint. Facing a CORS issue.",
    },
    {
      commentId: "C004",
      subtaskId: "S002",
      text: "Bob, can you take a look at the CORS error when you have a moment?",
    },
    {
      commentId: "C005",
      subtaskId: "S003",
      text: "Scheduled a UAT session with the marketing team for tomorrow morning.",
    },
    {
      commentId: "C006",
      subtaskId: "S003",
      text: "Please make sure all test cases are documented before the UAT.",
    },
    {
      commentId: "C007",
      subtaskId: "S004",
      text: "The iOS design for the new dashboard is looking great. Ready for client review.",
    },
    {
      commentId: "C008",
      subtaskId: "S004",
      text: "Consider adding haptic feedback to key interactive elements.",
    },
    {
      commentId: "C009",
      subtaskId: "S005",
      text: "Implemented push notifications for Android. Testing integration now.",
    },
    {
      commentId: "C010",
      subtaskId: "S005",
      text: "Charlie, can you review the pull request for the Android feature?",
    },
    {
      commentId: "C011",
      subtaskId: "S006",
      text: "Initial draft of the database schema for user profiles is complete.",
    },
    {
      commentId: "C012",
      subtaskId: "S006",
      text: "Let's review the schema for potential normalization improvements.",
    },
    {
      commentId: "C013",
      subtaskId: "S006",
      text: "Need to add indexes to frequently queried columns.",
    },
  ];
  res.json(comments.filter((comment) => comment.subtaskId === subtaskId));
});

app.get("/users", (req, res) => {
  users = [
    {
      userId: "u001",
      firstname: "Alice",
      lastname: "Johnson",
      fullname: "Alice Johnson",
      email: "alice.j@example.com",
      age: 28,
    },
    {
      userId: "u002",
      firstname: "Bob",
      lastname: "Smith",
      fullname: "Bob Smith",
      state: "deleted",
      email: "bob.s@example.com",
      age: 35,
    },
    {
      userId: "u003",
      firstname: "Charlie",
      lastname: "Brown",
      fullname: "Charlie Brown",
      email: "charlie.b@example.com",
      age: 42,
    },
    {
      userId: "u004",
      firstname: "Diana",
      lastname: "Prince",
      fullname: "Diana Prince",
      email: "diana.p@example.com",
      age: 21,
    },
    {
      userId: "u005",
      firstname: "Ethan",
      lastname: "Hunt",
      fullname: "Ethan Hunt",
      email: "ethan.h@example.com",
      age: 50,
    },
    {
      userId: "u006",
      firstname: "Fiona",
      lastname: "Gleen",
      fullname: "Fiona Gleen",
      email: "fiona.g@example.com",
      age: 29,
    },
    {
      userId: "u008",
      firstname: "Mohamed Yassine",
      lastname: "Rachid",
      fullname: "Mohamed Yassine Rachid",
      email: "mrachid@rippling.com",
      age: 80,
    },
  ];
  if (failuresEnabled) {
    users.push({
      userId: "u007",
      firstname: "partial fields",
    });
    users.push({
      firstname: "no id",
      lastname: "Rachid",
      fullname: "no id Rachid",
      email: "noid@rippling.com",
      age: 86,
    });
  }

  res.json(users);
});

app.get("/logs", (req, res) => {
  let page = req.query.page || 1;
  const pageSize = req.query.pageSize || 10;
  const logs = [
    {
      id: 1,
      timestamp: "2025-11-14T15:00:00Z",
      message: "System startup complete. (updated 2/28)",
    },
    {
      id: 2,
      timestamp: "2025-11-14T15:00:05Z",
      message: "User 'admin' logged in from IP 192.168.1.10.",
    },
    {
      id: 3,
      timestamp: "2025-11-14T15:00:12Z",
      message: "Database connection established successfully.",
    },
    {
      id: 4,
      timestamp: "2025-11-14T15:00:25Z",
      message: "API request: GET /users/101 received.",
    },
    {
      id: 5,
      timestamp: "2025-11-14T15:00:30Z",
      message: "Processing background task 'cleanup_temp_files'.",
    },
    {
      id: 6,
      timestamp: "2025-11-14T15:00:45Z",
      message: "Warning: High CPU usage detected (85%).",
    },
    {
      id: 7,
      timestamp: "2025-11-14T15:00:58Z",
      message: "User 'guest' attempted login (failed: invalid password).",
    },
    {
      id: 8,
      timestamp: "2025-11-14T15:01:03Z",
      message: "Configuration file 'settings.yaml' loaded.",
    },
    {
      id: 9,
      timestamp: "2025-11-14T15:01:15Z",
      message: "API request: POST /orders received (Data size: 2KB).",
    },
    {
      id: 10,
      timestamp: "2025-11-14T15:01:28Z",
      message: "Database query executed in 15ms.",
    },
    {
      id: 11,
      timestamp: "2025-11-14T15:01:35Z",
      message: "Task 'cleanup_temp_files' completed (3 files removed).",
    },
    {
      id: 12,
      timestamp: "2025-11-14T15:01:40Z",
      message: "Info: Disk space remaining: 75GB.",
    },
    {
      id: 13,
      timestamp: "2025-11-14T15:01:55Z",
      message: "API request: GET /products/500 responded with 200 OK.",
    },
    {
      id: 14,
      timestamp: "2025-11-14T15:02:08Z",
      message: "Service 'notification_service' restarted.",
    },
    {
      id: 15,
      timestamp: "2025-11-14T15:02:19Z",
      message: "User 'admin' updated user profile for 'u005'.",
    },
    {
      id: 16,
      timestamp: "2025-11-14T15:02:30Z",
      message:
        "Error: Failed to connect to external service 'payments' (Timeout).",
    },
    {
      id: 17,
      timestamp: "2025-11-14T15:02:45Z",
      message: "Processing batch job 'daily_report_generation'.",
    },
    {
      id: 18,
      timestamp: "2025-11-14T15:02:59Z",
      message: "Scheduled task 'backup_db' started.",
    },
    {
      id: 19,
      timestamp: "2025-11-14T15:03:10Z",
      message: "User 'admin' logged out.",
    },
    {
      id: 20,
      timestamp: "2025-11-14T15:03:25Z",
      message: "Memory usage stabilized at 40%.",
    },
    {
      id: 21,
      timestamp: "2025-11-14T15:03:40Z",
      message: "API request: PUT /settings received.",
    },
    {
      id: 22,
      timestamp: "2025-11-14T15:03:55Z",
      message: "Batch job 'daily_report_generation' 50% complete.",
    },
    {
      id: 23,
      timestamp: "2025-11-14T15:04:05Z",
      message: "Database index optimization started.",
    },
    {
      id: 24,
      timestamp: "2025-11-14T15:04:20Z",
      message: "New session created for user 'client_a'.",
    },
    {
      id: 25,
      timestamp: "2025-11-14T15:04:35Z",
      message: "Warning: Low memory available on secondary node.",
    },
    {
      id: 26,
      timestamp: "2025-11-14T15:04:50Z",
      message: "Scheduled task 'backup_db' finished successfully.",
    },
    {
      id: 27,
      timestamp: "2025-11-14T15:05:05Z",
      message: "API request: GET /status responded with 200 OK (Latency: 5ms).",
    },
    {
      id: 28,
      timestamp: "2025-11-14T15:05:20Z",
      message: "Database index optimization completed.",
    },
    {
      id: 29,
      timestamp: "2025-11-14T15:05:35Z",
      message: "Batch job 'daily_report_generation' completed.",
    },
    {
      id: 30,
      timestamp: "2025-11-14T15:05:50Z",
      message: "System health check passed.",
    },
    {
      id: 31,
      timestamp: "2025-11-14T15:05:20Z",
      message: "some random log of 2/28 1",
    },
    {
      id: 32,
      timestamp: "2025-11-14T15:05:35Z",
      message: "some random log of 2/28 2",
    },
    {
      id: 33,
      timestamp: "2025-11-14T15:05:50Z",
      message: "some random log of 2/28 3",
    },
  ];
  const slice = logs.slice((page - 1) * pageSize, page * pageSize);
  res.json(slice);
});

app.get("/auth", (req, res) => {
  res.status(401).json({ error: "failed to authenticate" });
});

app.get("/function/parents", (req, res) => {
  const parents = [
    "12, Jeff, Bezos",
    "13, Con, Yo",
    "5, Yassine, Rachid",
    "3, Kori, Ket",
    "1, Mario, Coco",
  ];

  return res.json(parents);
});

app.get("/function/parents/:parentId/children", (req, res) => {
  const { parentId } = req.params;

  if (parentId === "12") {
    return res.json([
      "62, Kori, Bezos",
      "73, Mandos, Bezos",
      "83, Mandos, Bezos",
    ]);
  }

  if (parentId === "3") {
    return res.json(["92, Lisa, Ket", "8, Queen, Ket"]);
  }

  if (parentId === "5") {
    return res.json(["33, Kori, Rachid", "85, Mandos, Rachid"]);
  }

  if (parentId === "13" && failuresEnabled) {
    return res.status(500).json({ error: "Broken children" });
  }

  return res.json([]);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
