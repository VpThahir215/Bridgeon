import mongoose from 'mongoose'
import 'dotenv/config'
const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDb Connected');
        

    }catch(error){

console.log('MongoDb connection Faild');

    }
}
export default connectDb