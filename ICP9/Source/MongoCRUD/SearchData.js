/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://icp9:secureicp9@ds137703.mlab.com:37703';
var findUser = function(db, callback) {
    var cursor =db.collection('ase-icp9').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};
var findUserwithName = function(db,callback) {
    var cursor = db.collection('ase-icp9').find({"fname":"Sidrah"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });
}
var findUserwithUniversity = function(db, callback) {
    var cursor = db.collection('ase-icp9').find({"education.university":"UMKC"});
    cursor.each(function(err,doc){
       assert.equal(err,null);
       if(doc != null)
       {
           console.log("First Name:" + doc.fname);
           console.log("University:" + doc.education.university);
           console.log("Degree:" + doc.education.degree);
           console.log("Major:" + doc.education.major);
           console.log("mail:" + doc.mail);
       }
    });
}
MongoClient.connect(url, function(err, client) {
    var db = client.db('ase-icp9');
    assert.equal(null, err);
    findUserwithUniversity(client, function() {
        client.close();
    });
});