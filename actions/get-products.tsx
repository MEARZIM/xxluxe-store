import axios from "axios";
import qs from "query-string";

import { Product } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

    try {
        const url = qs.stringifyUrl({
            url: PUBLICURL,
            query:{
                categoryId: query.categoryId,
                colorId: query.colorId,
                sizeId: query.sizeId,
                isFeatured: query.isFeatured
            }
        })
        const res = await axios(PUBLICURL);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
    
};

export default getProducts;
