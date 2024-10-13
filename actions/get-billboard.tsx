import axios from "axios";

import { Billboard } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {

    try {
        const res = await axios(`${PUBLICURL}/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; 
    }
    
};

export default getBillboard;
