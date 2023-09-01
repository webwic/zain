// JavaScript code to handle form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create a JSON object with the form data
  const formData = {
    name,
    subject,
    email,
    message,
  };

  // Send the data to your serverless function
  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle a successful response (e.g., show a success message)
      console.log("Email sent successfully!");
    } else {
      // Handle errors (e.g., show an error message)
      console.error("Email could not be sent.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
