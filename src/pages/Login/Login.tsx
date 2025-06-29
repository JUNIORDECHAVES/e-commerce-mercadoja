import { Mail, Lock, Search, LogIn } from 'lucide-react'; // Importa ícones necessários
import logo from '../../assets/mercadoja2.0-removebg-preview com sombra.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">

            <div className="bg-[#232F3E] rounded-lg shadow-2xl p-8 md:p-10 w-full max-w-md"> 

                <h1 className="text-3xl font-bold text-center text-white mb-2">
                    Login
                </h1>

                <p className="text-center text-gray-300 mb-8">
                    Ou <span onClick={() => navigate("/cadastro")} className="text-[#FF9900] hover:underline font-semibold cursor-pointer">Cadastre-se</span>
                </p>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">email</label> 
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                id="email"
                                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="email"
                            />
                        </div>
                    </div>

                    {/* Campo de Senha */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label> {/* Etiqueta para acessibilidade */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                id="password"
                                className="w-full pl-10 pr-10 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="Password"
                            />
                            {/* Ícone de busca/olho para senha, se necessário */}
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
                        </div>
                    </div>

                    {/* Botão de Login */}
                    <button className="w-full bg-[#FF9900] text-[#232F3E] font-bold py-3 px-4 rounded-md shadow-lg hover:bg-[#E68A00] transition-colors duration-200 flex items-center justify-center space-x-2">
                        <LogIn size={20} />
                        <span>LOGIN</span>
                    </button>
                </div>

                {/* Logo do MercadoJá na parte inferior central */}
                <div className="flex justify-center mt-8">
                    {/* Usando um placeholder de texto para a logo MercadoJá. Você pode substituir por um componente de imagem ou SVG real. */}
                    <span className="text-white text-lg font-bold">
                    <img className="w-32 rounded-xl " src={logo} alt="logo" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;