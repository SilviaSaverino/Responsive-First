import {postArray} from "./posts.js"
const revealPostBtn = document.getElementById("reveal-post-btn")
var currentPage = window.location.pathname

function renderPosts(){
    const singlePostHtml = postArray.map(function(post){
        return `
        <div class="posts">
            <img class="post-img" src="${post.image}">
            <div class="post-info">
                <h3>${post.title}</h3>
                <p> ${post.preview} </p>
            </div>
        </div>
    `
    }).join('')

    document.getElementById("container").innerHTML = singlePostHtml
}

if (currentPage === '/about.html') {
    document.getElementById("container").innerHTML = ''
    console.log('this is the about page')
} else {
    renderPosts()
}

revealPostBtn.addEventListener("click", function() {
    renderPosts()
})

