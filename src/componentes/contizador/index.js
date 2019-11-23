import React, {useState, useContext, useEffect} from "react";
import MyTab from "../tab";
import {PAGE, Flex, Btn, Colors, Campo} from "../ui";
import Registro from "../formularios/registro";
import Sitio from "../formularios/sitio";
import Adicionales from "../formularios/adicionales";
import Logo from "../formularios/logo";
import Hosting from "../formularios/hosting";
import Certificado from "../formularios/certificado";
import Marketing from "../formularios/marketing";
import styled from "@emotion/styled";
import Modal from "../modal";
import {withRouter} from "react-router-dom";
import {EstadoContext} from "../estadoGlobal";
import {colorNames} from "react-spring/cookbook";
import Integracion from "../formularios/integracion";
import Dominio from "../formularios/dominio"

const Resumen = styled.section`
     width:100%;
     background:#f5f5f5;
     border-radius:10px;
     position:relative;
     box-shadow:0 1px 5px rgba(0,0,0,.28);
`

const TableR = styled.table`
    min-width:500px;
    width:100%;
    
   
    
    tr {
    td{
        border-bottom:1px solid #e4e4e4;  
        }
    
    &:last-child{
     td{
        border-bottom:none; 
        }   
       }
    }
    
    
    
     tbody{
     
        td{      
         font-size:13px;
         padding:9px .5em;
         
         &:last-child{
           text-align:right;
         }
        }
    }
    
   
`

const Cotizador = (props) => {

    const [tab, setTab] = useState(1);
    const [modal, setModal] = useState(false);

    const [estado, setEstado] = useContext(EstadoContext);

    const [myState, setState] = useState({
        current: 1,
    })


    let actualizaMyState = (x) => setState({...estado, x})

    let completados = estado.reduce((item, index) => Object.assign({}, item, {[index.name]: index.completado}), {})

    console.log(completados)

    return (
        <PAGE>
            <div className="container px-0">
                <div className="wc my-4 py-4 text-center px-3">
                    <h1 className={"cb"}>Cotizador online</h1>
                    <p className={"cb"}>Completa lo siguientes pasos para que realices tu cotización</p>
                </div>

                <div className="col-xl-10 mx-auto px-xl-0 pb-4 mb-4">

                    <MyTab
                        title={"Registro"}
                        open={tab === 1}
                        handle={setTab}
                        tabN={1}
                        completado={completados.registro}
                        current={myState.current}
                    >
                        <Registro
                            hanldeTab={(x) => setTab(x)}
                        />
                    </MyTab>

                    <MyTab
                        title={"Sitio"}
                        open={tab === 2}
                        icon={1}
                        handle={setTab}
                        tabN={2}
                        completado={completados.sitio}
                    >
                        <Sitio disabled={!completados.registro} hanldeTab={(x) => setTab(x)}/>
                    </MyTab>

                    <MyTab
                        title={"Adicionales"}
                        open={tab === 3}
                        icon={2}
                        handle={setTab}
                        tabN={3}
                        current={myState.current}
                    >
                        <Adicionales
                            disabled={!completados.sitio}
                            hanldeTab={(x) => setTab(x)}
                        />
                    </MyTab>

                    <MyTab
                        title={"Logo"}
                        open={tab === 4}
                        icon={3}
                        handle={setTab}
                        tabN={4}
                        current={myState.current}
                    >
                        <Logo
                            disabled={!completados.adicionales}
                            hanldeTab={(x) => setTab(x)}
                        />
                    </MyTab>

                    <MyTab
                        disabled={!completados.logo}
                        title={"Dominio"}
                        open={tab === 5}
                        icon={4}
                        handle={setTab}
                        tabN={5}
                        current={myState.current}

                    >
                        <Dominio
                            disabled={!completados.logo}
                            hanldeTab={(x) => setTab(x)}
                        />
                    </MyTab>

                    <MyTab
                        title={"Hosting"}
                        open={tab === 6}
                        icon={5}
                        handle={setTab}
                        tabN={6}
                        current={myState.current}
                    >
                        <Hosting
                            disabled={!completados.dominio}
                            hanldeTab={(x) => setTab(x)}
                        />
                    </MyTab>

                    <MyTab
                        title={"Certificado de seguridad y CDN"}
                        open={tab === 7}
                        icon={6}
                        handle={setTab}
                        tabN={7}
                        current={myState.current}

                    >
                        <Certificado
                            disabled={!completados.hosting}
                        />
                    </MyTab>

                    <MyTab
                        title={"Marketing digital"}
                        open={tab === 8}
                        icon={7}
                        handle={setTab}
                        tabN={8}
                        current={myState.current}

                    >
                        <Marketing
                            disabled={!completados.certificado}
                        />
                    </MyTab>

                    <MyTab
                        title={"Integración sistema web"}
                        open={tab === 9}
                        icon={8}
                        handle={setTab}
                        tabN={9}
                        current={myState.current}

                    >
                        <Integracion
                            disabled={!completados.certificado}
                        />
                    </MyTab>

                    {Object.values(completados).every(item => item) &&
                    <div className="wc">
                        <Resumen className={"p-3 px-lg-4"}>
                            <div className="titulo text-center col-12 col-md-10 col-lg-8 mx-auto">
                                <b>¡Felicidades! A continuación te mostramos un resumen de tu cotización. El botón de la
                                    parte inferior la enviará en PDF a tu correo.</b>
                            </div>
                            <div className="wc py-4">
                                <b>Señor:</b><br/>
                                <b>Empresa:</b><br/>
                            </div>
                            <p>De acuerdo a su solicitud me permito cotizarle los siguientes productos:</p>

                            <Flex alg={"stretch"}>
                                <div className={"card col-12 col-md-4 p-3"}>
                                    <div className="text-center">
                                        <b className={"d-block"}>Paga ahora y recibe un 50% de descuento</b>
                                        <br/>
                                        <small className={"d-block"}>Cancela tu cotización y obtén un precio especial.
                                        </small>
                                    </div>
                                    <div className="wc pt-4">
                                        <small><b>Total a pagar:</b></small>
                                    </div>
                                    <div className="wc text-right">
                                        <div className="wc text-right">
                                            <span className={"d-block"} style={{
                                                fontSize: "13px",
                                                textDecoration: "line-through "
                                            }}>$2.000.000</span>
                                        </div>
                                        <b className={"d-block"} style={{fontSize: "30px"}}>$1000000 COP</b>
                                    </div>

                                    <div className="wc pt-4">
                                        <Btn>Pagar</Btn>
                                    </div>
                                </div>
                                <div className={"col-md-8 pl-md-3 px-0 mt-4 mt-md-0 "}>
                                    <Flex className="card hc p-3 wc" column>
                                        <Flex className={"wc"} flex={"1 0 100px"}>
                                            <div className="wc pb-2">
                                                <b>Detalle de cotización</b>
                                            </div>
                                            <div className="ContTabla wc"
                                                 style={{overflow: "hidden", overflowX: "auto"}}>
                                                <TableR className={""}>
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                            <small><b>Producto</b></small>
                                                        </th>
                                                        <th>
                                                            <small><b>Unidad</b></small>
                                                        </th>
                                                        <th>
                                                            <small><b>Valor unidad</b></small>
                                                        </th>
                                                        <th>
                                                            <small><b>Total</b></small>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Body content 1</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Body content 1</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Body content 1</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                        <td>Body content 2</td>
                                                    </tr>
                                                    </tbody>
                                                </TableR>
                                            </div>
                                        </Flex>
                                        <Flex className={"wc pt-3"} jc={"flex-end"}>
                                            Total: <b>$20000000</b>
                                        </Flex>
                                    </Flex>


                                </div>
                            </Flex>
                            <div className="wc cg py-4" style={{color: Colors.grey02, maxWidth: "700px"}}>
                                <small className={"d-block"}>Estos precios no incluyen IVA. Por favor presione el botón
                                    "Finalizar y enviar cotización" para recibirla en su correo de forma inmediata, por
                                    favor revise la bandeja de entrada.
                                </small>
                            </div>

                            <div className="wc">
                                <small><b>Observaciones:</b></small>
                                <Campo tipo={"textarea"}/>
                            </div>

                            <div className="wc f01 jcfe py-4">
                                <div className="col-12 col-sm-8 col-md-5 col-lg-4 px-0">
                                    <Btn brd onClick={() => setModal(true)}>Enviar cotización por correo</Btn>
                                </div>
                            </div>

                        </Resumen>
                    </div>
                    }


                </div>
            </div>
            <Modal
                show={modal}
                width={"480px"}
                hideClose
                callBack={() => props.history.push("/")}
            >
                <Flex column className="wc">

                    <img src="/img/mail.png" alt="" style={{width: "60px", height: "auto", margin: "30px 0"}}/>

                    <div className="wc text-center pb-3">
                        <p style={{fontSize: "24px"}}>¡Cotización enviada con éxito!</p>
                    </div>

                    <div className={"col-12 col-sm-8 col-md-6 pb-4"}>
                        <Btn onClick={() => setModal(false)}>Finalizar</Btn>
                    </div>

                </Flex>
            </Modal>
        </PAGE>
    )
}

export default withRouter(Cotizador);