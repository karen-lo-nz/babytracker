import express from 'express';
// import { getUsers, getUser} from './db/users';
import users from './routes/users'
import stats from './routes/stats'

// rest of the code remains same
const app = express();
const PORT = 8000;


app.get('/', (req, res) => {

  return res.send('Baby tracker')
});

app.use('/api/users', users)
app.use('/api/stats', stats)


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});