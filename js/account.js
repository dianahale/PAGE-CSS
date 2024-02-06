document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener datos del formulario
    const formData = new FormData(this);

    // Convertir datos a formato JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Realizar solicitud POST al microservicio
    fetch("https://localhost:44306/api/Account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        if (data.hasError) {
          alert("Revisa los datos ingresados");
        } else {
          alert("Registro exitoso");
          // Limpiar el formulario
          this.reset();
        }
      })
      .catch((error) => {
        alert("Hubo un error en el registro");
      });
  });
