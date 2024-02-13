import app from './app.js';


const PORT = process.env.PORT || 3000;

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

