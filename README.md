# curso-ionic-ejercicio05-login
Ejercicio para el tema 5 del curso de Ionic

## Enunciado

Se parte de una app que tiene las siguientes páginas:

- Home
- Gestión de clientes
- Gestión de proveedores
- Gestión de pedidos
- Gestión de facturas

Y un servicio AuthService con los siguientes métodos ya implementados:

- login()
- logout()
- isLogged()
- getLastLoginErrorMessage()

Se pide: 

1) Crear una página de login utilizando componentes de interfaz de Ionic. (Recomendaciones: ion-card, ion-input, ...). En vez de una página de login, podría ser una modal que aparezca sobre la página de home (ion-modal)
  - La página de login debe mostrar algún elemento de feedback para indicar al usuario que se están verificando las credenciales. (Recomendación: ion-loading, ion-spinner...)
  - Si las credenciales no son correctas, se mostrará un mensaje al usuario. (Recomendaciones: ion-toast, ion-alert, ...)
2) Crear un menú lateral que solamente sea accesible después de haber hecho login correctamente. Este menú debe permitir acceder a todas las páginas de gestión.
3) Crear algún mecanismo para "salir" de la parte privada (hacer logout). Al hacer logout el sistema te llevará a la página Home.

**NO se debe modificar el servicio AuthService.**

