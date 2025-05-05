const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  disponible: {
    type: Boolean,
    default: true
  },
  categoria: {
    type: String,
    required: true
  },
  imagen: {
    type: String // URL o nombre de archivo si se usa subida de imágenes en el futuro
  },
  idLocal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Local', // opcional, si más adelante incorporamos autenticación de locales
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);