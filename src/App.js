import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Notfound from "./Components/Notfound/Notfound";
import Cart from "./Components/Cart/Cart";

function App() {
    return (
        <div className="App d-flex flex-column justify-content-center">
            <BrowserRouter> 
                <Routes>
                    <Route path="" element={<Login />} />
                    <Route path="details/:id" element={<Details />} />
                    <Route path="/" element={<Rootlayout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="*" element={<Notfound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
