function dropDown() {
    "use strict";
    if (document.getElementById("list").style.display === "block") {
        document.getElementById("list").style.display = "none";
    } else {
        document.getElementById("list").style.display = "block";
        document.getElementById("list").style.position = "absolute";
    }
    
}