document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var formData = new FormData(this);
    
    // Construct the URL
    var url = "https://webwic-contact.azurewebsites.net/";
    
    // Prepare the request body
    var requestBody = {
      method: 'POST',
      body: formData
    };
    
    // Send the request using fetch
    fetch(url, requestBody)
      .then(function(response) {
        if (response.ok) {
          alert("Message sent successfully!");
          // Clear the form fields
          document.getElementById("contactForm").reset();
        } else {
          alert("An error occurred while sending the message.");
        }
      })
      .catch(function(error) {
        alert("An error occurred while sending the message.");
        console.error(error);
      });
  });