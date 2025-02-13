const menu = document.getElementById("navBtn");
const navigate = document.getElementById("navBar");
const sect = document.getElementsByClassName('sections')

const phoneRes = window.matchMedia("(max-width: 600px)")


matchMedia("(max-width: 600px)")

menu.onclick = function(){
    if(navigate.style.display == 'none'){
        navigate.style.display = "block";
    }
    
    else {navigate.style.display = "none"
    }
    }
    
