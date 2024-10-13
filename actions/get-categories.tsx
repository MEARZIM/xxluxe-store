import axios from "axios";

import { Category } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {

    try {
        const res = await axios(PUBLICURL);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
    
};

export default getCategories;
