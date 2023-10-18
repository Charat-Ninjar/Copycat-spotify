// const { MongoClient } = require('mongodb');
import {MongoClient} from 'mongodb'
import AlbumsBox from './AlbumBox';
const uri = 'mongodb+srv://Jarjajarr:jar180ok@cluster0001.shllyge.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchDataFromMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const collection = client.db('spotify-clone').collection('album');
    const query = {}; // Your query goes here

    const cursor = collection.find(query);
    const data = await cursor.toArray();

    return data;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}


export default fetchDataFromMongoDB;
