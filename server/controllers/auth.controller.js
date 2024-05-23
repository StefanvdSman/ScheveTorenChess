import validator from 'validator';
import User from '../database/user.model.js';
import db from '../database/connection.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(db.databaseName);
  const usernameExists = await db
    .collection('users')
    .find({ username: username });
  const numberOfUsers = (await usernameExists.toArray()).length;
  console.log(username, email, password);
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  } else if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  } else if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: 'Password not strong enough' });
  } else if (!validator.isAlpha(username)) {
    return res.status(400).json({ message: 'Name must only contain letters' });
  } else if (numberOfUsers > 0) {
    return res.status(400).json({ message: 'Username already exists' });
  }
  const SALT_WORK_FACTOR = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
  console.log(hashedPassword);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });
  db.collection('users').insertOne(newUser);

  return res.status(200).json({ message: 'Signup successful' });
};
