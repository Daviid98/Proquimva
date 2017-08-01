

        function salir(){
            
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
