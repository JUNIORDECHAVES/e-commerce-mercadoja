import Logo from './carrinho_vazio2-removebg-preview.png';
import { useCartItems } from '../../contexts/userCarItens';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems, totalCartPrice } = useCartItems();

    return (
        // Substituído w-screen por w-full para evitar scroll horizontal desnecessário
        // min-h-screen garante que o fundo cubra a tela toda sem cortar o conteúdo
        <div className='w-full min-h-screen mt-10 md:mt-20 px-4 pb-10'>

            <h1 className='text-3xl md:text-4xl font-semibold text-center mb-10'>Shopping Cart</h1>

            {/* ESTADO VAZIO */}
            {cartItems.length === 0 && (
                <div className='w-full flex flex-col items-center justify-center animate-fade-in'>
                    <p className='mt-4 text-lg font-medium text-center text-gray-600'>Seu carrinho está vazio.</p>
                    <button
                        className='border-2 border-[#E68A00] hover:bg-[#E68A00] hover:text-white text-[#E68A00] transition-colors cursor-pointer font-bold py-2 px-6 rounded-md mt-5'
                        onClick={() => navigate('/')}
                    >
                        Voltar para a Loja
                    </button>
                    {/* Imagem responsiva: max-w evita que ela estoure em telas pequenas */}
                    <div className='mt-10 w-full max-w-[300px] md:max-w-[400px]'>
                        <img src={Logo} alt="Carrinho Vazio" className="w-full h-auto object-contain" />
                    </div>
                </div>
            )}

            {/* CARRINHO COM ITENS */}
            {cartItems.length >= 1 && (
                <div className='max-w-6xl mx-auto'>
                    <section className='flex flex-col lg:flex-row gap-8 items-start'>

                        {/* LISTA DE PRODUTOS */}
                        <div className='w-full lg:flex-grow space-y-4'>
                            <div className='shadow-sm border border-gray-100 rounded-xl p-2 md:p-4 bg-white max-h-[60vh] lg:max-h-[70vh] overflow-y-auto custom-scrollbar'>
                                {cartItems.map(item => (
                                    <div key={item.id} className='w-full rounded-lg p-3 mb-3 border-b border-gray-50 flex items-center gap-4 hover:bg-gray-50 transition-colors'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                className='rounded-lg w-20 h-20 md:w-32 md:h-32 object-cover'
                                                src={item.image}
                                                alt={item.title}
                                            />
                                        </div>

                                        <div className='flex flex-col md:flex-row justify-between w-full gap-2'>
                                            <div className='flex flex-col gap-1'>
                                                <h3 className='text-sm md:text-lg font-medium text-gray-800 line-clamp-2'>{item.title}</h3>
                                                <p className='text-xs md:text-sm text-gray-500'>Qtd: {item.quantity}</p>
                                                <p className='text-xs md:text-sm font-semibold'>Un: ${item.price}</p>
                                            </div>

                                            <div className='flex items-center justify-end'>
                                                <span className='font-bold text-orange-500 text-sm md:text-xl'>
                                                    ${(item.quantity * item.price).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RESUMO DA COMPRA - Sticky no desktop */}
                        <div className='w-full lg:w-80 lg:sticky lg:top-24 shadow-xl border border-gray-100 rounded-xl p-6 bg-white'>
                            <h2 className='text-xl font-bold mb-6 text-gray-800 border-b pb-2'>Resumo</h2>

                            <div className='space-y-3 mb-6'>
                                <div className='flex justify-between text-gray-600'>
                                    <span>Produtos</span>
                                    <span>{cartItems.length}</span>
                                </div>
                                <div className='flex justify-between items-center text-xl font-bold text-gray-900 pt-3 border-t'>
                                    <span>Total</span>
                                    <span className='text-orange-500'>${totalCartPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5'>
                            <button
                                className='w-full py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transform active:scale-95 transition-all shadow-lg hover:shadow-orange-200 cursor-pointer'
                                onClick={() => navigate('/checkout')}
                            >
                                Finalizar Compra
                            </button>

                            <button
                                onClick={() => navigate('/')}
                                className='w-full py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-lg hover:border-orange-400 hover:text-orange-500 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer'
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                                Continuar Comprando
                            </button>
                            </div>

                        </div>

                    </section>
                </div>
            )}
        </div>
    );
};

export default CartPage;