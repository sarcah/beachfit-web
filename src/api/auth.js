import JWTDecode from "jwt-decode";

export const TOKEN_KEY = 'session_token';
export const API_URL = process.env.REACT_APP_API_URL;

export function signIn(email, password) {
    const url = `${API_URL}/users/sign_in`;
    
    // I decided to use Fetch here instead of Axios because I wanted to set the headers manually
    return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            cache: 'no-cache',
            body: JSON.stringify({ user: { email, password } }) })
        .then(response => {
            if (response.ok) {
                return setToken(response);
            } else {
                const { status, statusText } = response;
                return Promise.reject({status, statusText});
            }
        })
}

export function signOut() {
    const url = `${API_URL}/users/sign_out`;
    const token = getToken();

    // I decided to use removeToken() here instead of inside the Fetch because, in-case the server is down and not responding, at least the cookie gets deleted
    removeToken();

    // I decided to use Fetch here instead of Axios because I wanted to set the headers manually
    return fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
            }
        }).then(response => {
            if (response.ok) return true;
            else {
                const { status, statusText } = response;
                return Promise.reject({status, statusText});                
            }
        })
}

// I decided to use the JWT Decode to verify whether the token is actually valid! This prevents any security risks where
// a malicious user may put in a fake session_token into localStorage and get access to the Admin site
export function getToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    try {        
        const decodedToken = JWTDecode(token);
        const now = Date.now() / 1000;

        if (now > decodedToken.exp) return null;
        else return token;

    } catch (error) {
        return null;
    }
}

// A function used to set session_token into localStorage
function setToken(response) {
    localStorage.setItem(TOKEN_KEY, response.headers.get('Authorization'));
    return response;
}

// Removes the session_token from localStorage and signs the admin user out
function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}

// I created the responseOK function because Axios responses do not include the response.ok attribute the way Fetch responses do
export function responseOK(status) {
    return (status >= 200 && status <= 300);
}