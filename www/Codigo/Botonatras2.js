

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        
     if (window.confirm('Desea cerrar sesion?'))
    window.location='index.html';
  else
    window.alert('Continua con su sesion');   
 
  
    }