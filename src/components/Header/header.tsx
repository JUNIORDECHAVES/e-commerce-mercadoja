import { Search, Menu } from 'lucide-react';
import logo from "../../assets/mercadoja2.0-removebg-preview com sombra1.png"
import { useNavigate } from 'react-router-dom';
import UserAccountDropdown from '../DropdownMenu/DropdownMenu';
import { memo, useEffect, useState } from 'react';
import { CartDropdown } from '../CartDropdown/cartDropdown';

export const Header = memo(() => {
    const navigate = useNavigate();

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
                                <CartDropdown />
                                
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
