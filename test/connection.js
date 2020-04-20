const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done){
  mongoose.connect('mongodb://localhost/gypsy');

  mongoose.connection.once('open', function(){
    console.log('connection success!!');
    done();
  }).on('error', function(error){
    console.log('connection failed!!', error);
  });
});

beforeEach(function(done){
  mongoose.connection.collections.gypsytitans.drop(function(){
    done();
  });
});
