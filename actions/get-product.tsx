import axios from "axios";

import { Product } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {

    try {
        const res = await axios(`${PUBLICURL}/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
    
};

export default getProduct;
