
const assert = require('assert');
const GypsyTitans = require('../models/gypsytitans');

describe('Updating records', function(){

  var titan;

  beforeEach(function(done){

     titan = new GypsyTitans({
     name: 'Joca',
     height: 90
   });
   titan.save().then(function(){
     done();

   });

  });

  it('Update one record in the titan space', function(done){

    GypsyTitans.findOneAndUpdate({name: 'Joca'}, {name: 'Khamen'}).then(function(){
      GypsyTitans.findOne({_id: titan._id}).then(function(result){
        assert(result.name === 'Khamen');
        done();
      });
    });


  });
  it('Increments the height by 1', function(done){

    GypsyTitans.update({},{$inc: {height: 1}}).then(function(){
      GypsyTitans.findOne({name: 'Joca'}).then(function(record){
        assert(record.height === 91);
        done();
      })
    })


  });

});
