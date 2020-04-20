
const assert = require('assert');
const GypsyTitans = require('../models/gypsytitans');

describe('Finding records', function(){

  var titan;

  beforeEach(function(done){

     titan = new GypsyTitans({
     name: 'Joca'
   });
   titan.save().then(function(){
     done();

   });

  });

  it('finds one record from titan space', function(done){

    GypsyTitans.findOne({name: 'Joca'}).then(function(result){
      assert(result.name === 'Joca');
      done();
    });
  });
  it('finds one record by ID from titan space', function(done){

    GypsyTitans.findOne({_id: titan._id}).then(function(result){
      assert(result._id.toString() === titan._id.toString());
      done();
    });
  });
});
