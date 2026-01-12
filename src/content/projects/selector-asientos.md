---
title: Selector de Asientos para Cine
desc: Plataforma web de gestión de reservas diseñada para optimizar la experiencia de usuario en la selección de asiento y automatizar el control de inventario en tiempo real para salas de cine.
challenge: Garantizar la integridad transaccional en un entorno de alta concurrencia, distinguiendo estados críticos (disponible, ocupado, seleccionado) y previniendo condiciones de carrera (race conditions) en la base de datos durante selecciones simultáneas.
solution: Creé la interfaz con jQuery y AJAX para actualizar el mapa de asientos sin recargar la página. El backend en PHP realiza consultas directas a MySQL para verificar que el asiento siga 'disponible' en el milisegundo exacto de la compra antes de guardarlo.
img: selector-asientos.webp
tech: ["PHP", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
github: https://github.com/D4RKL10N3823/selector-asientos.git
web: https://selector-asientos.adrianobregon.ninja
---