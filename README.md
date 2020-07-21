# TODO list colaborativa

## Premisa
Crear una APP donde se pueda logar por usuario distribuidos por grupos. Entre las funcionalidades de cada usuario, está la de poder hacer un CRUD de tareas y que sea visible en el ámbito de su grupo de asignación.

## Descripción
Está realizado con Redux como fuente de datos y para la persistencia para probar el ejercicio he usado Local Storage. Se puede probar dentro de la sesión del navegador interactuando con diferentes usuarios.

Se ha distribuido los compoenentes de la manera más atómica posible buscando el equilibrio entre reutilización y repetición de código.

## Instalación y ejecución
```
$ cd todo-list-holamundo
$ npm install
$ npm start
```

## Librerías usadas
- Bootstrap
- Redux

## Instrucciónes

### Página de login
Puedes logarte con el nombre o usar los botes del listado para entrar en cada usuario con un click. En cualquier momento puedes cambiar de usuario pulasndo en el link LOGOUT que encontrarás en la cabecera de la aplicación en todo momento.

### Página de tareas

#### Crear
A través del formulario del top de la página se pueden crear nuevas tareas

#### Editar
Pulsando en el botón EDITAR de la tarjeta se puede acceder al modal con el formulario para editarla

#### Borrar
Para borrar puedes pulsar en el botón BORRAR que se encuentra en cada tarjeta
