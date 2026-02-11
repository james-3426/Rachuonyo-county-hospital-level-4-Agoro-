function showAlert() {
  alert("Appointment booking coming soon!");
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}
document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    service: document.getElementById("service").value
  };

  const res = await fetch("http://localhost:5000/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});fetch("http://192.168.1.10:5000/api/appointments", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});fetch("https://your-backend-url.onrender.com/api/appointments", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});