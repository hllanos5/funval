INSERT INTO roles (id_rol, nombre_rol)
VALUES
  (1, 'Usuario'),
  (2, 'Soporte Técnico');
INSERT INTO usuarios (id_usuario, nombre, email, password, id_rol)
VALUES
  (1, 'Juan Pérez', 'jp@example.com', '123456', 1),
  (2, 'María García', 'mg@example.com', '123456', 1 ),
  (3, 'Pedro López', 'pl@example.com', '123456', 2 ),
  (4, 'Ana Romero', 'ar@example.com', '123456', 1 ),
  (5, 'Carlos Jiménez', 'cj@example.com', '123456', 1);

INSERT INTO tareas (id_tarea, titulo, descripcion, fecha_limite, estado, id_usuario_creador)
VALUES
  (1, 'Desarrollar nueva función', 'Implementar la funcionalidad de búsqueda avanzada para las tareas.', '2024-07-24 09:58:00', 'pendiente', 1),
  (2, 'Corregir error en el módulo de reportes', 'Solucionar el problema de generación de informes incorrectos.', '2024-07-18 09:58:00', 'en_progreso', 2),
  (3, 'Implementar nueva interfaz de usuario', 'Diseñar y desarrollar una interfaz de usuario más intuitiva para la aplicación.', '2024-07-31 09:58:00', 'pendiente', 3),
  (4, 'Actualizar la documentación', 'Redactar y actualizar la documentación de la aplicación para usuarios nuevos.', '2024-07-25 09:58:00', 'pendiente', 4),
  (5, 'Realizar pruebas de usabilidad', 'Realizar pruebas de usabilidad con usuarios reales para evaluar la experiencia de usuario de la aplicación.', '2024-07-29 09:58:00', 'pendiente', 5);

INSERT INTO seguimiento_tareas (id_seguimiento, id_tarea, id_usuario_seguimiento, comentario)
VALUES
  (1, 1, 2, 'He revisado la implementación de la nueva función y parece correcta.'),
  (2, 2, 1, 'Estoy trabajando en la corrección del error, he encontrado el problema principal.'),
  (3, 3, 3, 'He realizado un bosquejo inicial del diseño de la nueva interfaz de usuario.'),
  (4, 1, 1, 'He agregado algunas mejoras a la implementación de la búsqueda avanzada.'),
  (5, 2, 5, 'He identificado algunos problemas de usabilidad en la pantalla principal de la aplicación.');
