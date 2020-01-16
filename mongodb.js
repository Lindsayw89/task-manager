// told to delete this file out per lesson 89 @ 2:05

// //CRUD create read update delete

// // note** the useUnifiedTopology , I repalced from the video that said to use useNewUrlParser. bc it would be depracated soon

// const mongodb = require('mongodb')
// const MongoClient= mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const connectionURL= 'mongodb://127.0.0.1:27017'
// const databaseName= 'task-manager'


// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
//     if(error){
//        return console.log('unable to connect to database')
//     }
   
//     const db = client.db(databaseName)

//     // db.collection('users').deleteMany({
//     //     age: 45
//     // }).then((result)=>{
//     //     console.log(result)
//     // }).catch((error)=>{
//     //     console.log(error)
//     // })
//     db.collection('tasks'). deleteOne({
//         description: "walk dog"
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })

//     })