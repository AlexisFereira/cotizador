import React,{useState} from "react";
import {Btn, Flex, Switch} from "../ui";


const Logo = (props) => {

   const[logo,setLogo]=useState({
       tipo:'',
       logo:false
   })

    return (

                <form className={"wc"}>
                    <p><b>¿Necesitas un nuevo logotipo o imagen corporativa?</b></p>
                    <p>En Estudio Digital diseñamos logos bien pensados, también manuales de marca y todo el conunto de
                        piezas que requiere la identidad corporativa de tu empresa.</p>

                    <Flex jc={"flex-start"} className={"wc"}>
                        <Flex flex={"0 0 40px"}>
                            <Switch
                                checked={logo.tipo === "logo"}
                                onchange={()=> {
                                    if(logo.tipo === "logo"){
                                        setLogo({
                                            tipo:'',
                                            logo:false
                                        })
                                    }else{
                                        setLogo({
                                            tipo:'logo',
                                            logo:true
                                        })
                                    }
                                }}
                                name={"logo"}
                            />
                        </Flex>
                        <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                            <p className={"mb-0 pl-3"}>Diseño de logo profesional: <b>$800,000.</b></p>
                        </Flex>
                    </Flex>

                    <Flex jc={"flex-start"} className={"wc pt-3"}>
                        <Flex flex={"0 0 40px"}>
                            <Switch
                                checked={logo.tipo === "manual"}
                                onchange={()=> {
                                    if(logo.tipo === "manual"){
                                        setLogo({
                                            tipo:'',
                                            logo:false
                                        })
                                    }else{
                                        setLogo({
                                            tipo:'manual',
                                            logo:true
                                        })
                                    }
                                }}
                                name={"manual"}
                            />
                        </Flex>
                        <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                            <p className={"mb-0 pl-3"}> Creación de imagen corporativa (Logo + manual de
                                marca): <b>$1,300,000</b></p>
                        </Flex>
                    </Flex>
                    <div className="wc f01 jcfe py-4">
                        <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                            <Btn type={"submit"} disabled={props.disabled}>siguiente</Btn>
                        </div>
                    </div>
                </form>

    )
}

export default Logo;