export async function createPost(data) {
    const response = await fetch('/api/newpost', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return await response.json();
}