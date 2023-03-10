const mongoose = require('mongoose')
    // const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const objectId = (id) => mongoose.Types.ObjectId(id);


const main = async() => {
    await mongoose.connect(process.env.MONGO_URL);
    const db = mongoose.connection;

    const allListCollections = await db.db.listCollections().toArray();
    console.log('=========allListCollections=========');
    console.log(allListCollections);
    console.log('====================================');

    const tik = await db.db.collection("tickets");

    console.log('====================================');
    console.log(await tik.find({ _id: objectId("6318ec8e8e65a659170667da") }).toArray());
    console.log('====================================');

    console.log('====================================');
    console.log(await tik.find({ gameId: 49, status: 0 }).toArray());
    console.log('====================================');
    return
}

main()