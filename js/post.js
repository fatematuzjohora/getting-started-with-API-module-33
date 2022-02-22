function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(post){
    const postContainer = document.getElementById('posts');
    for(const posts of post){
        const div = document.createElement('div');
        div.classList.add('posts');
        div.innerHTML = `
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(posts);
    }
}
