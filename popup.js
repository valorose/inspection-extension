document.getElementById('search-button').addEventListener('click', function () {
  const restaurantName = document.getElementById('restaurant-name').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');

  // For now, just mock up a response
  const inspectionData = {
    "cafe bergen": "Passed",
    "restaurant abc": "Failed",
  };

  if (restaurantName && inspectionData[restaurantName]) {
    resultsDiv.textContent = `Inspection result: ${inspectionData[restaurantName]}`;
  } else {
    resultsDiv.textContent = 'No data found.';
  }
});
