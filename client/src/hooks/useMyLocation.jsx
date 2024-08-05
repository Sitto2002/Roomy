import axios from "axios";

function sendLocationToBackend(location) {

    const backendUrl = 'http://your-backend-server/api/location';
    
    axios.post(backendUrl, location)
      .then(response => {
        console.log('Location sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending location:', error);
      });
  }

  export default sendLocationToBackend
  