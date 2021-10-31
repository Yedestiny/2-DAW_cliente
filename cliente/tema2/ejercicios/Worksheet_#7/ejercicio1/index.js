if ("geolocation" in navigator) {
    document.write("La geolocalizacion eta disponible ");
    navigator.geolocation.getCurrentPosition(function(position) {
        document.write("Latitud " +position.coords.latitude + "<br>" + "Longitud " +position.coords.longitude);
      });
  } else {
    document.write("No funciona");
    function errorCallback(error) {
        alert('ERROR(' + error.code + '): ' + error.message);
      };
  }

  