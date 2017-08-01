
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
        
        
        if (window.confirm('Desea salir de la aplicacion Proquimva')){
    
            if (navigator.app) {
    navigator.app.exitApp();
} else if (navigator.device) {
    navigator.device.exitApp();
} else {
    window.close();
}

  }else{
    window.alert('Continua en la aplicacion :)');
  } 
  
  
    }












