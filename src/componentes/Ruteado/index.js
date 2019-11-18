import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../home";
import Cotizador from "../contizador";

const Ruteado =() =>{
    return(
        <Router className={"wc"}>
            <Switch>
                {/*<Route exact path={'/nuevoCotizador'} render={()=> <Home/> }/>*/}
                <Route exact path={'/nuevoCotizador'} render={()=> <Cotizador/> }/>
                <Route  exact path={'/respuesta'} render={()=> <Home/> }/>
            </Switch>
        </Router>
    )
}

export default Ruteado;



