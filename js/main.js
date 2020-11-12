document.addEventListener("DOMContentLoaded", function () {
    
    let minaBtn = document.getElementById("mina");
    let skolBtn = document.getElementById("skol");
    let p = document.getElementById("projects");
    let p2 = document.getElementById("projects2");

    minaBtn.addEventListener("click",function (){
        p2.classList.add("hidden");
        p.classList.remove("hidden");
        
    });

    skolBtn.addEventListener("click",function (){
        p.classList.add("hidden");
        p2.classList.remove("hidden");
        
    });



    
  });