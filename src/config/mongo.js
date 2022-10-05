import mongoose from "mongoose"

const connection = () => {
    try {
        const connectionUrl = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
        return mongoose.connect(connectionUrl)
    } catch (error) {
        console.log(error)
        return error
    }
}

export default connection
