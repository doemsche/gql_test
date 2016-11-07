import Sequelize from 'sequelize';
import _ from 'underscore';
import Faker from 'faker';

const Conn = new Sequelize('myDB','dschlaepfer','', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = Conn.define('user', {
  // uuid: {
  //     type: Sequelize.UUID,
  //     primaryKey: true
  //   },
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

const Group = Conn.define('group',{
  // uuid: {
  //     type: Sequelize.UUID,
  //     primaryKey: true
  //   },
  groupName: {
    type: Sequelize.STRING
  }
});

User.belongsTo(Group,{foreignKey: 'group_id'})
Group.hasMany(User);


// if(process.argv[2] == '--rebuild'){
  Conn.sync({force: true}).then(() => {
    _.times(10,()=>{
      return Group.create({
        uuid: Faker.random.uuid(),
        groupName: Faker.company.companyName()
      }).then(group =>{
        _.times(Math.floor((Math.random() * 10) + 0), ()=>{
          return User.create({
            uuid: Faker.random.uuid(),
            group_id:  group.id,
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName()
          });
        })
      });
    });
  });
// }
      // Group.findOne().then(function (g) {
      //     console.log(g.get('uuid'));
      //     console.log(g.get('groupName'));
      // });  
// if(process.argv[2] != '--rebuild'){
//   User.findOne().then((user)=> {
//       console.log(user.get('firstName'));
//   });
// }