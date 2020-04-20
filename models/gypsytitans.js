const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const GypsyTitansSchema = new Schema({
  name: String,
  height: Number
});

const GypsyTitans = mongoose.model('gypsytitans', GypsyTitansSchema);

module.exports = GypsyTitans;
