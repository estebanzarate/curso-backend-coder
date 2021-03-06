const mongoose = require('mongoose');

const estudiantesCollection = 'estudiantes';

const estudiantesSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	apellido: { type: String, required: true },
	edad: { type: Number, required: true },
	dni: { type: String, required: true, unique: true },
	curso: { type: String, required: true },
	nota: { type: String, required: true }
});

const estudiantes = new mongoose.model(estudiantesCollection, estudiantesSchema);

module.exports = { estudiantes };