import { Mail, Lock, User, LogIn, Store } from 'lucide-react'; // Importa ícones necessários
import logo from '../../assets/mercadoja2.0-removebg-preview com sombra1.png';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4"> {/* Fundo escuro para contrastar com o formulário */}
            <div className="bg-[#232F3E] rounded-lg shadow-2xl p-8 md:p-10 w-full max-w-md"> {/* Container do formulário com azul escuro */}

                {/* Título principal do formulário */}
                <h1 className="text-3xl font-bold text-center text-white mb-2">
                    Cadastre-se
                </h1>

                {/* Link para Login, logo abaixo do título */}
                <p className="text-center text-gray-300 mb-8">
                    Já tem uma conta? <span onClick={() => navigate("/login")} className="text-[#FF9900] hover:underline font-semibold cursor-pointer">Faça Login</span>
                </p>

                {/* Formulário de Cadastro */}
                <div className="space-y-6">
                    {/* Campo de Nome Completo */}
                    <div>
                        <label htmlFor="full-name" className="sr-only">Nome Completo</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                id="full-name"
                                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="Nome Completo"
                            />
                        </div>
                    </div>

                    {/* Campo de E-mail */}
                    <div>
                        <label htmlFor="register-email" className="sr-only">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                id="register-email"
                                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="E-mail"
                            />
                        </div>
                    </div>

                    {/* Campo de Senha */}
                    <div>
                        <label htmlFor="register-password" className="sr-only">Senha</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                id="register-password"
                                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    {/* Campo de Confirmar Senha */}
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirmar Senha</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                                placeholder="Confirmar Senha"
                            />
                        </div>
                    </div>

                    {/* Botão de Cadastrar */}
                    <button className="w-full bg-[#FF9900] text-[#232F3E] font-bold py-3 px-4 rounded-md shadow-lg hover:bg-[#E68A00] transition-colors duration-200 flex items-center justify-center space-x-2">
                        <LogIn size={20} />
                        <span>CADASTRAR</span>
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

export default RegisterPage;
