function Dropdown(){
    var x = document.getElementById("dropdown");
    if (x.className == "dropbtn") {
        x.className += "responsive";
    } else {
        x.className = "dropbtn";
    }
}