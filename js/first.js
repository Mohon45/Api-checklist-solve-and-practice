const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
// loadComment();


const displayComments = comments => {
    console.log(comments)
    const divContainer = document.getElementById('comments');
    comments.forEach (comment => {
          // console.log(comment);
          const div = document.createElement('div');
          div.classList.add('div-style');
          div.innerHTML = `
              <h4>In this user Name: ${comment.name}</h4>
              <p>Email: ${comment.email}</p>
              <p>Comment: ${comment.body}</p>
          `;
          divContainer.appendChild(div)
    });
};
