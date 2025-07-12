import Logo from './carrinho_vazio2-removebg-preview.png';
import { useCartItems } from '../../contexts/userCarItens';

const CartPage = () => {

    const { cartItems, totalCartPrice, } = useCartItems()

    return (
        <div className='max-w-full h-screen mt-20'>

            <h1 className='text-4xl font-semibold text-center'>Shopping Cart</h1>
            {cartItems.length === 0 && (
                <div className='w-full'>
                    <p className='mt-4 font-medium text-center'>Seu Carrinho Estar Vazio.</p>
                    <div
                        style={{ backgroundImage: `url(${Logo})` }}
                        className={`h-100 w-100 mt-20 bg-cover`} />
                </div>
            )}
            <div className='w-full w-3xl'>
                {cartItems.length >= 1 && (
                    <section className='flex justify-between w-xs rounded-lg md:w-5xl mt-20 p-4 gap-20'>
                        <div className='shadow-lg border border-gray-200 rounded-lg p-2 w-3xl flex-grow h-fit'>
                            {cartItems.map(item => (
                                <div className='rounded-lg p-2 m-2 border border-gray-200 flex items-center' >
                                    <div>
                                        <img className='rounded-lg' src={item.image} alt={item.title} />
                                    </div>

                                    <div className='pl-4 text-base flex w-full w-xl justify-between items-center '>
                                        <ul className='flex  gap-2 flex-col'>
                                            <li key={item.id}>
                                                {item.title}
                                            </li>
                                            <li>${item.price} x {item.quantity}</li>
                                        </ul>
                                        <span className='font-semibold text-orange-400'>${item.quantity * item.price}</span>
                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className='shadow-lg border border-gray-200 rounded-lg p-4 w-full lg:w-80 flex-shrink-0 h-fit'>
                            <h2 className='text-xl font-semibold mb-4 text-gray-800'>Resumo do Carrinho</h2>
                            <div className='w-full  flex justify-between items-center text-lg font-bold text-gray-800'>
                                <span>Total</span>
                                <span  className='text-orange-400'>
                                    ${totalCartPrice}
                                    
                                </span>
                            </div>
                            <button className='mt-6 w-full py-3 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-500 transition duration-200 ease-in-out shadow-md cursor-pointer'>
                                Finalizar Compra
                            </button>
                        </div>
                    </section>

                )}

            </div>



        </div>
    );
};

export default CartPage;