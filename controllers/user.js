const User = require('../models/user');

// Controller untuk mengambil data dari semua user
async function getAllUser(req, res, next) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

// Controller untuk mengambil data dari sebuah user
async function getUser(req, res, next){
    const userId = req.params.userId;

    try{
        const user = await User.findOne({ userId: userId });
        
        if(!user){
          return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    }
    catch(error){
      next(error);
    }
}

// Controller untuk membuat user
async function createUser(req, res, next) {
  const { userId, username, password } = req.body;
  try {
    const user = new User({ userId, username, password });
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
}

// Controller untuk update user
async function updateUser(req, res, next) {
  const userId = req.params.userId;
  const { username } = req.body;

  try {
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username;
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
}

// Controller untuk delete user
async function deleteUser(req, res, next){
    const userId = req.params.userId;
    try{
        const user = await User.deleteOne({ userId });

        if(!user){
          return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    }
    catch(error){
      next(error);
    }
}

const userController = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

module.exports = userController;
