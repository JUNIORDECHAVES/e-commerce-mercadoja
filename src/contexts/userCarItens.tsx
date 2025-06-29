import { createContext, useState, type ReactNode, useContext } from "react";

type ItemProps = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
};

type CartItemProps = {
    cartItems: ItemProps[];
    setCartItems: (items: ItemProps[]) => void;
    totalCartItems: number;
    totalCartPrice: number;
    handleRemoveItem: (id: number) => void
};

const CartItems = createContext({} as CartItemProps)

type ProviderProps = {
    children: ReactNode;
};


export const UseCardtItensProvider = ({children}:ProviderProps) => {
    const [cartItems, setCartItems] = useState<ItemProps[]>([
        { id: 1, title: 'Maçãs Frescas Gala', price: 9.90, quantity: 2, image: 'https://placehold.co/50x50/C8E6C9/2E7D32?text=Maçã' },
        { id: 2, title: 'Leite Integral 1L', price: 5.50, quantity: 1, image: 'https://placehold.co/50x50/B2EBF2/00BCD4?text=Leite' },
        { id: 3, title: 'Pão Francês', price: 1.20, quantity: 3, image: 'https://placehold.co/50x50/FFCCBC/FF5722?text=Pão' },
    ]);

    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
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