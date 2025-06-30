import { createContext, useState, type ReactNode, useContext, type Dispatch, type SetStateAction } from "react";

export type ItemProps = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
};

type CartItemProps = {
    cartItems: ItemProps[];
    setCartItems:Dispatch<SetStateAction<ItemProps[]>>;
    totalCartItems: number;
    totalCartPrice: number;
    handleRemoveItem: (id: number) => void
};

const CartItems = createContext({} as CartItemProps)

type ProviderProps = {
    children: ReactNode;
};


export const UseCardtItensProvider = ({children}:ProviderProps) => {
    const [cartItems, setCartItems] = useState<ItemProps[]>([]);

    const totalCartItems = cartItems.length ;
    const totalCartPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleRemoveItem = (id: number): void => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartItems.Provider value={{ cartItems, setCartItems, totalCartItems, totalCartPrice, handleRemoveItem}}>
            {children}
        </CartItems.Provider>
    )
}

export function useCartItems (){
    return useContext(CartItems)
}