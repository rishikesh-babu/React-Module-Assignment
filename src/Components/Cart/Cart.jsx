import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity } from '../../DataSlice'

function Cart() {

    const { cart } = useSelector((store) => store.data)
    const [total, setTotal] = useState(0)
    const cartItemsArray = Object.values(cart)
    const dispatch = useDispatch()

    useEffect(() => {
        calculateTotalPrice()
    })

    function calculateTotalPrice() {
        const totalPrice = cartItemsArray.reduce((acc, item) => {
            return acc + (item.price * item.count)
        }, 0)
        setTotal(totalPrice)
    }

    // Handlers for increasing and decreasing quantity
    const handleIncrease = (productId) => {
        dispatch(increaseQuantity(productId))
    }

    const handleDecrease = (productId) => {
        dispatch(decreaseQuantity(productId))
    }

    function placeorder() {
        alert('Order placed successfully')
        dispatch(clearCart())

    }

    return (
        <div className='container'>

            {cartItemsArray.length > 0 && (
                <div className="item-heading border container">
                    <div> Item </div>
                    <div> Price </div>
                    <div> Quantity </div>
                </div>
            )}

            {
                cartItemsArray.length > 0 ?
                    (
                        cartItemsArray.map((item, index) => (
                            <div className='product-div border container' key={index} >
                                <div>
                                    <img className='image' src={item?.image} alt="" />
                                    <h5 className='name'>{item?.title}</h5>
                                </div>
                                <p className='price'> ${item?.price}</p>
                                <div className='quantity-div'>
                                    <button onClick={() => handleIncrease(item.id)}> + </button>
                                    <p className='quantity'> {item?.count}</p>
                                    <button onClick={() => handleDecrease(item.id)}> - </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className='text-center'>No items in the cart.</p>
                        </div>
                    )
            }

            {cartItemsArray.length > 0 && (
                <div className='total-div border container'>
                    <div>Total:</div>
                    <div>${total.toFixed(2)}</div>
                    <button onClick={placeorder}>
                        Place order
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
