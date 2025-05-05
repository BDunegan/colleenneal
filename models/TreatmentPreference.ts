import mongoose from 'mongoose';

const treatmentPreferenceSchema = new mongoose.Schema({
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

export default mongoose.models.TreatmentPreference || mongoose.model('TreatmentPreference', treatmentPreferenceSchema); 