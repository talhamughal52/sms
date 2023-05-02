const { response } = require("express");
const express = require("express");
const database = require("./database");
const mongodb = require("mongodb");
var bodyParser = require("body-parser");
let cors = require("cors");
const port = 4500;

const app = express();
var jsonParser = bodyParser.json();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.text())

app.get("/", jsonParser, async (req, res) => {
  let data = {
    status: "OK",
  };
  res.send(data);
});

app.post("/submit_form_students", async (req, res) => {
  let db = await database();
  let collection_name = req.body.Class;
  let db_collection = db.collection(collection_name);
  await db_collection.insertOne(req.body);
  console.log(req.body);
  let data = {
    status: "OK",
  };
  res.send(data);
});

app.post("/submit_form_teachers", async (req, res) => {
  let db = await database();
  let collection_name = "teachers";
  let db_collection = db.collection(collection_name);
  await db_collection.insertOne(req.body);
  console.log(req.body);
  let data = {
    status: "OK",
  };
  res.send(data);
});

app.post("/admin_login", async (req, res) => {
  let db = await database();
  let collection_name = "admin";
  let db_collection = db.collection(collection_name);
  let data1 = await db_collection.find({}).toArray();
  console.log(req.body);
  console.log(data1);
  if (
    data1[0].username == req.body.username &&
    data1[0].password == req.body.password
  ) {
    let data = {
      status: "True",
    };
    res.send(data);
  } else {
    let data = {
      status: "False",
    };
    res.send(data);
  }
});

app.post("/student_records", async (req, res) => {
  let db1 = await database();
  let db2 = await database();
  let db3 = await database();
  let db4 = await database();
  let db5 = await database();
  let db6 = await database();
  let db7 = await database();
  let db8 = await database();
  let db9 = await database();
  let db10 = await database();
  let collection_name1 = "One";
  let collection_name2 = "Two";
  let collection_name3 = "Three";
  let collection_name4 = "Four";
  let collection_name5 = "Five";
  let collection_name6 = "Six";
  let collection_name7 = "Seven";
  let collection_name8 = "Eight";
  let collection_name9 = "Nine";
  let collection_name10 = "Ten";
  let db_collection1 = db1.collection(collection_name1);
  let db_collection2 = db2.collection(collection_name2);
  let db_collection3 = db3.collection(collection_name3);
  let db_collection4 = db4.collection(collection_name4);
  let db_collection5 = db5.collection(collection_name5);
  let db_collection6 = db6.collection(collection_name6);
  let db_collection7 = db7.collection(collection_name7);
  let db_collection8 = db8.collection(collection_name8);
  let db_collection9 = db9.collection(collection_name9);
  let db_collection10 = db10.collection(collection_name10);
  let data1 = await db_collection1.find({}).toArray();
  let data2 = await db_collection2.find({}).toArray();
  let data3 = await db_collection3.find({}).toArray();
  let data4 = await db_collection4.find({}).toArray();
  let data5 = await db_collection5.find({}).toArray();
  let data6 = await db_collection6.find({}).toArray();
  let data7 = await db_collection7.find({}).toArray();
  let data8 = await db_collection8.find({}).toArray();
  let data9 = await db_collection9.find({}).toArray();
  let data10 = await db_collection10.find({}).toArray();
  let t_data = {
    one: data1,
    two: data2,
    three: data3,
    four: data4,
    five: data5,
    six: data6,
    seven: data7,
    eight: data8,
    nine: data9,
    ten: data10,
  };
  res.send(t_data);
});

app.post("/teacher_records", async (req, res) => {
  let db = await database();
  let collection_name = "teachers";
  let db_collection = db.collection(collection_name);
  let data = await db_collection.find({}).toArray();
  res.send(data);
});

app.put("/settings", jsonParser, async (req, res) => {
  let db = await database();
  let collection_name = "admin";
  let db_collection = db.collection(collection_name);
  let data = await db_collection.find({}).toArray();
  res.send(data);
});

app.put("/change_password", jsonParser, async (req, res) => {
  let db = await database();
  let collection_name = "admin";
  let db_collection = db.collection(collection_name);
  let data = await db_collection.find({}).toArray();
  db_collection.updateOne(
    { username: req.body.username },
    { $set: { password: req.body.password } }
  );
  res.send(data);
});

app.delete("/delete_student", jsonParser, async (req, res) => {
  let flag = false;
  let db = await database();
  let collection_name = req.body.Class;
  let db_collection = db.collection(collection_name);
  let data = await db_collection.find({}).toArray();
  Array.from(data).forEach(function (key) {
    if (key.Email == req.body.Email && key.Code == req.body.Code) {
      flag = true;
    }
  });
  if (flag == true) {
    db_collection.deleteOne({ Code: req.body.Code, Email: req.body.Email });
    res.send({ status: "Deleted" });
  } else {
    res.send({ status: "Not_Deleted" });
  }
});

app.delete("/delete_teacher", jsonParser, async (req, res) => {
  let flag = false;
  let db = await database();
  let collection_name = "teachers";
  let db_collection = db.collection(collection_name);
  let data = await db_collection.find({}).toArray();
  Array.from(data).forEach(function (key) {
    if (key.Email == req.body.Email && key.Code == req.body.Code) {
      flag = true;
    }
  });
  if (flag == true) {
    db_collection.deleteOne({ Code: req.body.Code, Email: req.body.Email });
    res.send({ status: "Deleted" });
  } else {
    res.send({ status: "Not_Deleted" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
  console.log(`Server started`);
});
