const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting records', function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    });
  });
  it('Creates an author with sub-documents', function(done){

    var nico = new Author({
      name: 'Nico Santos',
      books: [{title: 'Legend of the titans', pages: 999}]
    })
    nico.save().then(function(){
      Author.findOne({name: 'Nico Santos'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it('Adds anothe book to the author', function(done){
    var nico = new Author({
      name: 'Nico Santos',
      books: [{title: 'Legend of the titans', pages: 999}]
    });
    nico.save().then(function(){
      Author.findOne({name: 'Nico Santos'}).then(function(record){
        //add a book to the books array
        record.books.push({title: 'The return of the titans', pages: 636});
        record.save().then(function(){
          Author.findOne({name: 'Nico Santos'}).then(function(result){
          assert(result.books.length === 2);
          done();
        });
      });
    });
  });
});
});
