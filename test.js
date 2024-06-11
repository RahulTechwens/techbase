const TechBase = require("./index");

TechBase.config("access", {
  onSuccess: (res) => {
    console.log("Success");
  },
  onFailure: (err) => {
    console.log("fail", err);
  },
});

const dbConfig = TechBase.connect(
  {
    dialect: "postgres",
    user: "postgres",
    host: "localhost",
    database: "supabase-clone",
    password: "123456",
    port: "5432",
  },{
    onSuccess: (res) => {
        console.log("DB connect");
      },
      onFailure: (err) => {
        console.log("DB not connec", err);
      },
  }
)

// const db = dbConfig.DB("dbName")
// const table = db.showTables()
// const users = db.table("users")
// dict