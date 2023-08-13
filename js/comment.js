document.getElementById('post').addEventListener('click',function(){
    const com = document.getElementById('new-comment')
    const newcom = com.value;
    const comment = document.createElement('p');
    comment.innerText = newcom;
    com.value ="";
    document.getElementById('all-comments').appendChild(comment);
});