import ProductDetail from "./ProductDetail";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

interface Params {
    productID: string;
}

async function getProduct(id: string) {
    const productId = new ObjectId(id);
    const client = await clientPromise;
    const db = client.db();
    const product = await db.collection('New').findOne({_id: productId });

    return {
        props: {
            product,
        }
    }
}

const Product = async ({ params }: { params: Params}) => {
    const product = await getProduct(params['productID'])

    return (
        <div>
            <ProductDetail product={product['props']['product']}/>
        </div>
    )
}

export default Product;