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

  // Disable the submit button and show the loading symbol
  const submitButton = document.getElementById("submitButton");
  const loadingSymbol = document.getElementById("loadingSymbol");
  submitButton.disabled = true;
  loadingSymbol.style.display = "block";

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
      // Hide the loading symbol and show the success message
      loadingSymbol.style.display = "none";
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } else {
      console.log(error);
      // Handle errors (e.g., show an error message)
      console.error("Email could not be sent.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
  }
});
