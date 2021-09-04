const mongoose = require('mongoose');
//https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.

mongoose.connect('mongodb://localhost/authors', {
 // useNewUrlParser: true, // As of version 6.x of mongoose, it is no longer necessary to specify 
 // useUnifiedTopology: true,
  //useFindAndModify: false
})
  .then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('something went wrong when connecting to the database', err));
  
mongoose.connection.on('error', (err) => console.error(err));

