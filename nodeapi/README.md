
Para arrancar MongoDB escribimos:

Podemos guardar este comando en un fichero .sh para Linux y Mac o en un .bat o .cmd para Windows

bin/mongod --dbpath ./data/db --directoryperdb

En mi caso en Windows he necesitado:
acceder a:
C:\
cd "Program Files"\MongoDB\Server\3.4

Comando:
bin\mongod --dbpath c:\data\db --directoryperdb




Para arrancar el cliente:
bin\mongo