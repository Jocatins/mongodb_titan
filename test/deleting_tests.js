
const assert = require('assert');
const GypsyTitans = require('../models/gypsytitans');

describe('deleting records', function(){

  var titan;

  beforeEach(function(done){

     titan = new GypsyTitans({
     name: 'Joca'
   });
   titan.save().then(function(){
     done();

   });

  });

  it('delete one record from titan space', function(done){

    GypsyTitans.findOneAndRemove({name: 'Joca'}).then(function(){
      GypsyTitans.findOne({name: 'Joca'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });

});
