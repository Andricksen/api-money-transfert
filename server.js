const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require admin routes
const adminRoutes = require('./src/routes/admin.routes')
const agenceRoutes = require('./src/routes/agence.routes')
const tarifRoutes = require('./src/routes/tarif.routes')
const transfertRoutes = require('./src/routes/transfert.routes')
const villeRoutes = require('./src/routes/ville.routes')
// using as middleware
app.use('/api/admin', adminRoutes)
app.use('/api/agence', agenceRoutes)
app.use('/api/tarif', tarifRoutes)
app.use('/api/ville', villeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});