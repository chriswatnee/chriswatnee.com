fetch("https://status.rodeo/api/status")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("current-status").textContent = data.content;
  })
  .catch(() => {
    document.getElementById("current-status").textContent =
      "Status unavailable.";
  });