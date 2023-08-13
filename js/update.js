document.getElementById('update').addEventListener('click', function(){
    const text1 = document.getElementById('input');
    const p =text1.value
    const update = document.getElementById('text')
    update.innerText = p;
    text1.value = '';
    document.getElementById('text').style.color ="purple";
})