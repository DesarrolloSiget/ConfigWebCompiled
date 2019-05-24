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



En caso de presentar problemas es problable que alguna de las dependencias de .NET Core no este instalada en el equipo. Revisar el siguiente [enlace.](https://docs.microsoft.com/es-mx/dotnet/core/windows-prerequisites?tabs=netcore2x#net-core-dependencies "enlace")

### 3. Creación del Sitio Web en IIS
### 4. Descarga de Proyecto

Hacer clic sobre el boton Clone or Download en la parte superiror del proyecto, luego escogemos la opción Download ZIP.
Una vez termine la descarga ubicamos el archivo en procedemos a descomprimirlo. 
Copiamos los archivos dentro de la carpeta configurada en IIS previamente.

### 5. Configuración Inicial del Proyecto



### 6. Consideraciones
