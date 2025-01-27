const libros = [
    { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Ficción", disponible: true },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
  ];

  const prestamos = [];

  const renderLibros = () => {
    const listaLibros = document.getElementById("lista-libros");
    const listaPrestamos = document.getElementById("lista-prestamos");

    listaLibros.innerHTML = "";
    listaPrestamos.innerHTML = "";

    libros.forEach(libro => {
      const div = document.createElement("div");
      div.className = "libro";
      div.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <div class="acciones">
          ${libro.disponible
            ? `<button class="reservar" onclick="reservarLibro(${libro.id})">Reservar</button>`
            : `<button class="devolver" onclick="devolverLibro(${libro.id})">Devolver</button>`
          }
        </div>
      `;
      if (libro.disponible) {
        listaLibros.appendChild(div);
      }
    });

    prestamos.forEach(libro => {
      const div = document.createElement("div");
      div.className = "libro";
      div.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <div class="acciones">
          <button class="devolver" onclick="devolverLibro(${libro.id})">Devolver</button>
        </div>
      `;
      listaPrestamos.appendChild(div);
    });
  };

  const reservarLibro = (id) => {
    const libro = libros.find(libro => libro.id === id);
    if (libro && libro.disponible) {
      libro.disponible = false;
      prestamos.push(libro);
      alert(`Has reservado "${libro.titulo}".`);
      renderLibros();
    }
  };

  const devolverLibro = (id) => {
    const index = prestamos.findIndex(libro => libro.id === id);
    if (index !== -1) {
      const libro = prestamos.splice(index, 1)[0];
      libro.disponible = true;
      alert(`Has devuelto "${libro.titulo}".`);
      renderLibros();
    }
  };

  const buscarLibros = () => {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const resultados = libros.filter(libro =>
      libro.titulo.toLowerCase().includes(busqueda) ||
      libro.autor.toLowerCase().includes(busqueda) ||
      libro.genero.toLowerCase().includes(busqueda)
    );
    if (resultados.length > 0) {
      alert(`Se encontraron ${resultados.length} libro(s).`);
    } else {
      alert("No se encontraron libros.");
    }
  };

  renderLibros();