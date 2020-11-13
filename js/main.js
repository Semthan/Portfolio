document.addEventListener("DOMContentLoaded", function () {
    
    let minaBtn = document.getElementById("mina");
    let skolBtn = document.getElementById("skol");
    let p = document.getElementById("projects");
    let p2 = document.getElementById("projects2");

    let btn = document.getElementById("nav-btn")
    let btn2 = document.getElementById("closebtn")
    let link = document.querySelector('.overlay-content')

    minaBtn.addEventListener("click",function (){
        p2.classList.add("hidden");
        p.classList.remove("hidden");
        
    });

    skolBtn.addEventListener("click",function (){
        p.classList.add("hidden");
        p2.classList.remove("hidden");
        
    });


    btn.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "100%";
    })
        
    btn2.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "0%";
    })

    link.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "0%";
    })

  });