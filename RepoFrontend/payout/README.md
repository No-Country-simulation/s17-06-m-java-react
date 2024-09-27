# Guía del proyecto
Esta es una guía para el desarrollo de nuestra aplicación de billetera virtual y la correcta implementación de las reglas previamente definidas por el equipo frontend.

## Estructura del proyecto
```
payout-app/
  ├─ public/               # Archivos estáticos     
  ├─ assets/               # Imágenes del proyecto
  ├─ api/                  # Servicios     
  ├─ authentication/       # Componentes para la autenticación del usuario
  ├─ components/           # Componentes personalizados
  ├─ contexts/             # Contexto para la sección de transferencias
  ├─ pages/                # Componentes para las páginas de la aplicación
  ├─ index.css             # Algunos estilos generales
  ├─ vite.config.js        # Extensiones de la configuración de Vite
  ├─ tailwind.config.js    # Configuración del sistema de diseño del proyecto
```

## NPM: Gestor de comandos y dependencias
```
npm run dev - Inicia el servidor de desarrollo.
npm run build - Crea una versión optimizada de la aplicación para su despliegue.
npm run test - Prepara el proyecto para hacer pruebas de funcionalidad automatizadas.
```

## Estilos
Se trabajará los estilos con [Tailwind CSS](https://tailwindcss.com/docs/installation) para tener una aplicación moderna, responsiva y adaptable a cualquier dispositivo.

## Git
### **_Reglas para el manejo de Git en el repositorio_**
#### Flujo sugerido:

```
1. Crear una rama para la tarea o característica en la que vas a trabajar, partiendo desde la rama develop.

COMANDO: git checkout -b nombre-de-la-nueva-rama

2. Añadir los cambios y hacer los commits describiendo cada modificación con la acción en concreto.

AÑADIR CAMBIOS: git add . => (añade todos los cambios) o git add <nombre-del-archivo>

PAUTAS PARA MENSAJES DE COMMITS: Utilizar el tiempo verbal en presente y en imperativo.

Por ejemplo:
'Agrega la función de búsqueda', 'Actualiza la documentación de la API', 'Corrige el error en la validación de formularios'

3. Crear un pull request (PR) para revisar y fusionar esos cambios en la rama principal o develop según corresponda.

4. Fusionar la rama una vez que se aprueba el PR:
	4.1. Hacemos git checkout develop
	4.2. Luego: Para verificar si hay cambios de otro integrante en la rama develop hacemos git pull
	4.3. Finalmente: Hacemos una fusión de la rama creada a develop. COMANDO: git merge nombre-de-la-rama

5.  Eliminar la rama después de la fusión, tanto en local como en remoto. COMANDO: git branch -D nombre-de-la-rama

```
Para ver más opciones de tipos de commits pueden ir a este [enlace](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an).

## Validación de formularios

Para visualizar las validaciones en formularios de inicio de sesión y registro se van a utilizar las bibliotecas de **[Formik](https://formik.org/docs/tutorial) y [Yup](https://libreriasjs.com/libreria-javascript-validar-formularios-yup/)**.
Estas bibliotecas nos permiten definir un esquema de datos requeridos, simple y conciso, así como también mostrar mensajes de error en caso de que un usuario ingrese datos no válidos.

## Enrutamiento
Para la navegación y enrutamiento de la aplicación utilizamos [**React Router**](https://reactrouter.com/en/main/start/tutorial) en su ultima versión (actualmente v.6).

## Comunicación con API - Fetching de datos
Para comunicarnos con la API del backend utilizamos Fetch y Axios.<br>

#### Información adicional:
* [**FETCH**](https://lenguajejs.com/javascript/peticiones-http/fetch/)
* [**AXIOS**](https://axios-http.com/es/docs/intro)

## Documentación de componentes
Para documentar los componentes del proyecto vamos a utilizar la herramienta JSDoc que es nativa de Javascript y permite una implementación sencilla y directa de la información sobre nuestro componente, definiendo sus propiedades y funcionalidades como guía para el desarrollador o desarrolladora que necesite conocer su forma de uso.

## Despliegue de la aplicación web
Para el despliegue del frontend utilizaremos [Vercel](https://vercel.com/).
#### Comando para hacer un despliegue directo de la aplicación
```
npm run build
npx vercel --prod
```
