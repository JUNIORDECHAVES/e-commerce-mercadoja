import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import logo from "../../assets/mercadoja2.0-removebg-preview com sombra1.png"
import { useNavigate } from 'react-router-dom';
import UserAccountDropdown from '../DropdownMenu/DropdownMenu';
import { memo, useEffect, useState } from 'react';
import { useCartItems } from '../../contexts/userCarItens';

export const Header = memo(() => {
    const navigate = useNavigate();
    const location = window.location.pathname;
    console.log(location);
    

    const { cartItems, handleRemoveItem, totalCartItems, totalCartPrice } = useCartItems()

    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState<boolean>(false);

    const [showheader, setShowHeader] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);


    const controlHeader = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            setShowHeader(false);
            setLastScrollY(currentScrollY);
        }
        else if (currentScrollY < lastScrollY) {
            setShowHeader(true);
            setLastScrollY(currentScrollY);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", controlHeader);

        return () => {
            window.removeEventListener("scroll", controlHeader);
        }
    }
        , [lastScrollY]);

    return (
        <header className={`bg-[#232F3E] text-white md:p-4 shadow-md top-0 z-50 fixed w-full transition-transform duration-300 ${showheader ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className={`md:container w-full mx-auto md:items-center md:justify-between flex md:flex-wrap`}>

                <button className="md:hidden p-2 rounded-md hover:bg-[#364759] transition-colors duration-200">
                    <Menu size={25} />
                </button>

                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="w-30 md:w-3xs rounded-xl cursor-pointer drop-shadow-xl/50" src={logo} alt="logo"
                        onClick={() => navigate("/")}
                    />
                </div>

                <div className='w-full flex items-center justify-end gap-40 flex-wrap flex-row'>

                    <div className="flex-grow hidden md:block max-w-xl mx-4 order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
                        <div className="relative pt-4">
                            <input
                                type="text"
                                placeholder="Pesquisar produtos, marcas..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#364759] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                            />
                            <Search className="absolute left-3 top-4/6 transform -translate-y-1/2 text-gray-300" size={20} />
                        </div>
                    </div>

                    {/* Ícones de Navegação (Menu mobile, Carrinho, Usuário) */}
                    <div className="flex items-center space-x-4 order-2 md:order-3">

                        <div className="flex items-center space-x-4 order-2 md:order-3">


                            {/* Botão do Carrinho com Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                                    className="flex items-center p-2 rounded-md hover:bg-[#364759] transition-colors duration-200"
                                >
                                    <ShoppingCart size={24} />
                                    <span className="ml-1 hidden md:flex">Carrinho</span>
                                    <span className="bg-[#FF9900] text-[#232F3E] text-xs font-bold px-2 py-0.5 rounded-full ml-1">{totalCartItems}</span>
                                </button>

                                {isCartDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 text-gray-800">
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
                                                            <p className="text-xs text-gray-600">Qtd: {item.quantity} x R$ {item.price.toFixed(2)}</p>
                                                            <p className="text-sm font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                                                        </div>
                                                        <button onClick={() => handleRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
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
                                            <button className="w-full bg-[#FF9900] text-[#232F3E] font-bold py-2 rounded-md hover:bg-[#E68A00] transition-colors duration-200">
                                                Finalizar Compra
                                            </button>
                                            <button onClick={() => {
                                                if(location !== "/shopping-cart") {
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

                            <a href="#" className="flex items-center p-2 rounded-md hover:bg-[#364759] transition-colors duration-200">
                                <UserAccountDropdown />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex-grow max-w-100% mx-4 order-3 md:hidden md:order-2 md:w-auto mt-4 md:mt-0">
                        <div className='relative'>
                            <input 
                                type="text"
                                placeholder="Pesquisar produtos, marcas..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#364759] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                        </div>
                    </div>


            <nav className="container mx-auto mt-3 hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Frutas e Vegetais</a>
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Laticínios e Frios</a>
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Padaria e Confeitaria</a>
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Carnes e Aves</a>
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Bebidas</a>
                <a href="#" className="hover:text-[#FF9900] transition-colors duration-200">Limpeza</a>
                {/* Adicione mais categorias conforme necessário */}
            </nav>
        </header >
    );
});
