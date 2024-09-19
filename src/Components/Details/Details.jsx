import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setCart, setDetails } from '../../DataSlice'
import './Details.css'

function Details() {

    const { id } = useParams()
    const { details } = useSelector((store) => store.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getdetails()
    },[])

    function getdetails() {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            console.log(res.data)
            dispatch(setDetails(res.data))
        })
        .catch((err) => {
            console.log(err)
            navigate(-1)
        })
    }
    function addtocart() {
		axios(`https://fakestoreapi.com/products/${id}`)
			.then((res) => {
				// console.log(res.data)
				dispatch(setCart(res.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}
    function goback() {
        navigate(-1)
    }

    return (
        <div className='details'>
            <img src={details.image} alt="Here is an image" />
            <div className='product-details d-flex flex-column justify-content-between'>
                <div>
                    <span className='title' >Title:</span>
                    <span> {details.title} </span>
                </div>
                <div>
                    <span className='title' >Rate:</span>
                    <span> {details.rating?.rate} </span>
                </div>
                <div>
                    <span className='title' >Price:</span>
                    <span> {details.price} </span>
                </div>
                <div className='div-button d-flex gap-5'>
                    <button onClick={addtocart}> Add </button>
                    <button onClick={goback}> Back </button>
                </div>
            </div>
        </div>
    )
}

export default Details
