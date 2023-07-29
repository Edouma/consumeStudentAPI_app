// const fetchOrganizations = async () => {
//     try {
//       const access_token = sessionStorage.getItem('access_token'); // Retrieve access token from session storage
//       const response = await axios.get('http://127.0.0.1:8000/organisation/all', {
//         headers: {
//           'accept': 'application/json',
//           'Authorization': `Bearer ${access_token}`
//         }
//       });
//       setOrganizations(response.data);
//       console.log(organizations);
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

// Function to fetch protected data using the access token
const fetchProtectedData = async () => {
    try {
      // Get the access token from session storage
      const accessToken = sessionStorage.getItem('access_token');
  
      // Check if the access token is available
      if (!accessToken) {
        throw new Error('Access token not found. Please log in first.');
      }
  
      // Set the access token in the Authorization header for every Axios request
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
      // Make a request to the protected route (replace the URL with your protected route)
      const response = await axios.get('http://localhost:4000/students');
  
      // Handle the response here (e.g., update UI with the protected data)
      console.log('Protected Data:', response.data);
    } catch (error) {
      // Handle errors (e.g., redirect to login page if unauthorized or handle other errors)
      console.error('Error fetching protected data:', error.message);
    }
  };
  
  // Call this function whenever you want to access the protected route
  fetchProtectedData();
  