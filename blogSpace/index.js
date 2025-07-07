const baseUrl = "https://apis.scrimba.com/jsonplaceholder";
const blogList = document.getElementById("blog-list");
const newPost =  document.getElementById("new-post");
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");

let postsArr = [];

function renderPosts() {
    let html = "";

    for (const post of postsArr) {
        html += `
            <h3>${escapeHTML(post.title)}</h3>
            <p>${escapeHTML(post.body)}</p>
            <hr/>
            `;
    }

    blogList.innerHTML = html;
}

fetch(`${baseUrl}/posts`)
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5);
        
        renderPosts()
    });

newPost.addEventListener("submit", (e)=> {
    e.preventDefault()
    
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;

    const data = {
        title: postTitle,
        body: postBody
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    
    fetch(`${baseUrl}/posts`, options)
        .then((res) => res.json())
        .then((post) => {
            postsArr.unshift(post);
            renderPosts();
            
            newPost.reset();
        });
})

function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}