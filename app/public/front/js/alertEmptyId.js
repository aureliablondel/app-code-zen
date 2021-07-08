let pseudo = document.getElementByI('pseudo');
let btn = document.querySelector('.btn-submit');

btn.addEventListener('click', (event)=>{
    if(pseudo.value = ""){
        window.alert('Vous devez renseigner tous les champs.');
}
})