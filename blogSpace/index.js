const baseUrl = "https://apis.scrimba.com/jsonplaceholder";
const blogList = document.getElementById("blog-list");

fetch(`${baseUrl}/posts`)
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);
        let html = ""

        for(const post of postsArr) {
            html += 
            `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
        }

        blogList.innerHTML = html;
    });