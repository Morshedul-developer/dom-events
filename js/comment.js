document.getElementById('btn-comment')
    .addEventListener('click', function(){
       const inputText = document.getElementById('input-text');
       const inputValue = inputText.value;
       
       const commentContainer = document.getElementById('comment-container');

       const p = document.createElement('p');
       p.classList.add('comment');
       p.innerText = inputValue;

       commentContainer.appendChild(p);

       inputText.value = '';
    });