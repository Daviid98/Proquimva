

    var divMapa =  document.getElementById('mapa');
       
        navigator.geolocation.getCurrentPosition( fn_ok,fn_mal);
        function fn_mal(){}
        function fn_ok ( rta ) {
            var lat = rta.coords.latitude;
            var lon = rta.coords.longitude;
            
            var gLatLon = new google.maps.LatLng (lat, lon);
            var objConfig = {
                zoom: 17,
                center: gLatLon
                
            }
            var gMapa = new google.maps.Map (divMapa,objConfig);
            var objConfiguracionMarker = {
                position:gLatLon ,
                map: gMapa,
                title: "Usted esta aqui"
                
            }
            var gMarker = new google.maps.Marker (objConfiguracionMarker);
        }

function procesar(idPanelCarga)
{
 //Obtener referencia a DIV de panel de carga
 var panelCarga = document.getElementById(idPanelCarga);
 
 //Mostrar DIV de panel de carga
 panelCarga.style.visibility = "visible";
 
 //Ocultar DIV de panel de carga, después de 5 segundos
 setTimeout(function() { panelCarga.style.visibility = "hidden"; }, 5000);
}


