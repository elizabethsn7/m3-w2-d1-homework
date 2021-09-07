var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/statsdb";

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    // if (err) throw err;
    // console.log("Database Created");
    // db.close();
    var dbo = db.db("statsdb");
    // dbo.createCollection("uscensus", function (err, res) {
    //   if (err) throw err;
    //   console.log("Collection Created");
    //   db.close();
    // });
    var stats = [
      {
        city: "San Juan",
        zip: "00926",
        state: "PR",
        income: "34781",
        age: "44",
      },
      {
        city: "Corona",
        zip: "11368",
        state: "NY",
        income: "50797",
        age: "32",
      },
      {
        city: "Chicago",
        zip: "60629",
        state: "IL",
        income: "42019",
        age: "31",
      },
      {
        city: "El Paso",
        zip: "79936",
        state: "TX",
        income: "54692",
        age: "31",
      },
      {
        city: "Los Angeles",
        zip: "90011",
        state: "CA",
        income: "36954",
        age: "28",
      },
      {
        city: "Norwalk",
        zip: "90650",
        state: "CA",
        income: "66453",
        age: "35",
      },
    ];
    // dbo.collection("uncensus").insertMany(stats, function (err, res) {
    //   if (err) throw err;
    //   console.log("Number of stats inserted: " + res.insertedCount);
    //   db.close();
    // });

    var query = { city: "Corona" };
    dbo
      .collection("uncensus")
      .find(query)
      .toArray(function (err, result) {
        // if (err) throw err;
        // console.log(result);
        // db.close();
      });

    // var myquery = { state: /^CA/ };
    // dbo
    //   .collection("uncensus")
    //   .find(myquery)
    //   .toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    //   });
    // var myquery = { state: "NY" };
    // var newValues = { $set: { income: "38910", age: 46 } };
    // dbo
    //   .collection("uncensus")
    //   .updateOne(myquery, newValues, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 doc updated");
    //     db.close();
    //   });

    var mysort = { state: -1 };
    dbo
      .collection("uncensus")
      .find()
      .sort(mysort)
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  }
);
