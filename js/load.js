var myVar;

function showPage() {
    "use strict";
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";
}
function myFunction() {
    "use strict";
    myVar = setTimeout(showPage, 1000);
}

