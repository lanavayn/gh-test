function sendFeedback(site, page, feedback) {
  fetch("https://script.google.com/macros/s/AKfycbypW-SiRt4re080LL4I2Usuy-R_QjRnNZEoLcSb2WEewqpiGiZdHxJQ47X1cmHHlEPPtA/exec", {
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