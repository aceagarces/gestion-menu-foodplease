# 🛠️ Backend - FoodPlease

Este módulo corresponde al **backend** del sistema de gestión de productos gastronómicos *FoodPlease*. Provee una API RESTful desarrollada en **Node.js** con **Express** y **MongoDB**, permitiendo crear, leer, actualizar y eliminar productos.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Cors
- Nodemon (en entorno de desarrollo)

## 📁 Estructura del proyecto

```
backend/
│
├── controllers/         # Lógica para manejar productos
├── models/              # Definición del esquema Producto
├── routes/              # Rutas API (CRUD)
├── server.js            # Punto de entrada del servidor
├── package.json         # Dependencias del backend
└── .gitignore
```

## ▶️ Cómo ejecutar

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor:

```bash
npm run dev
```

> El servidor se ejecutará en `http://localhost:5000`

## 🌐 Endpoints disponibles

| Método | Ruta                       | Descripción               |
|--------|----------------------------|---------------------------|
| GET    | `/api/productos`          | Obtener todos los productos |
| POST   | `/api/productos`          | Crear un nuevo producto     |
| PUT    | `/api/productos/:id`      | Actualizar producto por ID  |
| DELETE | `/api/productos/:id`      | Eliminar producto por ID    |

## ⚙️ Configuración adicional

- Se utiliza `mongoose` para conectar con MongoDB y definir el modelo de datos.
- Se habilita `cors` para permitir peticiones desde el frontend en desarrollo.

## 🧪 Pruebas y desarrollo

- Las rutas fueron probadas mediante **Thunder Client**.
- La conexión con MongoDB fue verificada usando **MongoDB Compass**.
