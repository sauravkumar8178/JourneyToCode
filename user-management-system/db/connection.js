const  mongoose  = require("mongoose");
require('dotenv').config();

async function dbConnection(){
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database Connected Successfully!');            
    } catch (error) {
        console.log(`Database Is Not Connected: ${error}`);
        process.exit(1);
    }
}

module.exports = dbConnection;
