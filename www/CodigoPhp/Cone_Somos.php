

	<?php

define('DBTYPE','mysql');
define('DBHOST','127.0.0.1');
define('DBNAME','solution_proquimva');
define('DBUSER','root');
define('DBPASS','');

$cone = mysql_connect(DBHOST,DBUSER,DBPASS);
mysql_select_db(DBNAME,$cone);
if(!$cone){
	 die('Error al conectar a la base de datos'.mysql_error);
}else
	echo 'Conectado exitosamente a la base de datos';


?>