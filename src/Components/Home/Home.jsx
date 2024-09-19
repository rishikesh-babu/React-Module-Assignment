import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../DataSlice'
import Productcard from '../Productcard/Productcard'
import './Home.css'

function Home() {

    const { products } = useSelector((store) => store.data)
    const dispatch = useDispatch()

    useEffect(() => {
        getproducts()
    },[])

    function getproducts() {
        // debugger
        if (products.length > 0) {
            axios(`https://fakestoreapi.com/products`)
                .then((res) => {
                    console.log(res.data)
                    dispatch(setProducts(res.data))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return ( 
        <div className='product d-flex flex-wrap justify-content-around gap-3 m-4'>
            {
                products.map((item) => <Productcard item={item} /> )
            }
        </div>
    )
}

export default Home
