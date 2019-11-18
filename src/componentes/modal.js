import React, {Fragment, useState, useEffect} from "react";
import styled from "@emotion/styled";
import {Flex} from "./ui";
import ReactDOM from "react-dom";
import {Transition} from 'react-spring/renderprops'
import {Spring,config} from 'react-spring/renderprops'


// Estos dos contenedores son hermanos en el DOM.
const modalRoot = document.getElementById('modal');

const MyModal = styled(Flex)`
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    background:rgba(0,0,0,.5);
   
   .area{
        position:relative;
        transform-style:preserve-3d;
        width:100%;
        perspective:1500px;
   }
    
    .ventana{
       max-width:${props => props.width ? props.width : "550px"};
       max-height:98%;
       overflow:hidden;
       background:white;
       position:relative;
       margin:auto;
       padding:8px;
       border-radius:10px;
       width:95%;
       box-shadow:0 0 0 .23em rgba(0,0,0,.2);
       
       .close{
       position:absolute;
        width:40px;
        height:40px;
        text-align:center;
        right:0;
        top:0;
        font-size:15px;
        line-height:40px;
       }
    }
`

const Vantana = ({show, children, close = () => null,hideClose,callBack=null}) => {

    const [inerShow, setS] = useState(false)

    useEffect(() => {
        if (show) {
            setS(true)
        }
    }, [show])

    return (
        <Fragment>
            <Transition
                items={inerShow}
                from={{opacity: 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
            >
                {inerShow => inerShow && (props =>
                    <MyModal style={props} column>
                        <div className="area">
                            <Spring
                                from={{
                                    opacity: show ? 0 : 1,
                                    transform: show ? "scale(0.8) rotateX(-90deg)" : "scale(1) rotateX(0deg)"
                                }}
                                to={{
                                    opacity: show ? 1 : 0,
                                    transform: show ? "scale(1) rotateX(0deg) " : "scale(0.8) rotateX(-90deg)"
                                }}
                                onStart={() => !show && setS(false)}
                                config={config.stiff}
                                onRest={()=> (!show && callBack !== null) && callBack() }
                            >
                                {props =>
                                    <Flex style={props} className="ventana">
                                        {!hideClose &&
                                        <div className="close" onClick={() => close()}>
                                            <i className={"fa fa-times"}></i>
                                        </div>}
                                        <Flex className={"py-3"}></Flex>
                                        <Flex className={"wc"}>
                                            {children}
                                        </Flex>
                                        <Flex className={"py-3"}></Flex>
                                    </Flex>
                                }
                            </Spring>
                        </div>
                    </MyModal>)}
            </Transition>
        </Fragment>
    )
}


class Modal extends React.Component {

    render() {
        return ReactDOM.createPortal(
            <Vantana {...this.props}>
                {this.props.children}
            </Vantana>,
            modalRoot
        );
    }
}

export default Modal;