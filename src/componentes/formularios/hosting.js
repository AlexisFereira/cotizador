import React from "react";
import {Btn, Flex, Switch} from "../ui";
import {Formik,Form} from "formik";

const Hosting = (props) => {


    return (
        <Formik
            initialValues={{
                hosting: true,
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched, values, validateField, validateForm, handleChange}) => (
                <Form className={"wc"}>
                    <p><b>Ahora hablemos del hosting para tu nuevo sitio web...</b></p>
                    <p>Ofrecemos un excelente servicio de alojamiento en servidores VPS, el cuál tiene 8 GB de RAM, ancho de banda ilimitado, 3 IP dedicadas y cPanel Disponible.</p>

                    <Flex jc={"flex-start"} className={"wc"}>
                        <Flex flex={"0 0 40px"}>
                            <Switch
                                checked={values.hosting}
                                value={values.hosting}
                                onchange={handleChange}
                                name={"hosting"}
                            />
                        </Flex>
                        <Flex jc={"flex-start"} flex={"1 0 100px"} className={""}>
                            <p className={"mb-0 pl-3"}>Si, quiero adquirir un plan de hosting VPS para mi web con Estudio Digital</p>
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

export default Hosting;
