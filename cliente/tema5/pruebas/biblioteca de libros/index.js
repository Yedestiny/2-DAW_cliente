function añadirlibro(e) {
    e.preventDefault();
    let tabla = document.getElementById("biblioteca");
    let nombre = document.getElementById("nombre").value;
    let autor = document.getElementById("autor").value;
    let tr = document.createElement("tr");
    tr.innerHTML = '<tr> <td>' + nombre + '</td><td>' + autor + '</td><td>No leido</td></tr>';
    tabla.appendChild(tr);
};




document.getElementById("añadir").addEventListener("click", añadirlibro);