const mongoose = require('mongoose');

const dbConnection = async()=>{
   // let connection = await mongoose.connect(`mongodb+srv://talhahaider074:nyPd1ehqbCxRcVu9@cluster0.iv6y2ri.mongodb.net/`)
   let connection = await mongoose.connect(`mongodb+srv://admin:xobwE2-cufgib-tofqub@susdb.bvnawp0.mongodb.net/?retryWrites=true&w=majority&appName=susdb`)

   // const uri = "mongodb+srv://admin:<db_password>@susdb.bvnawp0.mongodb.net/?retryWrites=true&w=majority&appName=susdb";
   if(connection){
    console.log(`connected`)
   }
   else{
    console.log(`not connected`)
   }
}

module.exports = dbConnection
