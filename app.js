function hidden() {
    document.getElementById("bio").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
}
hidden()

function bio() {
    document.getElementById("bio").style.display= 'block'
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
}

function projects() {
    document.getElementById("projects").style.display= 'block'
    document.getElementById("bio").style.display = "none";
    document.getElementById("resume").style.display = "none";
}

function resume() {
    document.getElementById("resume").style.display= 'block'
    document.getElementById("bio").style.display = "none";
    document.getElementById("projects").style.display = "none";
}
