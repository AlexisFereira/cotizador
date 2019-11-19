import React,{useContext,useState} from "react";
import {Flex, Campo,Checkbox,Btn} from "../ui";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {EstadoContext} from "../estadoGlobal";
import ReactSelectFlag from "../reactSelectFlag";
import axios from "axios";

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(4, 'Esto no es un nombre.')
        .required('Debe ingresar Nombre y Apellido.'),
    empresa: Yup.string()
        .min(2, 'Esto no es una razón social.')
        .required('Debe ingresar una razón social.'),
    correo: Yup.string()
        .email('Correo no válido.')
        .required('Debe ingresar un correo.'),
    telefono: Yup.string()
        .min(7, 'Número de teléfono incompleto.')
        .max(10, 'Número de teléfono inválido.')
        .required('Debe ingresar un número de teléfono.'),
    politicas: Yup
        .boolean()
        .oneOf([true], 'Debe aceptar nuestras políticas.'),
});

const Registro = (props) => {

    const [estado,setEstado] = useContext(EstadoContext);

    const [procesando,SetP]=useState(false)





    return (

        <Formik
            initialValues={{
                nombre: '',
                empresa: '',
                telefono: '',
                correo: '',
                politicas:true,
                indicativo:57,

            }}
            validationSchema={SignupSchema}
            onSubmit={values => {

                // same shape as initial values
                const {nombre,empresa,telefono,correo,indicativo} = values;


                // actualizaStep({nombre,empresa,telfono,correo,name:"registro"})
                let datacopy = [...estado]



                SetP(true)

                axios.post("https://estudiodigital.co/cotizador/cotizador.php", values)
                    .then(response => {
                        if(response.status){
                            SetP(false)
                            props.handleTab(2)

                            setEstado(() => datacopy.map(item => {
                                if(item.name === 'registro'){
                                    return( {nombre,empresa,telefono,correo,name:"registro",completado:true})
                                }else return item;
                            }))
                        }
                        else{
                            console.log(response,"::::: response")
                            SetP(false)
                        }
                    })
                    .catch(err =>
                        {
                            console.log(err,":::::: error")
                            SetP(false)
                        }
                    )

            }}
        >

            {({errors, touched,handleChange,values}) => (
                <div className={"wc"}>
                    <p className={"pl-3 pl-md-0"}>Cuéntanos quién eres:</p>
                    <Form action="">
                        <Flex className={"wc"} alg={"flex-start"}>
                            <div className="col-12 col-md-6 mb-3 pl-md-0">
                                <Campo placeholder={"Nombre y Apellido"}
                                       name={"nombre"}
                                       error={errors.nombre && touched.nombre ? errors.nombre : ""}
                                       onchange={handleChange}
                                       value={values.nombre}
                                />
                            </div>
                            <div className="col-12 col-md-6 mb-3 pr-md-0">
                                <Campo placeholder={"Empresa"} name={"empresa"}
                                       error={errors.empresa && touched.empresa ? errors.empresa : ""}
                                       onchange={handleChange}
                                       value={values.empresa}

                                />
                            </div>
                            <div className="col-12 col-md-6 mb-3 pl-md-0">
                                <Campo
                                    placeholder={"Teléfono"}
                                    tipo={"tel"} name={"telefono"}
                                       error={errors.telefono && touched.telefono ? errors.telefono : ""}
                                       onChangeTel={handleChange}
                                       onChangeInd={(x)=> handleChange(x.toString())}
                                       indName={"indicativo"}
                                       telName={"telefono"}
                                       telNumber={"telefono"}
                                       valueInd={values.indicativo}
                                       valueTel={values.telefono}
                                />
                            </div>
                            <div className="col-12 col-md-6 mb-3 pr-md-0">
                                <Campo placeholder={"Correo"} type={"email"} name={"correo"}
                                       error={errors.correo && touched.correo ? errors.correo : ""}
                                       onchange={handleChange}
                                       value={values.correo}
                                />
                            </div>
                        </Flex>
                        <div className="wc pl-3 pl-md-0 mb-3 mb-lg-0">
                            <Checkbox
                                name={"politicas"}
                                checked={values.politicas}
                                value={values.politicas}
                                onchange={handleChange}
                                error={errors.politicas && touched.politicas ? errors.politicas : ""}
                            >
                                <p className={"mb-0"}>Acepto política de tratamientos de datos.</p>
                            </Checkbox>


                        </div>

                        <div className="wc f01 jcfe pb-4">
                            <div className="col-12 col-sm-8 col-md-5 col-lg-4 px-0">
                                <Btn
                                    type={"submit"}
                                    loading={procesando}
                                    disabled={procesando}
                                >{procesando ? "Procesando..." : "Siguiente"}</Btn>
                            </div>
                        </div>
                    </Form>
                </div>)}

        </Formik>
    )
}

export default Registro;