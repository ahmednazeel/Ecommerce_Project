
// Select Products Images => Product Page
let largeImage = document.getElementById('large-image');
let smallImages = document.querySelectorAll('#small-image');
smallImages.forEach(img=>{
    img.addEventListener("click",(e)=>{
        largeImage.src= e.target.src;
    })
})