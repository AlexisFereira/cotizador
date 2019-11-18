import React from 'react';
import './index.scss'
import Ruteado from "./componentes/Ruteado";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import {EstadoProvider} from "./componentes/estadoGlobal";

function App() {
    return (
        <EstadoProvider>
            <div className="wc hc position-relative">
                <Header/>
                <div className={"wc"}>
                    <Ruteado/>
                </div>
                <Footer/>
            </div>
        </EstadoProvider>
    );
}

export default App;
