
const bcrypt = require('bcrypt');

const users = [
  {
    name:'Admin User',
    email:'admin@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
  },
  {
    name:'john Doe',
    email:'john@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
  },
  {
    name:'Rebaka Asha',
    email:'rebaka@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
  }
];
module.exports =  users;