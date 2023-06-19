export const getUserProfile = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
      }
    })
      .then(response => response.json())  // Invoke json() as a function
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  };
  

  
