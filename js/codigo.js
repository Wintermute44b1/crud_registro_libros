const autor = document.getElementById("autorInput");
const titulo = document.getElementById("tituloInput");
const condicion = document.getElementById("condicionInput");
const libros = JSON.parse(localStorage.getItem("libros")) || [];
const tabla_resultados = document.getElementById("tabla_resultados");

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
  tabla_resultados.innerHTML = "";
  libros.forEach((libro) => {
    tabla_resultados.innerHTML += `<tr>
        <th scope="row">${libro.id}</th>
        <td>${libro.autor}</td>
        <td>${libro.titulo}</td>
        <td>${libro.condicion}</td>
        <td>
        <button>
          onclick="eliminarLibros('${libro.id}')"
        >
          Eliminar
        </button><td>
    </tr>`;
  });
};
