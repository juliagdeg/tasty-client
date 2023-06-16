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
  

// export const getUserById = (id) => {
//     return fetch(`http://localhost:8000/tasty-users/${id}`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("auth_token")}`
//         }
//     })
//         .then(response => response.json())
// }
// before EOD, I changed server side urls, but logic is not retrieving the information I need for this specific task
// will pull changes regardless and work from there