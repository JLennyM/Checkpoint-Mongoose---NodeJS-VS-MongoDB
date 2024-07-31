// models/Person.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Person Schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String] // Array of strings for favorite foods
});

// Create and export the Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
