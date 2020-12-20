export async function isAuthenticated(token){
    const data = JSON.stringify({
        token: token
    })
    const response = await fetch('/api/isAuth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data,
    });

    return await response.json();
}