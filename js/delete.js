document.getElementById('input-text')
    .addEventListener('keyup', function(event){
        const inputValue = event.target.value;

        const btn = document.getElementById('btn-delete');
        if(inputValue === "delete") {
            btn.removeAttribute('disabled');
        }
        else {
            btn.setAttribute('disabled', true);
        }
    })