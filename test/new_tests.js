
const assert = require('assert');
const GypsyTitans = require('../models/gypsytitans');

describe('Saving records', function(){

  it('saves records to titan space', function(done){
    var titan = new GypsyTitans({
      name: 'Joca'
    });
    titan.save().then(function(){
      assert(titan.isNew === false);
      done();

    });
  });
});
