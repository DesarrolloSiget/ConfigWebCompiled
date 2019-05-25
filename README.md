# ConfigWebCompiled


### 1. Configuración de IIS (Internet Information Server)



### 2. Instalación de ASP .NET CORE Runtime & Hosting 2.1

A continuación procedemos a instalar el Runtime para la ejecución de la aplicación en .Net Core debemos tener en cuenta los  [pre-requisitos.](https://docs.microsoft.com/es-mx/dotnet/core/windows-prerequisites?tabs=netcore2x "Pre-requisitos .Net Core") antes de continuar con la instalación de Microsoft .Net Core  

Descargamos los siguientes :
- ASP.NET Core Installer: [x64](https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.1.10-windows-x64-asp.net-core-runtime-installer "x64") | [x86](https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.1.10-windows-x86-asp.net-core-runtime-installer "x86") 
- ASP.NET Core/.NET Core: [Runtime & Hosting Bundle](https://dotnet.microsoft.com/download/thank-you/dotnet-runtime-2.1.10-windows-hosting-bundle-installer "Runtime & Hosting Bundle")

Si tiene algún problema con los enlaces de descarga valla al siguiente [enlace](https://dotnet.microsoft.com/download/dotnet-core/2.1 "enlace") para descargar lor archivos indicados.

El proceso de instalación no es complejo ya que no pedira parametros, basta con ejecutar y esperar que se complete la instalación, solo se debe tener en cuenta ejecutar en primer lugar el primer paquete; es decir, ASP.NET Core Installer de acuerdo la versión de su sistema operativo ya sea  x64 o x86.

Una vez finalizada la instalación abrimos una  ventana de linea de comandos (cmd) y ejecutamos el comando.

```bash
dotnet  --info
```
El resultado debe ser similar a este: 

![](https://www.siget.app/storage/uploads/images/dotnet-info.png)

En caso de presentar problemas es problable que alguna de las dependencias de .NET Core no este instalada en el equipo. Revisar el siguiente [enlace.](https://docs.microsoft.com/es-mx/dotnet/core/windows-prerequisites?tabs=netcore2x#net-core-dependencies "enlace")

### 3. Creación del Sitio Web en IIS

1.  Acceder al IIS.
![](https://www.siget.app/storage/uploads/images/img31.png)

2.  Presionar click derecho sobre la carpeta **Sites** y seleccionar la opción **Add Web Site.**
![](https://www.siget.app/storage/uploads/images/img32.png)

3.  Llenamos el formulario de acuerdo a la siguiente imagen (Tener en cuenta el puerto configurado para la aplicación y asegurese que otro sitio no lo este utilizando).
![](https://www.siget.app/storage/uploads/images/img33.png)

4. Entramos a la opción **Aplication Pools** y seleccionamos el pool que indicamos en el formulario anterior (AtalaiaConfigWeb)
![](https://www.siget.app/storage/uploads/images/img34.png)

5. Presionamos doble click sobre el pool seleccionado y en el formulario emergente cambiamos el valor del campo **Versión .NET CLR** por el valor **Sín código administrado**,  y presionamos aceptar.
![](https://www.siget.app/storage/uploads/images/img35.png)

6. Seleccionamos el Sitio Creado y en la parte izquierda del la ventana es cogemos la opción editar permisos. esto nos permitira editar los permisos del directorio donde localizamos los archivos del sitio, procedemos a dar control total sobre el directorio para el usuario **ISS_IUSRS** que corresponde al usuario del **IIS**

	![](https://www.siget.app/storage/uploads/images/img36.png)

	![](https://www.siget.app/storage/uploads/images/img37.png) 
 
	![](https://www.siget.app/storage/uploads/images/img38.png)
 
	![](https://www.siget.app/storage/uploads/images/img39.png) 

	![](https://www.siget.app/storage/uploads/images/img40.png)

### 4. Descarga de Proyecto y Motaje en sitio web IIS
1. Hacer clic sobre el boton Clone or Download en la parte superiror del proyecto, luego escogemos la opción Download ZIP.

	![](https://www.siget.app/storage/uploads/images/img41.png)

2. Una vez termine la descarga ubicamos el archivo en procedemos a descomprimirlo.
3. Copiamos los archivos dentro de la carpeta configurada en IIS previamente (D:\imagsa\configWeb).
4. Modificamos en el archivo web.config el parametro processPath para ejecutar la aplicación directamente desde la instalación de dotnet. Las rutas de instalación de dotnet son:  Para x64(C:\Program Files\dotnet\dotnet.exe) y para x86 (C:\Program Files (x86)\dotnet\dotnet.exe)

	![](https://www.siget.app/storage/uploads/images/img44.png)

5. Reiniciamos los servicios del ISS, abrimos una ventana de linea de comandos con privilegios de administrador y ejecutamos:
	```bash 
	dotnet  --info
	```
	![](https://www.siget.app/storage/uploads/images/img45.png)

	Luego accedemos al navedador de nuestra preferencia y colocamos en la url **http://localhost/** o  **http://127.0.0.1/**

	![](https://www.siget.app/storage/uploads/images/img45-2.png)

### 5. Configuración Inicial del Proyecto


Hasta el momento la aplicación ha quedado instalada, pero require algunos pasos adicionales para cumplir con sus objetivos.

#### Base de Datos
El proyecto cuenta con una base de datos inicial **(ParamDB.db)** la cual contiene las tablas de la aplicación vacias a exepción de los usuario.
Para cumplir con el objetivo de la aplicación se require llenar las tablas:
- **Param**, contiene los parametros de cada uno de los archivos .ini que estaran disponibles para ser manipulados por la aplicación.
- **Backup**, contiene la lista de archivos .ini que se tendran en cuenta para realizar un backup o restauración de los archivos .ini en el servidor.
- **Token**, contiene las palabras permitidas para la validación de los campos donde el tipo de formato corresponde a FORMATTOKENS.

Para cargar la información podemos usar la aplicación la aplicación [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download "SQLite Studio") la cual nos permitira editar el contenido en las tablas de la base de datos.

Una segunda opción es contar con una copia de una base de datos ya adecuada con los registros y remplazar el archivo de la base de datos por esta. Tener en cuenta que los usuario para login serian los que esten registrados en la nueva base de datos.

#### Rutas de Parametrizadas

El proyecto cuenta con un archivos de configuraciones llamado appsettings.json en la cual se deben configurar las rutas de los archivos para generar el backups, y restaurar, tambien contienen un la ruta del archivo plano con la contraseña para poder comprimir y descompimir los archivos .zip

#### Login

La base de datos inicial ya cuenta con algunos usuario por defecto para acceder de acuerdo a los roles (ADMIN, INSTALLER, READONLY). Las credenciales del administrador son:

**Usuario:**    admin@admin.com
**Contraseña:** Admin01*

Podara acceder con el y apartir de ahi administrar los demas usuarios. Se recomienda cambiar la clave de acceso para el administrador.

### 6. Consideraciones

#### Acceso desde equipos externos via web

En caso de tener problemas para acceder a la aplicación desde un equipo desde un equipo externo conectado a la red del servidor, es posible no tengas abierto el puerto configurado en el firewall, en este caso debe crear un regla de entrada para brindar acceso desde un equipo externo.

[Abrir el puerto TCP en el firewall de Windows ](https://wiki.mcneel.com/es/zoo/window7firewall)

#### Errores

Al terminar algunas instalaciones es posible que no carge la pagina de login, en su lugar carga una pagina de error **HTTP 502** esto corresponde a problemas en cuanto a la instalación o configuarción correspondiente al .NET Core. Puedes revisar el visor de eventos de windows para obtener mas información y revisar nuevamente los pasos anteriores.
