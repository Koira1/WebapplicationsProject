export async function login(userinfo) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userinfo)
    });
    return await response.json();
}