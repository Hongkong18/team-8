const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';

var db;



// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);

});

function searchDoctorCallback(docs, res){
    res.send( {"data": docs});
}


function searchFeedbackCallback(docs, res){
    res.send({"data": docs});
}


function searchDoctor(doc_name, district, req, res){
    
    const collection = db.collection('Doctors');

    collection.find({"Name":doc_name, "District" : district}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        searchDoctorCallback(docs, res);
      });
}


function searchFeedback(keywords, district, req, res){
    
    const collection = db.collection('Feedback');

    // PYTHON MICROSERVICE GETTING THE KEYWORDS USING NLTK

    // let search_str = `${keywords}`

    // console.log(search_str)
    console.log(keywords)

    collection.find( { $text: { $search: "before" }}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        searchFeedbackCallback(docs, res);
      });
}


function getRecords(callback){

    if(db!=null){
        findRecords(db, callback);
    }
};






  const findRecords = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Doctors');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }


module.exports = {
    getRecords: getRecords,
    searchDoctor: searchDoctor,
    searchFeedback: searchFeedback
};