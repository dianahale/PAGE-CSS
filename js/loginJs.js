document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener datos del formulario
    const formData = new FormData(this);

    // Convertir datos a formato JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Realizar solicitud POST al microservicio
    fetch('https://localhost:44306/api/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
          alert('Hubo un error, inténtelo mas tarde 1');
        }
        return response.json();
    })
    .then(data => {
      if(data.hasError){
        alert('Usuario o contraseña incorrectas');
      }else{
          document.cookie = "nombreCookie=" + data.model.accessToken;
          window.location.href = "index.html";
      }
    })
    .catch(error => {
        alert('Hubo un error, inténtelo mas tarde 2');
    });
  });



function getCookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for(let i = 0; i <cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}