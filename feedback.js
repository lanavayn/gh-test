function sendFeedback(site, page, feedback) {
  fetch("https://script.google.com/macros/s/AKfycbxqh7-ShZqd_360YlvC2P9ZMZFeSc6hrRIgFK3hP7ajysxrLUYVJkelDt7J7BhEcn3QlA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      site: site,
      page: page,
      feedback: feedback
    })
  })
  .then(response => response.json())
  .then(data => {
     console.log('Success:', data);
    document.getElementById("rating-result").textContent = "Thank you! Feedback sent.";
  })
  .catch(error => {
    console.error("Error submitting feedback:", error);
  });
}
function sendAutoFeedback(feedback) {
  const site = window.location.hostname.replace(/^www\./, ''); // e.g. "lana-bible-2025.netlify.app"
  const page = window.location.pathname.split('/').pop() || 'index'; // e.g. "about.html" or "index"

  sendFeedback(site, page, feedback);
}