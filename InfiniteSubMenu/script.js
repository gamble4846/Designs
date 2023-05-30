function ToggleOption(element){
    if(element.parentElement.parentElement.parentElement.classList.contains("open")){
        element.parentElement.parentElement.parentElement.classList.remove("open");

    }
    else{
        element.parentElement.parentElement.parentElement.classList.add("open");
    }
}

function setBackgroundColors(element){
    let AllOptionContainer = document.getElementsByClassName("OptionContainer");
    for (let index = 0; index < AllOptionContainer.length; index++) {
        let OptionContainer = AllOptionContainer[index];
        var elsParentClasses = [];
        while (OptionContainer) {
            if(OptionContainer.classList){
                for (let index2 = 0; index2 < OptionContainer.classList.length; index2++) {
                    const className = OptionContainer.classList[index2];
                    elsParentClasses.unshift(className);
                }
                OptionContainer = OptionContainer.parentNode;
            }
            else{
                break;
            }
        }

        let r = 0;
        let g = 21;
        let b = 40;
        let factor = elsParentClasses.filter(x => x == "OptionContainer").length;
        r = r * factor;
        g = g * factor;
        b = b * factor;
        AllOptionContainer[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}