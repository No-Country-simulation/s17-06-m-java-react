# Guía del proyecto
Esta es una guía para el desarrollo de nuestra aplicación de billetera virtual y la correcta implementación de las reglas previamente definidas por el equipo frontend.

## NPM: Gestor de comandos y dependencias
**npm run dev:** Inicia el proyecto en modo desarrollo.
**npm run build:** Prepara el proyecto para producción.
**npm run test:** Prepara el proyecto para hacer pruebas de funcionalidad.

## Estructura del proyecto
payout-app/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ assets/
│  ├─ api/
│  ├─ authentication/
│  ├─ components/
│  ├─ contexts/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ global.css
│  ├─ index.css
│  ├─ main.jsx
├─ .gitignore
├─ package.json
├─ package-lock.json

## Estilos
Se trabajará los estilos con Tailwind CSS para tener una aplicación moderna, responsiva y adaptable a cualquier dispositivo.

## Enrutamiento
Para la navegación y enrutamiento de la aplicación utilizamos React Router en su ultima versión (actualmente v.6).

## Almacenamiento de imágenes
Para mejorar el rendimiento de la aplicación y optimizar los tiempos de carga de las imágenes/recursos estáticos podemos considerar la siguiente web: 

>  [Cloudflare images](https://blog.cloudflare.com/announcing-cloudflare-images/)

## Git

El flujo de trabajo en este caso va a ser sobre la rama "_develop_" y posteriormente se implementarán los cambios de cada sprint en la rama *"_main_"*.

**_Formato de los commits_**
- En cada actualización de cambios en la rama definimos los nombres en inglés.
- uso de lenguaje imperativo: **_add_**, **_init_**, **_create_**, **_update_**, **_delete_**.

**_Manejo de ramas individuales_**
Para cada tarea asignada separamos desde *"develop"* una rama temporal con nombre de quien la crea o una palabra que describa la parte, característica o feature en la que vamos a trabajar. Por ejemplo: 
> **name/login** o **create login**  
> **name/signup** o **create signup**
>  **name/global-styles** o **create-global-styles**
>  **name/navbar** o **create navbar**

Para ver más opciones de tipos de commits pueden ir a este [enlace](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an).

## Validación de formularios

Para visualizar las validaciones en formularios de inicio de sesión y registro se van a utilizar las bibliotecas de **Formik y Yup**.
Estas bibliotecas nos permiten definir un esquema de datos requeridos, simple y conciso, así como también mostrar mensajes de error en caso de que un usuario ingrese datos no válidos.


## Comunicación con API - Fetching de datos

Para comunicarnos con la API del backend utilizamos Fetch y Axios.
Información adicional:
* [**FETCH**](https://lenguajejs.com/javascript/peticiones-http/fetch/)
* [**AXIOS**](https://axios-http.com/es/docs/intro)

## Despliegue de la aplicación web
Para el despliegue del frontend utilizaremos [Netlifly](https://www.netlify.com/).
