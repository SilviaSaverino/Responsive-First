import {postArray} from "./posts.js"

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

