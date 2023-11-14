import { MongoClient, ObjectId } from 'mongodb';
    
export default async function handler(req, res) {

    const { productID } = req.query
    const filter = {_id: new ObjectId(productID)}

    const client = new MongoClient(process.env.MONGODB_URI, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        });

    await client.connect();
    const db = client.db();
    
    if (req.method === 'GET') {
        try {
            const posts = await db.collection('New').find(filter).toArray();
            res.status(200).json(posts);
    
        } catch (error) {
            res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
            await client.close();
        } 
    } else if (req.method === 'PUT') {

        try {
            const updatedOperations = {$set: req.body}
            const posts = await db.collection('New').updateOne(filter, updatedOperations);
            res.status(200).json(posts);
    
        } catch (error) {
            res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
            await client.close();
        }
    } else if (req.method === 'DELETE') {

        try {
            const posts = await db.collection('New').deleteOne(filter);
            res.status(200).json(posts);
    
        } catch (error) {
            res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
            await client.close();
        }
    }
}