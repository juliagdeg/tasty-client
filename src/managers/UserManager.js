export const getUsers = () => {
    return fetch("http://localhost:8000/profile", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json)
}

export const getUserById = (id) => {
    return fetch(`http://localhost:8000/tasty-users/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
// before EOD, I changed server side urls, but logic is not retrieving the information I need for this specific task
// will pull changes regardless and work from there