function formatStatusTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  if (hours < 48) {
    return "Yesterday";
  }

  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

fetch("https://status.rodeo/api/users/chris/status")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("current-status").textContent = data.content;

    document.getElementById("status-time").textContent =
      formatStatusTime(data.created_at);
  })
  .catch(() => {
    document.getElementById("current-status").textContent =
      "Status unavailable.";
  });