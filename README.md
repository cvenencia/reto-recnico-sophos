# Reto técnico de Sophos

## Lenguajes usados

-   Java (Spring Boot)
-   Javascript (React)
-   Oracle Database

## Base de datos

En la carpeta **/db** se encuentran los scripts para crear las tablas y poblar la base de datos con datos de prueba. El archivo _[script.sql](db/script.sql)_ une todos los scripts en uno solo para fácil uso.

## Servidor

Para configurar la conexión con la base de datos, se debe modificar el archivo _[application.properties](server/src/main/resources/application.properties)_:

-   La URL de conexión
-   Usuario
-   Contraseña

En este mismo archivo se encuentra una fecha que representa la fecha actual en la que se hacen las pruebas. Esto para asegurar que los datos usados de prueba son consistentes sin importar cuando se pruebe la aplicación.

Para ejecutar el servidor back-end en Windows:

    cd server
    ./mvnw.cmd spring-boot:run -e

## Cliente

Por último, para configurar la conexión con la aplicación web con el back-end, se debe modificar el archivo _[.env](client/.env)_ con la URL del servidor.

Para ejecutar el servidor front-end:

    cd client
    npm install
    npm start
