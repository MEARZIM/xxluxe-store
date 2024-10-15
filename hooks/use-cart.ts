import {
    persist,
    createJSONStorage
} from "zustand/middleware"
import { create } from "zustand";
import toast from "react-hot-toast";

import { Product } from "@/types";

interface CartStoreProps {
    items: Product[];
    addItems: (data: Product) => void;
    removeItems: (id: string) => void;
    removeAllItems: () => void;
}

const useCart = create(
    persist<CartStoreProps>((set, get) => ({
        items: [],
        addItems: (data: Product) => {
            const currentItems = get().items
            const existingItems = currentItems.find(item => item.id === data.id);

            if (existingItems) {
                return toast("Item already added.");
            }
            set({
                items: [...get().items, data]
            });
            toast.success("Item added to the cart.");
        },
        removeItems: (id: string) => {
            set({
                items: [...get().items.filter((item) => item.id !== id)]
            });
            toast.success("Item removed to the cart.");
        },

        removeAllItems: () => {
            set({ items: [] });
        }
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;