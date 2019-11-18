import React from "react";
import {Btn, Flex, Switch} from "../ui";
import {Formik,Form} from "formik";



const Integracion = (props)=> {
    return(

        <Formik
            initialValues={{
                estrategia: false,
                integracion: false,
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched, values, validateField, validateForm, handleChange}) => (
        <Form className={"wc"}>
            <Flex style={props}  jc={"flex-start"} className={"wc"} alg={"flex-start"}>
                <Flex flex={"0 0 40px"}>
                    <Switch
                        checked={values.integracion}
                        value={values.integracion}
                        onchange={handleChange}
                        name={"integracion"}
                    />
                </Flex>
                <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                    <p className={" pl-3"}>INTEGRACIÓN DEL SISTEMA WEB CON REDES EXTERNAS: <b>$450.000</b></p>
                    <div className="pl-3 wc">
                        <p> El servicio de integración le permite a la compañía realizar campañas publicitarias
                            de producto a través de Google Shooping, Catálogos de Facebook, crear audiencias
                            personalizadas, hacer remarketing y mucho más. Este servicio incluye:</p>

                        <ul className={"pl-0"}>
                            <li> Google Analytics con eventos inteligentes</li>
                            <li> Creación de Feed para Google Merchant Center</li>
                            <li> Creación de Feed para Catálogos de Facebook</li>
                            <li> Integración con Pixel de Facebook</li>
                            <li> Instalación de etiqueta de remarketing y creación de listas</li>
                            <li> Configuración avanzada de sistema de sistema de atributos y conversiones</li>
                        </ul>
                    </div>
                </Flex>
                <div className="wc f01 jcfe py-4">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                        <Btn type={"submit"} disabled={props.disabled}>siguiente</Btn>
                    </div>
                </div>
            </Flex>
        </Form>)}
        </Formik>
    )
}

export default Integracion;