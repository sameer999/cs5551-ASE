/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://aaaa:aaaaa1@ds137703.mlab.com:37703/ase-icp9';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(client, callback) {
    var db = client.db('ase-icp9');
    db.collection('icp9').insertOne( {
        "fname" : "Sidrah",
        "mail":"sjhv6@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    insertDocument(client, function() {
        client.close();
    });
});