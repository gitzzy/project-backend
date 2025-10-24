const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logo: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
