import React from "react";
import Header from "./components/header";
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/basket";
import Uncertain from "./components/uncertain";
import Create from "./components/create";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/basket`} element={<Basket/>}/>
                    <Route path={`/create`} element={<Create/>}/>
                    <Route path="*" element={<Uncertain/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;