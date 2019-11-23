import React from "react";
import {Btn, Flex, Switch} from "../ui";
import {Formik,Form} from "formik";

const Certificado = (props) => {


    return (
        <Formik
            initialValues={{
                certificado: true,
                cdn: false,
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched, values, validateField, validateForm, handleChange}) => (
                <Form className={"wc"}>
                    <p><b>Certificado SSL:</b></p>
                    <p>Un certificado de seguridad SSL le bringa mayor seguirdad y confiabilidad a tus clientes.</p>

                <div className="wc pt-2">
                    <p><b>CDN:</b></p>
                    <p>Es una red internacional de servidores que permiten entregar mas rápido y de forma más efectiva los contenidos de tu nuevo sitio web, reduciendo la latencia y aportando mayores niveles de seguridad.</p>
                </div>

                    <Flex jc={"flex-start"} className={"wc"}>
                        <Flex flex={"0 0 40px"}>
                            <Switch
                                checked={values.cdn}
                                value={values.cdn}
                                onchange={handleChange}
                                name={"cdn"}
                            />
                        </Flex>
                        <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                            <p className={"mb-0 pl-3"}>Incluir por solo <b>$180.000 COP</b> anuales</p>
                        </Flex>
                    </Flex>

                    <div className="wc f01 jcfe py-4">
                        <div className="col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 px-0">
                            <Btn type={"submit"} disabled={props.disabled}>siguiente</Btn>
                        </div>
                    </div>
                </Form>)}
        </Formik>
    )
}

export default Certificado;
