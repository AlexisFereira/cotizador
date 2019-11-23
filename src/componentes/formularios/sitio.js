import React,{useState} from "react";
import {Flex, BtnTab, CardG, Btn,Switch} from "../ui";
import {Transition} from 'react-spring/renderprops'


const Sitio = ({disabled})=>{

    const [tab,setTab]=useState(1);
    const [shopify,setShop]=useState("informativo");


    return(
        <div className={"wc"}>
            <p>¿Qué tipo de sitio web necesitas?</p>

            <Flex className={"wc"} jc={"flex-start"}>
                <Flex flex={"1 0 auto"} className={"px-1 py-2"}>
                    <BtnTab active={tab ===1} onClick={()=> setTab(1)}>Informativo: $1.400.000</BtnTab>
                </Flex>
                <Flex flex={"1 0 auto"} className={"px-1 py-2"}>
                    <BtnTab active={tab === 2} onClick={()=> setTab(2)}>Avanzado: $1.600.000</BtnTab>
                </Flex>
                <Flex flex={"1 0 auto"} className={"px-1 py-2"}>
                    <BtnTab active={tab=== 3} onClick={()=> setTab(3)}>eCommerce desde: $1.900.000</BtnTab>
                </Flex>
            </Flex>

            <div className="wc position-relative">
            <Transition
                items={tab}
                from={{  opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0,position: 'absolute',left:'0' }}>
                {tab =>
                    tab === 1 ?
                        props =>
                            <div style={props} className={"py-3"}>
                                <p>Especial para mostrar el portafolio de productos y servicios de profesionales
                                    independientes y Pymes.</p>

                                <CardG className={"p-2"}>
                                    Cada una de las 3 opciones incluye el diseño de hasta 5 páginas. Por ejemplo: Si ofreces servicios como abogado, y quieres una página independiente para cada uno de los servicios "Civil", "Penal" y "Familiar". Entonces podrías requerir 3 páginas adicionales a las 5 incluidas (Inicio 1, Bufete 2, Servicios 3, Civil 4, Penal 5, Familiar 6, Blog 7, Contacto 8). En el siguiente paso puedes adquirir páginas adicionales
                                </CardG>

                                <Flex className="wc mb-3 pt-3">
                                    <Flex flex={"0 0 40px"}>
                                        <Switch checked={shopify=== "informativo"} onchange={()=> setShop("informativo")}/>
                                    </Flex>
                                    <Flex jc={"flex-start"} flex={"1 0 100px"}>
                                        <p className={"mb-0 pl-3"}>Quiero una sitio Informativo:  <b>$1.400.000 COP</b></p>
                                    </Flex>
                                </Flex>
                            </div>
                        :
                    tab === 2 ?
                        props =>
                            <div style={props} className={"py-3"}>
                                <p>Sitio web con funciones avanzadas para los usuarios, por ejemplo: Catálogo de Pedidos, Reservas Online, Renta de Vehículos, Gestor de Propiedad Raíz (Inmobiliarias), Directorio, entre otros.</p>
                                <CardG className={"p-2"}>
                                    Cada una de las 3 opciones incluye el diseño de hasta 5 páginas. Por ejemplo: Si ofreces servicios como abogado, y quieres una página independiente para cada uno de los servicios "Civil", "Penal" y "Familiar". Entonces podrías requerir 3 páginas adicionales a las 5 incluidas (Inicio 1, Bufete 2, Servicios 3, Civil 4, Penal 5, Familiar 6, Blog 7, Contacto 8). En el siguiente paso puedes adquirir páginas adicionales
                                </CardG>
                                <Flex className="wc mb-3 pt-3">
                                    <Flex flex={"0 0 40px"}>
                                        <Switch checked={shopify=== "avanzado"} onchange={()=> setShop("avanzado")}/>
                                    </Flex>
                                    <Flex jc={"flex-start"} flex={"1 0 100px"}>
                                        <p className={"mb-0 pl-3"}>Quiero un sitio avanzado: <b>$1.600.000 COP</b></p>
                                    </Flex>
                                </Flex>
                            </div>
                        :
                        props =>
                            <div style={props} className={"py-3"}>
                                <p>Tienda Online desarrollada en WooCommerce o Shopify incluye la inserción de hasta 15 artículos con sus respectivas variaciones, configuración de pasarela de pagos y gestor de productos e inventario.</p>
                                <Flex className="wc mb-3">
                                    <Flex flex={"0 0 40px"}>
                                        <Switch checked={shopify=== "woo"} onchange={()=> setShop("woo")}/>
                                    </Flex>
                                    <Flex jc={"flex-start"} flex={"1 0 100px"}>
                                        <p className={"mb-0 pl-3"}>Quiero una tienda en woocommerce <b>$1.900.000</b></p>
                                    </Flex>
                                </Flex>
                                <Flex className="wc">
                                    <Flex flex={"0 0 40px"}>
                                        <Switch checked={shopify === "shopify"} onchange={()=> setShop("shopify")}/>
                                    </Flex>
                                    <Flex jc={"flex-start"} flex={"1 0 100px"}>
                                        <p className={"mb-0 pl-3"}>Quiero una tienda en Shopify <b>$2.200.000</b></p>
                                    </Flex>
                                </Flex>
                            </div>
                }
            </Transition>

            </div>
            <div className="wc f01 jcfe pb-4">
                <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                    <Btn type={"submit"} disabled={disabled}>siguiente</Btn>
                </div>
            </div>

        </div>
    )
}

export default Sitio;
