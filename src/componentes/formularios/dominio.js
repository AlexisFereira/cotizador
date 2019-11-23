import React, {useContext, useState} from "react";
import {Campo,Switch,Flex,Btn} from "../ui";
import axios from "axios"
import {EstadoContext} from "../estadoGlobal";


const Dominio = (props)=> {

    const [estadoLocal,SetE] = useState({
        dominio:false,
        value:"",
        disponible:false,
        procesando:false,
        error:"",
        disabled:false,
        poseeDominio:false
    })

    const [estadoTab,SetET] = useState({
        procesando:false
    })

    const [estado,setEstado] = useContext(EstadoContext);


    const actualizaE = (x)=> SetE(Object.assign({},estadoLocal,x))


    let consultaDominio = ()=> {
        if(estado.value !== ""){
            if(/\s/.test(estadoLocal.value)){
                actualizaE({error:"El dominio no puede tener espacios."})
            }else{

                actualizaE({procesando:true})
                alert("voy a consultar men.")

                axios.get()
                    .then(reseponse =>{
                        if(reseponse.status){
                            actualizaE({dominio:true})
                        }else {

                        }
                        })
                    .catch(err=> actualizaE({error:err}))


            }

        }else{
            actualizaE({error:"Debe ingresar un dominio a consultar"})
        }
    }

    let setDominio = ()=>{

    }


    return(
        <div className={"wc px-2 px-md-3 px-lg-0 "}>
            <small>Consulte su dominio de preferencia </small>
            <Campo
                name={"dominio"}
                tipo={"append"}
                btnAppendText={"Consultar"}
                onAppendClick={(x)=>{
                    console.log("puto")
                    consultaDominio()
                }}
                error={estadoLocal.error}
                value={estadoLocal.value}
                disabled={props.disabled || estadoLocal.disabled}
                procesando={estadoLocal.procesando}
                onchange={(x)=>{
                    if(x !== ""){
                        actualizaE({value: x,error:""})
                    }
                }}
            />
            <div className="wc py-2">
                {estadoLocal.disponible && <p style={{color:"green"}}>¡Dominio disponible!</p>}c
                <p>Costo del dominio: <b>$50.0000 cop (al año)</b></p>
            </div>
            <Flex
                className="wc py-3"
                jc={"flex-start"}
            >
                <Switch
                    checked={estadoLocal.poseeDominio}
                    onchange={()=> actualizaE({poseeDominio:!estadoLocal.dominio})}
                />
                <p className={"mb-0 pl-3"}>Ya poseo un dominio</p>

            </Flex>

            <div className="wc f01 jcfe pb-4">
                <div className="col-12 col-sm-8 col-md-5 col-lg-4 px-0">
                    <Btn
                        type={"submit"}
                        loading={estadoTab.procesando}
                        disabled={estadoTab.procesando || props.disabled || !estadoLocal.dominio}
                    >{estadoTab.procesando ? "Procesando..." : "Siguiente"}</Btn>
                </div>
            </div>
        </div>
    )
}

export default Dominio;