GridButtonClicked();

function GridButtonClicked(){
    document.getElementById("listButton").style.display = "flex";
    document.getElementById("gridButton").style.display = "none";

    document.getElementById("GridLayoutContainer").style.display = "block";
    document.getElementById("ListLayoutContainer").style.display = "none";
}

function ListButtonOnClick(){
    document.getElementById("gridButton").style.display = "flex";
    document.getElementById("listButton").style.display = "none";

    document.getElementById("ListLayoutContainer").style.display = "block";
    document.getElementById("GridLayoutContainer").style.display = "none";
}