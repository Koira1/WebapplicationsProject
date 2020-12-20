export async function logout() {
    const response = await fetch('/api/logout', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    return await response.json();
}