import express from 'express';
import cors from 'cors';
import records from './routes/record.js';
import users from './routes/user.js';
import auth from './routes/auth.js';
const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/record', records);
app.use('/api/user', users);
app.use('/api/auth', auth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res
    .status(statusCode)
    .json({ succes: false, statusCode: statusCode, message: message });
});
// start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
