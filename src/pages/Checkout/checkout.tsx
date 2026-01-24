import { useState } from 'react';
import { ShoppingBag, Truck, CreditCard, QrCode, Banknote, ShieldCheck } from 'lucide-react';
import { useCartItems } from '../../contexts/userCarItens';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('dinheiro');
    const navigate = useNavigate();

    const paymentMethods = [
                                { id: 'dinheiro', label: 'Dinheiro', icon: <Banknote size={20} />, discount: null },
                                { id: 'pix', label: 'PIX', icon: <QrCode size={20} />, discount: 0.05 },
                                { id: 'cartao', label: 'Cartão', icon: <CreditCard size={20} />, discount: null },
                            ];

    const { totalCartPrice, cartItems } = useCartItems();

    // Valores simulados
    const itemsValue = totalCartPrice;
    const shippingValue = 10.00;
    const discountValue = paymentMethods.find((method) => method.id === paymentMethod)?.discount || 0;
    const totalValue = (itemsValue + shippingValue) * (1 - discountValue);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-200 max-w-5xl flex flex-col justify-center items-center py-10 px-4 text-center">
                <h1 className="text-3xl font-extrabold text-[#232F3E]">
                    Seu carrinho esta vazio
                </h1>

                <p className="text-gray-600 mt-4">
                    Por favor, adicione itens ao seu carrinho antes de prosseguir com o checkout.
                </p>

                <button
                    className="bg-[#FF9900] text-white py-2 px-4 rounded-md mt-6 cursor-pointer hover:bg-[#E68A00] transition-colors duration-200"
                    onClick={() => navigate('/')}
                >
                    Voltar para a Loja
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-160 w-full md:mx-0 mt-10 py-10 px-8 md:shadow-md md:shadow-gray-400 rounded-2xl
        flex flex-col gap-10
        ">
            <div className="max-w-3xl mb-4 flex justify-start items-center">
                <h1 className="text-3xl font-extrabold text-[#232F3E]">
                    Mercado<span className="text-[#FF9900]">Ja</span>
                </h1>
            </div>

            <div className="max-w-3xl md:w-full lg:w-7xl grow flex flex-col gap-10 md:flex-row ">

                {/* Coluna da Esquerda: Pagamento (Ocupa 2 colunas no desktop) */}
                <div className="w-full md:w-1/2 lg:w-3/5">

                    <section className="bg-white p-6 rounded-md shadow-sm border-t-4 border-[#FF9900]">
                        <h2 className="text-xl font-bold text-[#232F3E] mb-6 flex items-center">
                            Como você deseja pagar?
                        </h2>

                        {/* Seleção de Tipo de Pagamento */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${paymentMethod === method.id
                                            ? 'border-[#FF9900] bg-orange-50 text-[#FF9900]'
                                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                                        }`}
                                >
                                    {method.icon}
                                    <span className="mt-2 font-semibold text-sm">{method.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Formulários Dinâmicos */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300 w-full">
                            {paymentMethod === 'dinheiro' && (
                                <div className="animate-in fade-in duration-300">
                                    <p className="text-gray-700 mb-4 font-medium">Pagamento na entrega:</p>
                                    <label className="block text-sm text-gray-600 mb-2">Precisa de troco? Se sim, para quanto?</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Troco para R$ 200,00"
                                        className="w-full p-3 border border-gray-300 rounded focus:ring-[#FF9900] focus:border-[#FF9900] outline-none"
                                    />
                                    <p className="mt-3 text-xs text-gray-500 italic">* O pagamento será realizado diretamente ao entregador.</p>
                                </div>
                            )}

                            {paymentMethod === 'pix' && (
                                <div className="text-center py-4 animate-in fade-in duration-300 w-full">
                                    <div className="bg-white p-4 inline-block rounded-lg shadow-sm mb-4">
                                        <QrCode size={120} className="text-[#232F3E]" />
                                    </div>
                                    <p className="text-sm text-gray-600">O código QR será gerado após clicar em "Finalizar Pedido".</p>
                                    <p className="font-bold text-[#232F3E] mt-2">5% de desconto no PIX!</p>
                                </div>
                            )}

                            {paymentMethod === 'cartao' && (
                                <div className="space-y-4 animate-in fade-in duration-300 w-full">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border border-gray-300 rounded focus:ring-[#FF9900] outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                                            <input type="text" placeholder="MM/AA" className="w-full p-3 border border-gray-300 rounded focus:ring-[#FF9900] outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                            <input type="text" placeholder="123" className="w-full p-3 border border-gray-300 rounded focus:ring-[#FF9900] outline-none" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Coluna da Direita: Resumo */}
                <div className="grow md:max-w-full">

                    <div className="bg-white rounded-md shadow-md sticky top-6 overflow-hidden">
                        <div className="bg-[#232F3E] text-white p-4">
                            <h2 className="text-lg font-bold flex items-center">
                                <ShoppingBag size={20} className="mr-2 text-[#FF9900]" /> Resumo do Pedido
                            </h2>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>R$ {itemsValue.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 items-center">
                                <span className="flex items-center"><Truck size={16} className="mr-1" /> Frete</span>
                                <span className="text-green-600 font-bold">R$ {shippingValue.toFixed(2)}</span>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-lg font-bold text-[#232F3E]">Total</span>
                                    <div className="text-right">
                                        <span className="block text-2xl font-black text-[#232F3E]">R$ {totalValue.toFixed(2)}</span>
                                        {
                                            paymentMethod === 'cartao' && (
                                                <span className="text-xs text-gray-500">em até 3x sem juros</span>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-[#FF9900] hover:bg-[#E68A00] text-[#232F3E] font-black py-4 rounded shadow-md uppercase tracking-wider transition-all transform hover:scale-[1.02]">
                                Finalizar Pedido
                            </button>

                            <div className="flex items-center justify-center gap-2 pt-4 text-gray-400">
                                <ShieldCheck size={18} />
                                <span className="text-[10px] uppercase font-bold tracking-widest">Ambiente Seguro</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

