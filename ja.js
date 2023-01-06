const btn = document.querySelector(".btn")
const nav = document.querySelector(".container-menu")
const btni = document.querySelectorAll(".btn-li")

 btn.addEventListener('click', function(){
    nav.classList.toggle('container-add')
    
})

btni.forEach(function(li){
    li.addEventListener("click",function(){
        nav.classList.toggle('container-add')
    })
})



