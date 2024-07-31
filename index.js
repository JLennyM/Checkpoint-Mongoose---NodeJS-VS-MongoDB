// index.js or your main file
const Person = require('./models/Person');

// Create a new person instance
const createAndSavePerson = () => {
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burgers']
  });

  // Save the person instance to the database
  person.save((err, data) => {
    if (err) return console.error(err);
    console.log('Person saved:', data);
  });
};

createAndSavePerson();

const findPeopleByName = (name) => {
    Person.find({ name }, (err, people) => {
      if (err) return console.error(err);
      console.log('People found:', people);
    });
  };
  
  findPeopleByName('John Doe');

  const findOneByFavoriteFood = (food) => {
    Person.findOne({ favoriteFoods: food }, (err, person) => {
      if (err) return console.error(err);
      console.log('Person found:', person);
    });
  };
  
  findOneByFavoriteFood('Pizza');

  const findPersonById = (personId) => {
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      console.log('Person found by ID:', person);
    });
  };
  
  findPersonById('<some-person-id>');

  const findEditThenSave = (personId) => {
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      person.favoriteFoods.push('hamburger');
      person.save((err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Updated person:', updatedPerson);
      });
    });
  };
  
  findEditThenSave('<some-person-id>');

  const findAndUpdate = (personName) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true },  // Return the updated document
      (err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Updated person:', updatedPerson);
      }
    );
  };
  
  findAndUpdate('John Doe');

  
  const removeById = (personId) => {
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) return console.error(err);
      console.log('Removed person:', removedPerson);
    });
  };
  
  removeById('<some-person-id>');

  
  const removeManyPeople = (done) => {
    Person.remove({ name: 'Mary' }, (err, result) => {
      if (err) return console.error(err);
      console.log('People removed:', result);
    });
  };
  
  removeManyPeople();

  
  const queryChain = (done) => {
    Person.find({ favoriteFoods: 'burritos' })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec((err, data) => {
        if (err) return console.error(err);
        console.log('Query result:', data);
      });
  };
  
  queryChain();
  


  
