// select navbar
function showNavbar(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('active');
}
// Select links and handle it
let links = document.querySelectorAll("#navbar li a");
let linksActive = document.querySelectorAll('#navbar li a.active');
let activePage = window.location.pathname;
function handleLinks(links){
    links.forEach((link) =>{
        linksActive.forEach(ele=>{
            ele.classList.remove('active');
        })
        if(link.href.includes(`${activePage}`)){
            link.classList.add('active');
        }
    }); 
}
handleLinks(links)