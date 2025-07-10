import Logo from './carrinho_vazio2-removebg-preview.png';
import { useCartItems } from '../../contexts/userCarItens';

const CartPage = () => {

    const { cartItems, totalCartPrice } = useCartItems()

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
                    <section className='flex-grow flex justify-between w-xs  md:w-3xl mt-20'>
                        <div>
                            {cartItems.map(item => (
                                <div>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>

                                    <div>
                                        <ul>
                                            <li key={item.id}>
                                                {item.title} - ${item.price} x {item.quantity}
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            ))}

                        </div>

                        <div>
                            total valor {totalCartPrice}
                        </div>
                    </section>

                )}

            </div>



        </div>
    );
};

export default CartPage;