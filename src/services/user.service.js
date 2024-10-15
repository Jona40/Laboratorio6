const {save, User, getAllUsers} = require('../models/user.model');
const addNewUser = (name, lastname, email)=>{
 const newUser = new User(name, lastname, email);
 return save(newUser);
}

const getUsersService = () => {
    return getAllUsers(); 
};

module.exports = {
    addNewUser,
    getUsersService
   }
    
