const titulo = document.getElementById("titulo_input");
const autor = document.getElementById("autor_input");
const condicion = document.getElementById("condicion_input");
const informacion = JSON.parse(localStorage.getItem("informacion")) || [];
const tabla_resultados = document.getElementById("tabla_resultados");


const agregar_libro= () => {
  const libro = {
    id: crypto.randomUUID(),
    titulo: titulo.value,
    autor: autor.value,
    condicion:condicion.value,
  };

  libros.push(libros);

  localStorage.setItem("libros", JSON.stringify(libros));
  mostrar_libros();
};

const mostrar_libros= () => {
  tabla_resultados.innerHTML = "";
  informacion.forEach((libro) => {
    tabla_resultados.innerHTML += `<tr>
        <th scope="row">${libro.id}</th>
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.condicion}</td>
        <td>
        <button
          type="button"
          class="btn btn-danger"
          onclick="eliminar_libro('${libro.id}')"
        >
          Eliminar
        </button>
        <td>
        <td>
        <button
          type="button"
          class="btn btn-warning"
          onclick="editar_libro('${libro.id}')"
        >
          Editar
        </button>
        </td>
    </tr>`;
  });
};

const eliminar_libro = (id) => {
  const libro= informacion.find((libro) => libro.id === id)
  const index = informacion.indexOf(libro)
  informacion.splice(index, 1)
  localStorage.setItem("informacion", JSON.stringify(informacion));
  mostrar_libros();
};
