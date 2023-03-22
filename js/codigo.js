const autor = document.getElementById("autorInput");
const titulo = document.getElementById("tituloInput");
const libros = JSON.parse(localStorage.getItem("libros")) ||  [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

const agregar = () => {
  const libro = {
    id: crypto.randomUUID(),
    autor: autor.value,
    titulo: titulo.value,
  };

  libros.push(libro);

  localStorage.setItem("libros", JSON.stringify(libros));
  mostrar_libros();
};

const mostrar_libros = () => {
  cuerpoTabla.innerHTML = "";
  libros.forEach((libro) => {
    cuerpoTabla.innerHTML += `<tr>
        <th scope="row">${libro.id}</th>
        <td>${libro.autor}</td>
        <td>${libro.titulo}</td>
        <td>
        <button
          type="button"
          class="btn btn-danger"
          onclick="eliminarLibros('${libro.id}')"
        >
          Eliminar
        </button><td>
    </tr>`;
  });
};

const borrar = function borracion(libro) {
  let index = usuario.findIndex (usuario => usuario.nombre == usuario);
  mostrarUsuarios.splice(idex,1);
  mostrarUsuarios();
  
}