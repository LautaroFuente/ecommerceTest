const d = document;
const $btn_buy = d.getElementById('btn-buy');

d.addEventListener('click', (e) =>{
    if(e.target.matches(`#${$btn_buy.id}`)){

        window.location.href = 'https://buy.stripe.com/test_7sI9Cj6Af1rEf0QeUV';
    }
});