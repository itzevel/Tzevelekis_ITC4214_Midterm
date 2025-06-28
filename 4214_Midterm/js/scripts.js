$(document).ready(function () {
  // Load header and footer from templates.js variables
  $("#header").html(headerHTML);
  $("#footer").html(footerHTML);

  // Check saved dark mode preference on page load
  if (localStorage.getItem("darkMode") === "true") {
    $("body").addClass("dark-mode");
    $(".navbar").addClass("navbar-dark-mode");
  }

  // Dark mode toggle with localStorage saving
  $(document).on("click", "#darkModeToggle", function () {
    $("body").toggleClass("dark-mode");
    $(".navbar").toggleClass("navbar-dark-mode");

    const isDark = $("body").hasClass("dark-mode");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  });

  // TASK MANAGEMENT

  let tasks = [];

  // Load tasks from localStorage (if any)
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const pending = total - completed;
    $("#summary").html(`Total: ${total}, Completed: ${completed}, Pending: ${pending}`);
  }

  function renderTasks() {
    $("#taskList").empty();
    tasks.forEach((task, index) => {
      $("#taskList").append(`
        <tr>
          <td>${task.name}</td>
          <td>${task.description}</td>
          <td>${task.due}</td>
          <td class="task-${task.priority.toLowerCase()}">${task.priority}</td>
          <td>${task.status}</td>
          <td>
            <button class="btn btn-success completeBtn" data-index="${index}">✔</button>
            <button class="btn btn-warning editBtn" data-index="${index}">✎</button>
            <button class="btn btn-danger deleteBtn" data-index="${index}">✖</button>
          </td>
        </tr>
      `);
    });
    updateTaskSummary();
  }

  $("#taskForm").submit(function (e) {
    e.preventDefault();
    const task = {
      name: $("#taskName").val(),
      description: $("#taskDesc").val(),
      due: $("#dueDate").val(),
      priority: $("#priority").val(),
      status: "Pending"
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    $("#taskForm")[0].reset();
  });

  $("#taskList").on("click", ".completeBtn", function () {
    const i = $(this).data("index");
    tasks[i].status = "Completed";
    saveTasks();
    renderTasks();
  });

  $("#taskList").on("click", ".deleteBtn", function () {
    const i = $(this).data("index");
    tasks.splice(i, 1);
    saveTasks();
    renderTasks();
  });

  $("#filterPriority").change(function () {
    const val = $(this).val();
    if (val === "All") {
      renderTasks();
    } else {
      const filtered = tasks.filter(t => t.priority === val);
      $("#taskList").empty();
      filtered.forEach((task, index) => {
        $("#taskList").append(`
          <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.due}</td>
            <td class="task-${task.priority.toLowerCase()}">${task.priority}</td>
            <td>${task.status}</td>
            <td>Filtered</td>
          </tr>
        `);
      });
    }
  });
});
