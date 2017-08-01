


function validar(){

       
        
	var Usuario = "proquimva@limpieza.com";
	var Contrase = "admin";
	var LogueadoInicio = "LogueadoInicio";
	var user,pass;
	
	
	user=document.getElementById("usuario").value;
	pass=document.getElementById("pass").value;
	
	if(user !== Usuario){
		
		alert("El usuario es incorrecto");
		return false;
		
	}else{
            
		if(pass !== Contrase){
			
			alert("Contraseña incorrecta");
			return false;
			
		}else{ 
                 
                alert("Usuario y contraseña correctos");
                 var regre=window.open('LogueadoInicio.html','location=yes');
                 return false;
            
                }
	}
	
};