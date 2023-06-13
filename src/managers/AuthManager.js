export const loginUser = (tasty_user) => {
    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: tasty_user.username,
        password: tasty_user.password
      })
    }).then(res => res.json())
  }
  
  export const registerUser = (new_user) => {
    return fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(new_user)
    }).then(res => res.json())
  }
  