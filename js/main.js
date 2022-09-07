// toggle menu
toggleBtn = document.querySelector('.icone');
links = document.querySelector('.links');

toggleBtn.onclick = function(e){
  links.classList.toggle('open')
  this.classList.toggle('menu-active')
  e.stopPropagation();
}

document.addEventListener("click" , (e)=>{
  if(e.target!== toggleBtn &&e.target !== links){
    if(links.classList.contains("open")){
      links.classList.remove("open")
      toggleBtn.classList.remove("menu-active")
    }
  }
})
links.onclick= function (e){
  e.stopPropagation()
}