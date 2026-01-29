import { useLocation, useNavigate } from "react-router-dom";
import { useCartItems } from "../../contexts/userCarItens";

import { X, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from "react";

export const CartDropdown = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { cartItems, handleRemoveItem, totalCartItems, totalCartPrice } = useCartItems();

    useEffect(() => {
        // Funcionalidade para fechar o dropdown ao clicar fora dele
        const handleClickOutside = (e: MouseEvent) => {
            // Verifica se o clique ocorreu fora da div, caso o corra, fecha o dropdown
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsCartDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);

    },[])

    return (
        <div ref={containerRef}>
            <button
                onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                className="flex items-center p-2 rounded-md hover:bg-[#364759] transition-colors duration-200"
                
            >
                <ShoppingCart size={24} />
                <span className="ml-1 hidden md:flex">Carrinho</span>
                <span className="bg-[#FF9900] text-[#232F3E] text-xs font-bold px-2 py-0.5 rounded-full ml-1">{totalCartItems}</span>
            </button>

            {isCartDropdownOpen && (
                <div className="absolute -right-10 md:right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 text-gray-800">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold">Seu Carrinho ({totalCartItems} itens)</h3>
                    </div>
                    {cartItems.length > 0 ? (
                        <div className="max-h-60 overflow-y-auto">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center p-4 border-b border-gray-100 last:border-b-0">
                                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded mr-3" />
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-600">Qtd: {item.quantity!} x R$ {item.price!.toFixed(2)}</p>
                                        <p className="text-sm font-bold">R$ {(item.price! * item.quantity!).toFixed(2)}</p>
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id!)} className="text-gray-400 hover:text-red-500 transition-colors">
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-500">Seu carrinho está vazio.</div>
                    )}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold text-lg">Total:</span>
                            <span className="font-bold text-lg text-[#232F3E]">R$ {totalCartPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-[#FF9900] text-[#232F3E] font-bold py-2 rounded-md hover:bg-[#E68A00] transition-colors duration-200"
                            onClick={() => {
                                setIsCartDropdownOpen(false);
                                if (location !== "/checkout") {
                                    navigate("/checkout")
                                }
                                if (location === "/checkout") return;
                            }}
                        >
                            Finalizar Compra
                        </button>
                        <button onClick={() => {
                                setIsCartDropdownOpen(false);
                            if (location !== "/shopping-cart") {
                                navigate("/shopping-cart")
                            }
                            if (location === "/shopping-cart") return;
                        }} className="w-full mt-2 border border-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                            Ver Carrinho Completo
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}