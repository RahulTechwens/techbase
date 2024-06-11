class TechBase {

 static checkKeyValidation(accessKey){
    return new Promise(async (resolve, reject) => {
        const raw = JSON.stringify({ accessKey });
        const requestOptions = {
          method: "POST",
          headers:{
"Content-Type": "application/json"
          },
          body: raw,
        };
        fetch("http://localhost:3000/api/v1/check/keys", requestOptions)
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err)
          });

      })
  }

  static connectDatabase(user,host,database,password,port){
    return new Promise(async (resolve, reject) => {
        const raw = JSON.stringify({ user,host,database,password,port });
        const requestOptions = {
          method: "POST",
          headers:{
                "Content-Type": "application/json"
          },
          body: raw,
        };
        fetch("http://localhost:3000/api/v1/databaseConnect", requestOptions)
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err)
          });

      })
  }

  static config(accessKey, {onSuccess, onFailure}) {
    TechBase.checkKeyValidation(accessKey).then((res)=>{
        onSuccess(res)
    }).catch((e)=>{
        onFailure(e)
    })
  }

  static connect(object,{onSuccess, onFailure}) {
    const user= object.user;
    const host= object.host;
    const database = object.database;
    const password = object.password;
    const port = object.port
    TechBase.connectDatabase(user,host,database,password,port).then((res)=>{
        onSuccess(res)
    }).catch((e)=>{
        onFailure(e)
    })
  }
}
module.exports =TechBase

// //Database ----

// const connection = Techwens.Connections()

// db = connection.CreateDatabase(dbName)
// db = connection.Database(dbName)
// users = db.Table('users')
// userTable = db.CreateTable('users',userSchema)
// db.model("posts")
// userSchema = db.scehma(name,{
//   first_name:{
//     type:string
//   }
// })

// users =

// users.find()
// users.findAll()
// users.Query()
// users.update()
