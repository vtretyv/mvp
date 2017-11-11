var mongoose = require('mongoose');
mongoose.connect('mongod://localhost/Foodify');


//Handle Mongoose connection error
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connnection error:'));

//Create a Schema object from mongoose module;
let Schema = mongoose.Schema;

//Create an instance of a Schema
let IngredientSchema = new Schema({
  user: String,
  ingred_name: String,
   
})

let Ingredient = mongoose.model('Ingredient', IngredientSchema);


//Function for saving new ingredient models to DB
let save (ingredients)=>{
  let newIngred;
  ingredients.forEach((ingredient)=>{
    newIngred = new Ingredient({
      user:ingredient.user,
      ingred_name:ingredient.ingred_name
    });
    newIngred.save((err,data) =>{
      if(err) {return console.log('Error Occurred')};
    });
  })
}


//Function for getting ingredient models from DB
let find()=>{
  
}