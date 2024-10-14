import axios from "axios";

import { Color } from "@/types";

const PUBLICURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {

    try {
        const res = await axios(PUBLICURL);
        return res.data;
    } catch (error) {
        console.error('Error fetching colors:', error);
        throw error; 
    }
    
};

export default getColors;
