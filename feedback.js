function sendFeedback(site, page, feedback) {
  fetch("https://script.google.com/macros/s/AKfycbwuu0yyjZvKnk8UOS6H3_4J7O-6SvgDjBcrmUZK8bGZEHHoOewMELACFh_JIxWWIoO4Ug/exec", {
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
    console.log("Feedback submitted:", data);
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