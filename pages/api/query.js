import { MongoClient } from 'mongodb';
    
export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI,{});

    if (req.method === 'GET') {
        try {
            await client.connect();
            const db = client.db();
            const regex = new RegExp(req.query.name.replace('%20', ' '), 'gi')
            const posts = await db.collection('New').find({name: {$regex:  regex}}).toArray();
            res.status(200).json(posts);
    
        } catch (error) {
            res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
            await client.close();
        }
    }



}