import mongoose from 'mongoose';

const specializationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.models.Specialization || mongoose.model('Specialization', specializationSchema); 