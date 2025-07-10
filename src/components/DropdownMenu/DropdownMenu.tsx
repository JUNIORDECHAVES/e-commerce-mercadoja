import { User, LogOut, Package, Store, ShoppingCart } from 'lucide-react'; // Importa ícones necessários
import { memo, useState } from 'react';

const UserAccountDropdown = memo(
    () => {
        // Estados para simular o status de login e tipo de usuário
        const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
        const [userType, setUserType] = useState<'customer' | 'seller' | null>(null); // 'customer' ou 'seller'
        const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // Estado para controlar a visibilidade do dropdown

        // Função para simular o login
        const handleLogin = (type: 'customer' | 'seller'): void => {
            setIsLoggedIn(true);
            setUserType(type);
            setIsDropdownOpen(false); // Fecha o dropdown após a ação
        };

        // Função para simular o logout
        const handleLogout = (): void => {
            setIsLoggedIn(false);
            setUserType(null);
            setIsDropdownOpen(false); // Fecha o dropdown após a ação
        };

        return (
            <div className="relative text-right">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-pointer flex items-center justify-end text-white hover:text-[#FF9900] transition-colors duration-200"
                >
                    <User size={20} className="mr-1" />
                    <span className='hidden md:block'>Minha Conta</span>
                    
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                        <div className="py-1">
                            {!isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => handleLogin('customer')}
                                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600"
                                    >
                                        Login Cliente
                                    </button>
                                    <button
                                        onClick={() => handleLogin('seller')}
                                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600"
                                    >
                                        Login Vendedor
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
                                    {userType === 'seller' && (
                                        <span className="cursor-pointer flex items-center px-4 py-2 text-sm text-white hover:bg-gray-600">
                                            <Store size={16} className="mr-2" /> Painel do Vendedor
                                        </span>
                                    )}
                                    <div className="border-t border-gray-600 my-1"></div>
                                    <button
                                        onClick={handleLogout}
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
)

export default UserAccountDropdown;