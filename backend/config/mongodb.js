import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected',()=>{ // connected is the event
      console.log("DB Connected");
    })
    // we can connect mongoose package from mongodb atlas server using below code
    await mongoose.connect(`${process.env.MONGODB_URL}sportswear`) // sportswear is the database name
}

export default connectDB;

// when ever we execute the function 'connectDB' then the mongodb database will be connected to the project