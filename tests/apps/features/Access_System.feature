Feature: Acceso al sistema
	Yo como usuario
	Quiero ingresar al sistema
	Para poder utilizar el sistema.

  Scenario: El usuario ingresando datos validos
	Given que el usuario visualiza el formulario para ingresar al sistema
	When ingrese nickname "OSCOJOSE" o "josornio@siccob.com.mx"
	  And su contraseña "Jesus-123"
	  And seleccione ingresar
	Then el sistema valida que el nickname y contraseña son validos
	And redirecciona a la pagina de inicio de Notificaciones.