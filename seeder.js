const database = require("./database");

const importData = async () => {
  try {
    let db = await database();
    let collection_name = "admin";
    let db_collection = await db.collection(collection_name);
    await db_collection.insertOne({
      username: "admin@sms.com",
      password: "admin123",
    });

    console.log("user created in database");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    let db = await database();
    await db.dropDatabase();
    console.log("database destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
