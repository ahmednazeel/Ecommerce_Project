// Select Products Box => Shop Page
let productPageImage =document.getElementById('large-image');
let arrPro = document.querySelectorAll('.product-box');
arrPro.forEach(pro=>{
    pro.addEventListener('click',() => {
        window.location.href ='productDetails.html';
    });
});