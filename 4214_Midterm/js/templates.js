const headerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="index.html">
      <img src="images/logo.png" alt="FitTrack Logo" width="30" class="me-2">
      FitTrack
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="tasks.html">Tasks</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="fitness.html">Fitness</a></li>
      </ul>
      <button id="darkModeToggle" class="btn btn-outline-dark ms-3">🌙</button>
    </div>
  </div>
</nav>
`;

const footerHTML = `
<footer class="bg-dark text-white mt-5">
  <div class="container py-4 text-center">
    <img src="images/logo.png" alt="FitTrack Logo" width="50" class="mb-2">
    <p class="mb-0">&copy; 2025 FitTrack. All rights reserved.</p>
    <div class="mt-2">
      <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
      <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
      <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
    </div>
  </div>
</footer>
`;
