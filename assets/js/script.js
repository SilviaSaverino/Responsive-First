import { postArray } from "./posts.js"
const revealPostBtn = document.getElementById("reveal-post-btn")
var currentPage = window.location.pathname

function renderPosts() {
  const singlePostHtml = postArray.map(function (post) {
    return `
        <div class="posts" id="${post.id}">
          <img class="post-img" src="${post.image}">
          <div class="post-info">
            <h3>${post.title}</h3>
            <p>${post.preview}</p>
            <p class="post-content hide">${post.content}</p>
          </div>
        </div>
      `
  }).join('')
  document.getElementById("container").innerHTML = singlePostHtml
  //Assign click event listeners to each post for handling post clicks
  document.querySelectorAll('.posts').forEach(post => post.addEventListener('click', handlePostClick))
}

if (currentPage.includes('about.html')) {
  document.getElementById("container").innerHTML = ''
} else {
  renderPosts()
}

revealPostBtn.addEventListener("click", () => { renderPosts(); revealPostBtn.classList.add("hide") })

function handlePostClick(e) {
  // Get the id of the clicked post
  const postId = e.currentTarget.id
  // Find the selected post in postArray based on the clicked id
  const selectedPost = postArray.find(post => post.id.toString() === postId)
  renderPostModal(selectedPost)
}

function renderPostModal(selectedPost) {
  makePostsUnclickable()
  // Create and show a modal
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = `
        <div class="modal">
            <button class="modal-close-btn" id="modal-close-btn">X</button>
            <img src="${selectedPost.image}" alt="${selectedPost.title}" class="post-img modal-img">
            <div class="modal-content">
                <h3>${selectedPost.title}</h3>
                <p>${selectedPost.content}</p>
            </div>
        </div>
    `
  document.body.appendChild(modal)

  document.getElementById("modal-close-btn").addEventListener("click", () => closeModal(modal))
}

function makePostsUnclickable() {
  document.querySelectorAll('.posts').forEach(post => post.classList.add('unclickable-posts'))
}

function closeModal(modal) {
  document.body.removeChild(modal)
  makePostsClickableAgain()
}

function makePostsClickableAgain() {
  document.querySelectorAll('.posts').forEach(post => post.classList.remove('unclickable-posts'))
}