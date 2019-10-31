const app = require('./app');
const port = process.env.PORT;

// app.use((req, res, next) => {
//     res.status(503).send('Service temporarily unavailable');
// });

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});