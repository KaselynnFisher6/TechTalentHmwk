function myDisplayer(value) {
    document.getElementById("demo").innerHTML = value;
}

function getFile(myCallback) {
    let request = new XMLHttpRequest ();
    request.open("GET", "tinman.html");
    request.onload = function() {
        if(request.status == 200) {
            myCallback(this.responseText);
        }
        else
        {
            myCallback("Error: " + request.status);
        }
    }
    request.send();
}

getFile(myDisplayer);
