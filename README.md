# Guía del proyecto
Esta es una guía para el desarrollo de nuestra aplicación de billetera virtual y la correcta implementación de las reglas previamente definidas por el equipo frontend.

## NPM: Gestor de comandos y dependencias
**npm run dev:** Inicia el proyecto en modo desarrollo.
**npm run build:** Prepara el proyecto para producción.
**npm run test:** Prepara el proyecto para hacer pruebas de funcionalidad.

## Estructura del proyecto
![Payout](https://github.com/user-attachments/assets/18f27ffc-f561-4977-a499-af641a93fe03)

## Estilos
Se trabajará los estilos con Tailwind CSS para tener una aplicación moderna, responsiva y adaptable a cualquier dispositivo.

## Enrutamiento
Para la navegación y enrutamiento de la aplicación utilizamos React Router en su ultima versión (actualmente v.6).

## Almacenamiento de imágenes
Para mejorar el rendimiento de la aplicación y optimizar los tiempos de carga de las imágenes/recursos estáticos podemos considerar la siguiente web: 

>  [Cloudflare images](https://blog.cloudflare.com/announcing-cloudflare-images/)

## Git
### **_Reglas para el manejo de Git en el repositorio_**
#### Flujo sugerido:

1.  **Crear una rama** para cada tarea o característica en la que trabajas partiendo de la rama **_develop_**.
2.  **Realizar y probar los cambios** en esa rama. 
3. **Hacer los commits describiendo cada cambio en inglés** y sincronizar con la rama remota.
4.  **Crear un pull request (PR)** para revisar y fusionar esos cambios en la rama principal.
5.  **Fusionar la rama** una vez que se aprueba el PR:
	5.1. **hacemos git checkout develop** 
	5.2. **git pull** para verificar si hay cambios en la rama de otro integrante.
	5.3. **git merge nombre-de-la-rama** Hacemos un merge de la rama creada a develop.
6.  **Eliminar la rama** después de la fusión, tanto en local como en remoto.

**_Formato de los commits_**
- En cada actualización de cambios en la rama definimos los nombres en inglés.
- uso de lenguaje imperativo: **_add_**, **_init_**, **_create_**, **_update_**, **_delete_**.

Para ver más opciones de tipos de commits pueden ir a este [enlace](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an).

## Validación de formularios

Para visualizar las validaciones en formularios de inicio de sesión y registro se van a utilizar las bibliotecas de **Formik y Yup**.
Estas bibliotecas nos permiten definir un esquema de datos requeridos, simple y conciso, así como también mostrar mensajes de error en caso de que un usuario ingrese datos no válidos.


## Comunicación con API - Fetching de datos

Para comunicarnos con la API del backend utilizamos Fetch y Axios.
Información adicional:
* [**FETCH**](https://lenguajejs.com/javascript/peticiones-http/fetch/)
* [**AXIOS**](https://axios-http.com/es/docs/intro)

## Documentación de componentes
Para documentar los componentes del proyecto vamos a utilizar el la herramienta JSDoc que es nativa de Javascript y permite una implementación sencilla y directa de la información sobre nuestro componente, definiendo sus propiedades y funcionalidades como guía para el desarrollador o desarrolladora que necesite conocer su forma de uso.

## Despliegue de la aplicación web
Para el despliegue del frontend utilizaremos [Vercel](https://vercel.com/).
