# Conjunta-web
1.Estructura del sistema de préstamos: 
¿Cómo organizar y manipular los libros prestados usando arrays y sus métodos (push, pop, shift, unshift, splice)?

Usamos arrays y sus métodos para organizar los libros prestados, por ejemplo:
push: Agregamos un nuevo préstamo a la lista de libros prestados
pop: Eliminamos el préstamo más reciente cuando se devuelve un libro
splice: Modificamos directamente la lista al eliminar un préstamo específico



2.Filtrado y búsquedas dinámicas: 
¿Cómo implementar filtros (filter) y búsqueda de libros por título, autor o género? 

Implementamos filter para buscar libros por título, autor o género, esto nos permitió crear una función que toma los criterios ingresados por el usuario por ejemplo una palabra clave y devuelve solo los libros que coinciden con esos criterios



3.Interacción con el usuario: 
¿Cómo mostrar la lista de libros disponibles y los libros prestados usando manipulación del DOM (getElementById, querySelectorAll)? 

Usamos la manipulación del DOM para mostrar los libros disponibles y prestados directamente en la interfaz con getElementById accedimos a secciones específicas donde se desplegaron los libros y querySelectorAll seleccionamos múltiples elementos, como listas de libros o botones, para interactuar con ellos. Esto nos permitió reflejar en tiempo real los cambios en la lista de préstamos y disponibilidad en el sistema



4.Alertas y recordatorios: 
¿Cómo enviar recordatorios automáticos de devolución usando setTimeout o setInterval? 

Para los recordatorios, utilizamos setTimeout: Simulamos una alerta para notificar a los usuarios después de un periodo específico como el de devolucion y setInterval generamos alertas recurrentes para recordar a los usuarios sus préstamos pendientes


5.Eventos y usabilidad: 
¿Cómo mejorar la experiencia del usuario con eventos (onclick, onchange, onmouseover, onmouseout, onfocus, onblur)? 

Agregamos eventos comoonclick para que los botones de reservar" o "devolver respondieran al clic del usuario el cual cambia de color y tambien onchange para actualizar automáticamente la lista de libros al cambiar filtros o criterios de búsqueda
Tambien con onmouseover y onmouseout: Mejoramos la experiencia visual al resaltar elementos interactivos (como libros disponibles). Estos eventos ayudaron a que el sistema respondiera rápidamente a las acciones del usuario y fuera más fácil de usar.



6.Funciones avanzadas: 
¿Cómo usar funciones autoejecutables, anónimas, y async/await para manejar procesos asíncronos? 

Usamos funciones autoejecutables para organizar el código inicial para que se ejecutara automáticamente al cargar la página y funciones anónimas en eventos como onclick donde no necesitábamos nombrarlas explícitamente.
async/await: Simulamos procesos como verificar disponibilidad o confirmar devoluciones, asegurando que el flujo de ejecución esperara los resultados necesarios esto permitió crear un códig


7.Simulación de procesos asíncronos: 
¿Cómo implementar la reserva y devolución de libros usando promesas y setTimeout para simular tiempos de espera? 

Para la reserva y devolución de libros usamos promesas y setTimeout para simular tiempos de espera en acciones como confirmar una reserva o verificar disponibilidad para replicar un entorno realista en el que las acciones no son instantáneas, ofreciendo una experiencia más creíble para el usuario

