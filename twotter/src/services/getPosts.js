import React from 'react';

export async function getAllPosts() {
    const response = await fetch('/api/posts');
    return await response.json();
}
