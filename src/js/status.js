fetch("https://status.rodeo/api/users/chris/status")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("current-status").textContent = data.content;
  })
  .catch(() => {
    document.getElementById("current-status").textContent =
      "Status unavailable.";
  });