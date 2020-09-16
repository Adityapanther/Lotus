const header = document.getElementById("header");


window.addEventListener('load', ()=>{
    
    
});


window.addEventListener("scroll", (e)=>{
   var data = scrollY
   if(data > 30){
       addStyleToHeader(true)
       
   }else if(data < 30){
       addStyleToHeader(false)
   }
   
    
})


function addStyleToHeader(data){
    if (data) {
        header.classList.remove("border-bottom");
        header.classList.add("header-sticky");
        
    }else {
      header.classList.remove("header-sticky");
      header.classList.add("border-bottom");
    }
}

