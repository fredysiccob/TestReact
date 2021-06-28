Feature: Acceso al sistema
  Yo como usuario
  Quiero ingresar al sistema
  Para poder utilizar el sistema.

  Scenario: Ingresando al sistema
    Given que el usuario esta en la pagina de login
    When ingresa nickname "OSCOJOSE" y "Jesus-123"
    Then el sistema valida que el nickname y contraseña son validos