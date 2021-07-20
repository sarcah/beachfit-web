const TOKEN_KEY = 'session_token';
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
                return [response.json(), setToken(response.headers.get('Authorization'))];
            } else {
                const { status, statusText } = response;
                return [response.json(), Promise.reject({status, statusText})];
            }
        }).catch()
}

export function signOut() {
    const url = `${API_URL}/users/sign_out`;
    return fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Authorization': getToken()
            }
        }).then(response => {
            if (response.ok) return removeToken();
            else {
                const { status, statusText } = response;
                return Promise.reject({status, statusText});                
            }
        })
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
    return token;
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}