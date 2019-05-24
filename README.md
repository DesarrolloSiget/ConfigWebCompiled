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

### 4. Descarga de Proyecto

Hacer clic sobre el boton Clone or Download en la parte superiror del proyecto, luego escogemos la opción Download ZIP.
Una vez termine la descarga ubicamos el archivo en procedemos a descomprimirlo. 
Copiamos los archivos dentro de la carpeta configurada en IIS previamente.

### 5. Configuración Inicial del Proyecto



### 6. Consideraciones
