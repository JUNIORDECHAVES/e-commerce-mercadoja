import { User, LogOut, Package, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserAccountDropdown = ({ isScrolling }: { isScrolling: boolean }) => {
        const { usuario, isLogado, logout } = useAuth();
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const containerRef = useRef<HTMLDivElement | null>(null);
        const navigate = useNavigate();

            useEffect(() => {
        if (!isScrolling) {
            setIsDropdownOpen(false);
        }
    }, [isScrolling]);


        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                    setIsDropdownOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        return (
            <div className="relative text-right" ref={containerRef}>
                <button type='button'
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer flex items-center justify-end text-white hover:text-[#FF9900] transition-colors duration-200"

                >
                    <User size={20} className="mr-1" />
                    <span className='hidden md:block'> {isLogado ? usuario?.nome : 'Minha Conta'}</span>

                </button>

                {isDropdownOpen && (
                    <div className="absolute p-2 right-0 mt-2 w-48 bg-gray-600 rounded-md shadow-lg z-10">
                        <div className="py-1">
                            {!isLogado ? (
                                <>
                                    <button type='button'
                                        onClick={() => navigate('/login')}
                                        className="block bg-gray-700 w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 rounded-xs cursor-pointer"
                                    >
                                        Fazer Login
                                    </button>
                                    
                                </>
                            ) : (
                                <>
                                    <span className="cursor-pointer flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600">
                                        <User size={16} className="mr-2" /> Minha Conta
                                    </span>
                                    <span className="cursor-pointer flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600">
                                        <Package size={16} className="mr-2" /> Meus Pedidos
                                    </span>
                                    <span className="cursor-pointer flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600">
                                        <ShoppingCart size={16} className="mr-2" /> Carrinho
                                    </span>
                                    <div className="border-t border-gray-600 my-1"></div>
                                    <button
                                        onClick={logout}
                                        className="flex items-center w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-600"
                                    >
                                        <LogOut size={16} className="mr-2" /> Sair
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }


export default UserAccountDropdown;