import axios from "axios";

import { Category } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {

    try {
        const res = await axios(`${PUBLICURL}/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
    
};

export default getCategory;
