require('dotenv').config();
const { MongoClient } = require('mongodb');

async function main() {
    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // You can perform your database operations here
        const database = client.db("MongoTest");  // Replace 'MongoTest' with your database name
        const collection = database.collection("horses");  // Replace 'horses' with your collection name

        const docCount = await collection.countDocuments();
        console.log(`Collection has ${docCount} documents.`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
