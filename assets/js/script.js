import {postArray} from "./posts.js"
const revealPostBtn = document.getElementById("reveal-post-btn")
var currentPage = window.location.pathname

function renderPosts() {
    const singlePostHtml = postArray.map(function(post) {
      return `
        <div class="posts" id="${post.id}">
          <img class="post-img" src="${post.image}">
          <div class="post-info">
            <h3>${post.title}</h3>
            <p>${post.preview}</p>
          </div>
        </div>
      `
    }).join('')
  
    document.getElementById("container").innerHTML = singlePostHtml
    
    //Assign click event listeners to each post for handling post clicks
    const posts = document.querySelectorAll('.posts')
    posts.forEach(post => post.addEventListener('click', handlePostClick))
  }
  
  if (currentPage === '/about.html') {
    document.getElementById("container").innerHTML = ''
    console.log('this is the about page')
  } else {
    renderPosts()
  }
  
  revealPostBtn.addEventListener("click", function() {
    renderPosts()
    revealPostBtn.classList.add("hide")
  });
  
  function handlePostClick(e) {
    // Get the id of the clicked post
    const postId = e.currentTarget.id
    // Find the selected post in postArray based on the clicked id
    const selectedPost = postArray.find(post => post.id.toString() === postId)
    console.log(selectedPost)
  }