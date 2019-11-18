import React,{createContext,useState} from "react";

export const EstadoContext = createContext();

export const EstadoProvider = (props)=> {
    const [estado,setEstado] = useState([
                {
                    name:'adicionales',
                    cantidad:'',
                    idiomas:false,
                    correos:false,
                    monto:0,
                    completado:false
                },
                {
                    name:'certificado',
                    certificado:false,
                    monto:0,
                    completado:false
                },
                {
                    name:'dominio',
                    dominio:'',
                    monto:0,
                    completado:false
                },
                {
                    name:'hosting',
                    hosting:false,
                    monto:0,
                    completado:false
                },
                {
                    name:'logo',
                    logo:false,
                    tipo:"",
                    monto:0,
                    completado:false
                },
                {
                    name:'marketing',
                    marketing:false,
                    monto:0,
                    completado:false
                },
                {
                    name:'marketing',
                    marketing:false,
                    monto:0,
                    completado:false
                },
                {
                    name:'registro',
                    nombre:'',
                    empresa:'',
                    telefono:'',
                    correo:'',
                    completado:false
                },
                {
                    name:'sitio',
                    tipo:'',
                    ecommerce:false,
                    monto:0,
                    completado:false
                }
            ])

    return(
        <EstadoContext.Provider value={[estado,setEstado]}>
            {props.children}
        </EstadoContext.Provider>
    )
}

