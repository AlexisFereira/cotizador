import React from "react";
import {Flex, Switch, Campo, CardG, Btn} from "../ui";
import { Formik, Form } from 'formik';



const Adicionales = (props)=>{

    return(
        <Formik
            initialValues={{
                pAdicionales: false,
                cantidad: 1,
                idiomas:true,
                correos:true
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched,values,handleChange}) => (
        <Form className={"wc pb-4"}>
            <Flex className="wc" alg={"flex-start"}>
                <Flex flex={"0 0 40px"}>
                    <Switch
                        checked={values.pAdicionales}
                        value={values.pAdicionales}
                        onchange={handleChange}
                        name={"pAdicionales"}
                    />
                </Flex>
                <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                    <p className={"mb-0 pl-3"}> Páginas adicionales</p>
                    <Flex jc={"flex-start"} className={"wc pl-3 pt-2"}>
                        <Flex><small>Cantidad de páginas</small></Flex>
                        <Flex flex={"0 0 80px"} className={"pl-3"}>
                            <Campo
                                type={"number"}
                                value={values.cantidad}
                                onchange={handleChange}
                                disabled={!values.pAdicionales}
                                name={"cantidad"}
                            />
                        </Flex>
                    </Flex>
                </Flex>
                <CardG className={"p-2 wc mb-4 mt-3" }>
                    <p className={"mb-0"}> Cada página adicional cuesta: <br/>
                        De 1 a 20: <b>$80.000 COP</b> Cada una <br/>
                        De 21-100: <b>$50.000 COP</b> Cada una</p>
                </CardG>
                <Flex flex={"0 0 40px"}>
                    <Switch
                        checked={values.idiomas}
                        value={values.idiomas}
                        onchange={handleChange}
                        name={"idiomas"}
                    />
                </Flex>
                <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                    <p className={"mb-0 pl-3"}> Necesito varios idiomas en mi sitio: <b>$450,000</b></p>
                </Flex>
                <div className="wc py-2"></div>
                <Flex flex={"0 0 40px"}>
                    <Switch
                        checked={values.correos}
                        value={values.correos}
                        onchange={handleChange}
                        name={"correos"}
                    />
                </Flex>
                <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                    <p className={"mb-0 pl-3"}>Correos corporativos con G Suite ó Zoho Mail:  <b>$200.000</b></p>
                </Flex>
                <CardG className={"p-2 mt-3"}>
                    (Zoho hasta 5 cuentas gratis, cada una con 5 GB de espacio disponible. G Suite 6 USD / mes por cada usuario).
                </CardG>

                <div className="wc f01 jcfe pt-4">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                        <Btn type={"submit"} disabled={props.disabled}>siguiente</Btn>
                    </div>
                </div>
            </Flex>

        </Form>
            )}
        </Formik>
    )
}


export default Adicionales;
