const mongoose=require('mongoose')
const DBConnection = async () => {
    const url=`mongodb://todo:rgOlTH6v4sewYoPC@ac-w3gvmeb-shard-00-00.o0y3kco.mongodb.net:27017,ac-w3gvmeb-shard-00-01.o0y3kco.mongodb.net:27017,ac-w3gvmeb-shard-00-02.o0y3kco.mongodb.net:27017/?ssl=true&replicaSet=atlas-cwhwmh-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, { useNewUrlParser: true,
            useNewUrlParser: true,
            useUnifiedTopology: true, });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

module.exports= DBConnection