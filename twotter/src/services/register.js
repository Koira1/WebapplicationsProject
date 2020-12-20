export async function register(userInfo){
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo) 
    });
    return await response.json();
}