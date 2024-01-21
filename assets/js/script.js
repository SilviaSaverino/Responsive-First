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
            <p class="post-content hide">${post.content}</p>
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
    // renderClickedPostContent(postId)
    renderPostModal(selectedPost)
  }

//   function renderClickedPostContent(postId){
//     const postContents = document.querySelectorAll('.post-content');
//     postContents.forEach(content => content.classList.add("hide"));

//     const clickedPostContent = document.getElementById(`${postId}`).querySelector('.post-content');
//     clickedPostContent.classList.remove("hide");
// }

function renderPostModal(selectedPost) {
    // Create and show a modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal">
            <button class="modal-close-btn" id="modal-close-btn">X</button>
            <img src="${selectedPost.image}" alt="${selectedPost.title}" class="post-img ">
            <div class=""modal-content">
                <h3>${selectedPost.title}</h3>
                <p>${selectedPost.content}</p>
            </div>
        </div>
    `
    document.body.appendChild(modal);

    const modalCloseBtn = document.getElementById("modal-close-btn")
    modalCloseBtn.addEventListener("click", function(){
    closeModal(modal)
})
}

function closeModal(modal){
    document.body.removeChild(modal)
}
 