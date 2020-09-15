window.addEventListener('load', ()=>{
    console.log("Hi..");
    
});


document.body.onscroll( e=>{listenScroll()})
function listenScroll(){
    var data = window.scrollY;
    console.log(data);
    
}