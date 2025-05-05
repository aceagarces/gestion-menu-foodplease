# Frontend - FoodPlease 🍽️

Este proyecto corresponde al **frontend** del sistema de gestión de productos **FoodPlease**, desarrollado con **React**. La interfaz permite listar, agregar, editar y eliminar productos, consumiendo servicios RESTful desde un backend construido en Node.js con Express y MongoDB.

## 🔧 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

## 📁 Estructura

```
frontend/
│
├── public/
├── src/
│   ├── pages/
│   │   ├── Inventario.jsx
│   │   ├── AgregarProducto.jsx
│   │   └── EditarProducto.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## ▶️ Cómo ejecutar la aplicación

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:

   ```bash
   npm start
   ```

   Esto abrirá la app en `http://localhost:3000`.

> Asegúrate de que el backend esté en ejecución en `http://localhost:5000` para que las peticiones funcionen correctamente.

## 🔄 Comunicación con el backend

El frontend realiza peticiones a través de **Axios** hacia los siguientes endpoints:

- `GET /api/productos`: listar productos.
- `POST /api/productos`: crear producto.
- `PUT /api/productos/:id`: actualizar producto.
- `DELETE /api/productos/:id`: eliminar producto.

Estas peticiones se encuentran implementadas directamente dentro de los componentes React (sin archivo `api.js` separado).

## 🌐 Proxy

El archivo `package.json` contiene la siguiente línea para evitar problemas de CORS durante el desarrollo:

```json
"proxy": "http://localhost:5000"
```

Esto permite que las peticiones a `/api/...` se redirijan automáticamente al backend local.
