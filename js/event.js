document.getElementById('btn-update')
    .addEventListener('click', function(){
        const inputName = document.getElementById('name').value;

        const updateName = document.getElementById('name-title');
        updateName.innerText = inputName;
    })