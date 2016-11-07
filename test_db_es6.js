import Sequelize from 'sequelize';

console.log(Sequelize)

const sequelize = new Sequelize('myDB','dschlaepfer','', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});
// var sequelize = new Sequelize('myDb', 'dschlaepfer', '', {
//   host: 'localhost',
//   dialect: 'sqlite',
//   // SQLite only
//   storage: './database.sqlite'
// });

// var User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name', // Will result in an attribute that is firstName when user facing but first_name in the database
//     validate: {
//       is: ["^[a-z]+$",'i']
//     }
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// });

// var Project = sequelize.define('project', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// });

// var Task = sequelize.define('task', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   deadline: Sequelize.DATE
// });


// if(process.argv[2] == '--rebuild'){
//   User.sync({force: true}).then(function () {
//     // Table created
//     return User.create({
//       firstName: 'Dominik',
//       lastName: 'Schlöpfer'
//     });
//   });
// }

// if(process.argv[2] != '--rebuild'){
//   User.findOne().then(function (user) {
//       console.log(user.get('firstName'));
//   });
// }