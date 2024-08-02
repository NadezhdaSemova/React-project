const url = 'http://localhost:3030/api/users';


export const loginSubmit = async (data) => {
    if (data) {
        let result = await fetch(`${url}/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        
        return result.json();
    }
}

export const registerSubmit = async (data) => {

    if (data) {
        let result = await fetch(`${url}/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        
        localStorage.setItem('email', result.email);
        localStorage.setItem('authToken', result.accessToken);
        localStorage.setItem('userId', result._id);
        return result;
    }
}
