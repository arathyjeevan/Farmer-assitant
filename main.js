

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
    if (err) throw err;
    var db = client.db('Docassist');
    var query = { Name: "Shreya" };
    db.collection("patient1").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});