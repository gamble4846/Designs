
function ToggleMenu(){
    let MobileMenuElement = document.getElementById("MobileMenu");

    if(MobileMenuElement.classList.contains("open")){
        MobileMenuElement.classList.remove("open");
    }
    else{
        MobileMenuElement.classList.add("open");
    }
}