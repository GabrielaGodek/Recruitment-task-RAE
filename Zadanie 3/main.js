const btn = document.querySelector('button')
const textValue = document.querySelector('textarea')


function copyText(){
    textValue.select();
    document.execCommand('copy');
    alert('Thx for copying me 🤗')
}

btn.addEventListener('click', copyText)
