import JWTDecode from "jwt-decode";

export const TOKEN_KEY = 'session_token';
export const API_URL = process.env.REACT_APP_API_URL;


export function signIn(email, password) {
    const url = `${API_URL}/users/sign_in`;
    
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
    removeToken();
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

function setToken(response) {
    localStorage.setItem(TOKEN_KEY, response.headers.get('Authorization'));
    return response;
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}