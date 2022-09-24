document.getElementById('btn-post').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    // console.log(commentBox);
    const newComment = commentBox.value;
    // console.log(newComment);
    
    const commentsContainer = document.getElementById('comments');
    // console.log(commentsContainer);
    const p = document.createElement('p');
    p.innerText = newComment;
    commentsContainer.appendChild(p);
    commentBox.value = ' ';
})