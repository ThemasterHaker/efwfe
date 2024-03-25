// Add frontend JavaScript code here

// Example: Fetch data from the backend
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data from the backend:', data);
    // Do something with the data
  })
  .catch(error => console.error('Error fetching data:', error));

// Example: Handle form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  
  // Example: Send form data to the backend
  fetch('/api/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObject)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Response from the backend:', data);
    // Do something with the response
  })
  .catch(error => console.error('Error submitting form:', error));
});
