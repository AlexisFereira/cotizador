import React, {useState} from "react";
import {Btn, Flex, Switch, BtnTab} from "../ui";
import {Formik, Form} from "formik";
import {Transition} from 'react-spring/renderprops'


const Marketing = (props) => {

    const [tab, setTab] = useState(true)

    return (
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
                <Form className={"wc "}>
                    <div className="wc position-relative">

                        <Flex style={props} jc={"flex-start"} className={"wc"} alg={"flex-start"}>
                            <Flex flex={"0 0 40px"}>
                                <Switch
                                    checked={values.estrategia}
                                    value={values.estrategia}
                                    onchange={handleChange}
                                    name={"estrategia"}
                                />
                            </Flex>
                            <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                                <p className={" pl-3"}>1. ESTRATEGIA DIGITAL: <b>$650.000</b></p>

                                <div className="wc pl-3">
                                    <p>Internet le brinda un mundo de nuevas oportunidades de negocio, nosotros le
                                        aportamos
                                        la
                                        estrategia efectiva de marketing digital para lograrlo. Este servicio
                                        incluye:</p>

                                    <ul className={"pl-0"}>
                                        <li> Análisis del sector y tendencias del mercado</li>
                                        <li> Plataformas y redes publicitarias de mayor beneficio para la compañía</li>
                                        <li> Estudio de la competencia y líderes del sector</li>
                                        <li> Análisis de audiencias y segmentos</li>
                                        <li> Investigación de palabras clave</li>
                                        <li> Asignación de presupuestos publicitarios</li>
                                    </ul>

                                </div>
                            </Flex>
                        </Flex>

                    </div>

                    <div className="wc f01 jcfe py-4">
                        <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                            <Btn type={"submit"} disabled={props.disabled}>siguiente</Btn>
                        </div>
                    </div>
                </Form>)}
        </Formik>
    )
}

export default Marketing;