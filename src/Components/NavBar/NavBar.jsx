import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProducts } from '../../DataSlice';
import './NavBar.css'

function NavBar() {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { username } = useSelector((store) => store.data)
    const { cart } = useSelector((store) => store.data)

    const categoryCount = Object.keys(cart).length;

    if (username === null) {
        // navigate('')
    }
    console.log(cart);

    useEffect(() => {
        getcategories()
    }, [])

    function getcategories() {
        axios('https://fakestoreapi.com/products/categories')
            .then((res) => {
                console.log(res.data)
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err)
                navigate('notfound')
            })
    }

    function getCartegoryProducts(item) {
        // debugger
        axios(`https://fakestoreapi.com/products/category/${item}`)
            .then((res) => {
                console.log(res.data)
                dispatch(setProducts(res.data))
                navigate('home')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function gotocart() {
        navigate('cart')
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar href="#home"> Shope </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            {
                                categories.map((item) => <NavDropdown.Item onClick={() => getCartegoryProducts(item)} key={item}> {item} </NavDropdown.Item>)
                            }
                            {/* <NavDropdown.Divider /> */}
                            {/* <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <div className='d-flex align-items-center'>
                        <div onClick={gotocart} className='cart-icon'>
                            <div className='cart-no'>
                                {categoryCount}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </div>

                        <div className="profile d-flex justify-content-center align-content-center align-items-center p-2">
                            <div className='usename'>
                                Hi,{username ?? 'User'} 
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </div>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;