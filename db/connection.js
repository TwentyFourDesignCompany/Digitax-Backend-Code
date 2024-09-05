const mongoose = require('mongoose');

const dbConnection = async()=>{
   let connection = await mongoose.connect(`mongodb+srv://contractprojects2022:5QsirHkDPze53aZ@cluster0.iv6y2ri.mongodb.net/?retryWrites=true&w=majority&appName=digitax`)
   if(connection){
    console.log(`connected`)
   }
   else{
    console.log(`not connected`)
   }
}

module.exports = dbConnection
