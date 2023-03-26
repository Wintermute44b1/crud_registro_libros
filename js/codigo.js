const titulo = document.getElementById("titulo_input");
const autor = document.getElementById("autor_input");
const condicion = document.getElementById("condicion_input");
const informacion = JSON.parse(localStorage.getItem("informacion")) || [];
const tabla_resultados = document.getElementById("tabla_resultados");
let editando = false;
let libro_editado = null;

const agregar_libro = () => {
  const libro = {
    id: crypto.randomUUID(),
    titulo: titulo.value,
    autor: autor.value,
    condicion: condicion.value,
  };

  informacion.push(libro);

  localStorage.setItem("informacion", JSON.stringify(informacion));
  mostrar_libros();
};

const mostrar_libros = () => {
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
  const index = informacion.findIndex((libro) => libro.id === id);
  informacion.splice(index, 1);
  localStorage.setItem("informacion", JSON.stringify(informacion));
  mostrar_libros();
};

const editar_libro = (id) => {
  editando = true;
  libro_editado = informacion.find((libro) => libro.id === id);
  titulo.value = libro_editado.titulo;
  autor.value = libro_editado.autor;
  condicion.value = libro_editado.condicion;
};