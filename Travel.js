document.getElementById('itineraryForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const activities = document.getElementById('activities').value;
  
    const itineraryHTML = `
      <h3>Your Travel Itinerary</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Return Date:</strong> ${returnDate}</p>
      <p><strong>Activities:</strong></p>
      <p>${activities}</p>
    `;
  
    document.getElementById('itinerary').innerHTML = itineraryHTML;
  });