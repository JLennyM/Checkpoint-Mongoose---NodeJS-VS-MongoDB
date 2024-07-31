// Function to create and save a new person
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: 'John Doe', // Name of the person
      age: 30, // Age of the person
      favoriteFoods: ['Pizza', 'Burgers'] // List of favorite foods
    });
    // Save the new person to the database
    const data = await person.save();
    console.log('Person saved:', data);
  } catch (err) {
    console.error('Error saving person:', err);
  }
};

// Function to create multiple people at once
const createManyPeople = async (arrayOfPeople) => {
  try {
    // Create multiple people from an array of objects
    const people = await Person.create(arrayOfPeople);
    console.log('People added:', people);
  } catch (err) {
    console.error('Error creating people:', err);
  }
};

// Function to find all people with a given name
const findPeopleByName = async (name) => {
  try {
    // Find all documents with the specified name
    const people = await Person.find({ name });
    console.log('People found:', people);
  } catch (err) {
    console.error('Error finding people by name:', err);
  }
};

// Function to find one person by their favorite food
const findOneByFavoriteFood = async (food) => {
  try {
    // Find one document where the favoriteFoods array contains the specified food
    const person = await Person.findOne({ favoriteFoods: food });
    console.log('Person found:', person);
  } catch (err) {
    console.error('Error finding person by favorite food:', err);
  }
};

// Function to find a person by their ID
const findPersonById = async (personId) => {
  try {
    // Find a document by its unique ID
    const person = await Person.findById(personId);
    console.log('Person found by ID:', person);
  } catch (err) {
    console.error('Error finding person by ID:', err);
  }
};

// Function to update a person's favoriteFoods and save the updated document
const findEditThenSave = async (personId) => {
  try {
    // Find the person by their ID
    const person = await Person.findById(personId);
    person.favoriteFoods.push('hamburger'); // Add a new food to the favoriteFoods array
    // Save the updated person back to the database
    const updatedPerson = await person.save();
    console.log('Updated person:', updatedPerson);
  } catch (err) {
    console.error('Error updating and saving person:', err);
  }
};

// Function to find a person by name and update their age
const findAndUpdate = async (personName) => {
  try {
    const ageToSet = 20; // New age to set
    // Find one document by name and update the age, return the updated document
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName }, // Query object
      { age: ageToSet }, // Update object
      { new: true } // Options: return the updated document
    );
    console.log('Updated person:', updatedPerson);
  } catch (err) {
    console.error('Error finding and updating person:', err);
  }
};

// Function to remove a person by their ID
const removeById = async (personId) => {
  try {
    // Find a document by ID and remove it from the database
    const removedPerson = await Person.findByIdAndRemove(personId);
    console.log('Removed person:', removedPerson);
  } catch (err) {
    console.error('Error removing person by ID:', err);
  }
};

// Function to remove all people with the name 'Mary'
const removeManyPeople = async () => {
  try {
    // Remove all documents where the name field matches 'Mary'
    const result = await Person.deleteMany({ name: 'Mary' });
    console.log('People removed:', result);
  } catch (err) {
    console.error('Error removing many people:', err);
  }
};

// Function to find people who like burritos, sort by name, limit results, and exclude age field
const queryChain = async () => {
  try {
    const people = await Person.find({ favoriteFoods: 'burritos' }) // Find people who like burritos
      .sort('name') // Sort results by name
      .limit(2) // Limit the results to two documents
      .select('-age') // Exclude the age field from the results
      .exec(); // Execute the query
    console.log('Query result:', people);
  } catch (err) {
    console.error('Error in query chain:', err);
  }
};
