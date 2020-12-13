Template Web con mongo-db

Objetivo crear un proyecto: Web con una base de datos + Ingest Data + Transform y guardar en una base de datos.

Arquitectura web.
React con Spring Boot -> MongoDB. Las parte de frontend y backend de la pagina web se van a comunicar mediante el uso de una API sobre HTTP

Antes de lanzar el docker compose hay que entrar en la carpeta web/client y ejecutar el siguiente comando.
Estamos creando la imagen que va a ser utiliza posteriormente en el docker-compose.

Primero construimos la imagen de la web.
% docker build --tag web_cdc:1.0 .

Cambiamos a la carpeta server y lanzamos construimos la imagen del server.
% docker build --tag web_server_cdc:1.0 .

