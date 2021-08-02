
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcasapropiacolombia.com%2Fsites%2Fdefault%2Ffiles%2F2019-12%2F3_0.jpg&f=1&nofb=1" alt="c" width="1000" height="300"/>


Link: https://mi-pi-food-ft-13-mjulian90.vercel.app/


Realizar una aplicación en la cual se puedan ver los distintas recetas disponibles junto con sus detalles más relevantes utilizando la api externa https://spoonacular.com/food-api y a partir de ella poder:

Buscar recetas, filtrarlas por genero, acceder a sus detalles, ordenarlos alfabeticamente y por sus tipos de dietas, además crear nuevas recetas en una base de datos local.

## Tecnologías Utilizadas:

    - JS
    - React
    - Redux
    - Node
    - Express
    - Sequelize - Postgres


### Requerimientos mínimos:

### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

_Pagina inicial_: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

_Ruta principal_: debe contener
- [ ] Input de búsqueda para encontrar recetas por nombre
- [ ] Área donde se verá el listado de recetas. Deberá mostrar su:
  - Imagen
  - Nombre
  - Dieta
- [ ] Botones/Opciones para filtrar por tipo de dieta  y por dieta existente o agregado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por rating
- [ ] Paginado para ir buscando y mostrando las siguientes recetas

_IMPORTANTE_: Dentro de la Ruta Principal se deben mostrar tanto las recetas traidas desde la API como así también los de la base de datos. Debido a que en la API existen alrededor de 500.000 mil recetas, por cuestiones de performance pueden tomar la simplificación de obtener y paginar las primeras 50.

_Ruta de detalle de receta: debe contener
- [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, y tipo de dieta)
- [ ] Descripción
- [ ] Puntuacion
- [ ] Nivel de "comida saludable"
- [ ] Paso a paso
 
_Ruta de creación de recetas: debe contener
- [ ] Un formulario _controlado_ con los siguientes campos
   - Nombre
  - Resumen del plato
  - Puntuación
  - Nivel de "comida saludable"
  - Paso a paso
  - Imagen
- [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
- [ ] Botón/Opción para crear una nueva receta

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco son obligatorias):

- [ ] Receta con las siguientes propiedades:
  - ID: *
  - Nombre *
  - Resumen del plato *
  - Puntuación
  - Nivel de "comida saludable"
  - Paso a paso
- [ ] Tipo de dieta con las siguientes propiedades:
  - ID
  - Nombre


### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] __GET /recipes?name="..."__:
  - Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query paraeter
  - Si no existe ninguna receta mostrar un mensaje adecuado
- [ ] __GET /recipes/{idReceta}__:
  - Obtener el detalle de una receta en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de receta
  - Incluir los tipos de dieta asociados
- [ ] __GET /types__:
  - Obtener todos los tipos de dieta posibles
  - En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular [acá](https://spoonacular.com/food-api/docs#Diets)
- [ ] __POST /recipe__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
  - Crea una receta en la base de datos
