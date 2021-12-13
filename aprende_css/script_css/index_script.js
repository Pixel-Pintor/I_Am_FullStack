let estado = "none";

function openMenu(id) {
    console.log("Primer estado: " + estado);
    if (estado === "none") {
        estado = document.getElementById(id).style.display = "block";
        console.log("Ahora soy Block");
    } else if (estado === "block") {
        estado = document.getElementById(id).style.display = "none";
        console.log("Ahora soy None")
    }
}