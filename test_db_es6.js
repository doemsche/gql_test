import Sequelize from 'sequelize';
import _ from 'underscore';
import Faker from 'faker';

const sequelize = new Sequelize('myDB','dschlaepfer','', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name', // Will result in an attribute that is firstName when user facing but first_name in the database
    validate: {
      is: ["^[a-z]+$",'i']
    }
  },
  lastName: {
    type: Sequelize.STRING
  }
}
);



if(process.argv[2] == '--rebuild'){
  User.sync({force: true}).then(() => {
    // Table created
    _.times(109, ()=>{
      return User.create({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName()
      });
    })
  });
}

if(process.argv[2] != '--rebuild'){
  User.findOne().then((user)=> {
      console.log(user.get('firstName'));
  });
}