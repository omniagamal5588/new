document.getElementById('current-location-button').addEventListener('click', getCurrentLocation);

// Change the map's location based on the selected country
function changeMapLocation() {
    const countryDropdown = document.getElementById('country-dropdown');
    const selectedCountry = countryDropdown.value;
  
    switch (selectedCountry) {
      case 'usa':
        initMap(37.7749, -122.4194); // San Francisco, USA
        break;
      case 'uk':
        initMap(51.5074, -0.1278); // London, UK
        break;
      case 'france':
        initMap(48.8566, 2.3522); // Paris, France
        break;
      case 'germany':
        initMap(52.5200, 13.4050); // Berlin, Germany
        break;
      default:
        getCurrentLocation();
        break;
    }
  }
  
  // Add event listeners
  document.getElementById('country-dropdown').addEventListener('change', changeMapLocation);