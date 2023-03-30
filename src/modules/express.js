const express = require('express')
const UserModel = require('../models/moongose.model')

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// middlewares
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// app.get('/home', (req, res) => {
//   res.status(200).send('<h1>https://www.github.com/Brazlucas</h1>')
//   res.contentType('text/html')
// });


// Get de todos os users
app.get('/views/users', async (req, res) => {
  const users = await UserModel.find({})
  res.render('index', { users });
})

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message);
  }

  res.status(200).json(users);
});

// Get de user pelo ID específico
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).send(user)

  } catch (error) {
    return res.status(500).send(error.message)
  }
})

// Post em todos os users
app.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user);

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Alteração de user por ID específico
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).json(user);

  } catch (error) {
    res.status(500).send(error.message)
  }
});

// Delete de user por ID específico
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id, req.body);
    res.status(201).json(user);

  } catch (error) {
    res.status(500).send(error.message)
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));