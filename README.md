# Ecommerce Patil
App realizada con React

### Cómo correr el proyecto

Para correr este proyecto basta con descargarlo y situarte en la carpeta en tu terminal para ejecutar los siguientes comandos:

Para instalar las dependencias necesarias (dado que en este proyecto uso algunas librerias que en su version actual chocan es necesario utilizar el --legacy-peer-deps o lanzará conflictos):
```bash
npm install --legacy-peer-deps
```

Para ejecutar la app (por defecto se alojara en http://localhost:3000/)
```bash
npm start
```
Y listo, ya puedes probarla ;)

### Descripción

Esta APP esta centrada en la interacción del usuario con los productos, por ello, incluye las siguientes funcionalidades:

* Filtros (por precio, por categoria, por stock y ordernar de forma ascendente o descendente)
* Posibilidad de añadir los productos al carrito
* Apartado de carrito donde puedes ver tus productos y eliminarlos
* App responsive!

Esta estructurada de una forma modular y se usa un context Provider para gestionar de forma global el estado del carrito en tanto añadimos o quitamos productos.

### Rutas de la APP:
* / -> La pagina principal
* /product/:id -> detalles del producto
* /cart -> tu carrito

### Tecnologias usadas
* React
* Styled components
* React Use Context
* TypeScript
* Craco
