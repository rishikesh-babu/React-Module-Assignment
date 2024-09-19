import React from 'react'
import './Productcard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setCart } from '../../DataSlice'

// function Productcard({ item }) {

// const navigate = useNavigate()
// const dispatch = useDispatch()

// function godetails() {
//   console.log(item.id)
//   navigate(`/details/${item.id}`)
// }
// function addtocart() {
//   axios(`https://fakestoreapi.com/products/${item.id}`)
//   .then((res) => {
//     // console.log(res.data)
//     dispatch(setCart(res.data))
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

//   return (
//     <div className='card'>
//         <img src={item?.image} alt="" />
//         <h2 className='title'>
//           {item?.title}
//         </h2>
//         <div className="add-details">
//           <button onClick={addtocart}> Add </button>
//           <button onClick={godetails}> Details </button>
//         </div>
//     </div>
//   )
// }

// export default Productcard

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({ item }) {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	function godetails() {
		console.log(item.id)
		navigate(`/details/${item.id}`)
	}
	function addtocart() {
		axios(`https://fakestoreapi.com/products/${item.id}`)
			.then((res) => {
				// console.log(res.data)
				dispatch(setCart(res.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Card className='card' style={{ width: '18rem' }}>
			<Card.Img className='image' variant="top" src={item?.image} style={{ height: '15rem' }} />
			<Card.Body className='d-flex flex-column justify-content-between'>
				<Card.Title>
					{item?.title}
				</Card.Title>
				<Card.Text>

				</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
				<div className="add-details">
					<button onClick={addtocart}> Add </button>
					<button onClick={godetails}> Details </button>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Productcard;