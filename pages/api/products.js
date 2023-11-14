import { MongoClient } from 'mongodb';
    
export default async function handler(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

  await client.connect();
  const db = client.db();
  
  if (req.method === 'GET') {
    try {

      const posts = await db.collection('New').find({}).toArray();
      res.status(200).json(posts);

    } catch (error) {
      res.status(500).json({ error: 'Unable to connect to database' });
    } finally {
      await client.close();
    }
  } else if (req.method === 'POST') {
    try {
        const posts = await db.collection('New').insertOne(req.body);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Unable to connect to database' });
    } finally {
        await client.close();
    }
}
}