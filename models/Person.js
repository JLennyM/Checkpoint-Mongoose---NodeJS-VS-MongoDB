// models/Person.js
const mongoose = require('../db');

// Define Person Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name is required
  age: Number,
  favoriteFoods: [String,]  // Array of strings for favorite foods
});

// Create and export the Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
