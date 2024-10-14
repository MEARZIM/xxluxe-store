import axios from "axios";

import { Size } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {

    try {
        const res = await axios(PUBLICURL);
        return res.data;
    } catch (error) {
        console.error('Error fetching sizes:', error);
        throw error; 
    }
    
};

export default getSizes;
