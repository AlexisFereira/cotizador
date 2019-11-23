import React from "react";
import styled from "@emotion/styled";
import {Collapse} from 'react-collapse';
import { Field} from 'formik';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import ReactSelectFlag from "./reactSelectFlag";
import PropTypes from 'prop-types';


export const Colors = {
    black: "#222222",
    grey01: "#444444",
    grey02: "#666666",
    grey03: "#eaeaea",
    verde: "#9FC029",
    verde02: "#8BAC15",
};


export const Flex = styled.div`
     display: flex;
     flex-flow: ${props => props.column ? "column wrap" : "row wrap" };
     justify-content: ${props => props.jc ? props.jc : "center"};
     align-items: ${props => props.alg ? props.alg :"center"};
     flex: ${props => props.flex ? props.flex : "0 0 auto"}; 
`;

export const PAGE = styled.section`
    width:100%;
    padding-top:140px;
    min-height: calc(100vh - 288px);
    background:transparent url(https://www.estudiodigital.co/nuevoCotizador/img/fondo.png) no-repeat top center;
    background-size:100% auto;
    
    
    @media all and (max-width:680px){
    
        padding-top:80px;
        background-size: auto 60vh;
    }
`;

const MyCampo = styled.div`
        
     width:100%;
    
    select,input,textarea{
        border-radius:5px;
        border:2px solid ${props => props.error ? "red" : "#e4e4e4"} ;
        height:40px;
        padding: 0 .75em;
        width:100%;
        
        
        &:disabled{
            background:#f3f3f3;
            color:#CACACA;
        }
        
        &:focus{
        outline:none;
        border-color:${Colors.verde};
        }        
    }
    
    textarea{
        height:80px;
        resize:none;
    }
    
    
    .error{
        color:red;
    }
`



const AppendType = styled(Flex)`
    position:relative;

    .tipoD{
        display:block;
        position:absolute;
        top:0;
        right:0;
        height:100%;
        width:50px;
        text-align:center;
        line-height:50px;
        font-size:24px;
        
    }

    input{
        border-right:none!importan;
        border-radius: 5px 0 0 5px!importan;
        min-height:53px;
        padding-right:50px;
    }
    
    button{
        border-radius:0 25px 25px 0!important;
    }
`


export const Campo = (props) => {
    return(
        <MyCampo error={props.error !== ""}>
            {props.tipo === "select" ?
                <Field
                    as={"select"}
                    name={props.name}
                    id=""
                    onChange={props.onchange}
                    value={props.value}
                    disabled={props.disabled}
                    type={props.type}
                    checked={props.checked}

                >
                    {props.options.map((item,index) =>
                        <option key={index} value={item.value} >{item.name}</option>
                    )}
                </Field>
                :

                props.tipo === "textarea" ?
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    :

                    props.tipo === "tel"?

                <Flex className={"wc"}>
                    <Flex flex={"0 0 120px"}>
                        <div className="wc">
                            <ReactSelectFlag
                                value={props.valueInd}
                                onChange={props.onChangeInd}
                                name={props.indName}
                            />
                        </div>
                    </Flex>
                    <Flex flex={"1 0 100px"} className={"pl-3"}>
                        <Field
                            type={"number"}
                            value={props.valueTel}
                            onChange={props.onChangeTel}
                            name={props.telName}
                            placeholder={props.placeholder}
                            disabled={props.disabled}
                            maxLength="10"
                        />
                    </Flex>
                </Flex>

            : props.tipo === "append" ?
               <AppendType className={"wc"} alg={"flex-start"}>
                   <Flex flex={"1 0 150px"} className={"position-relative"}>
                       <input
                           placeholder={props.placeholder}
                           value={props.value}
                           onChange={(e)=> props.onchange(e.target.value)}
                           disabled={props.disabled}
                        />
                       <span className={"tipoD"}>
                            .co
                       </span>
                   </Flex>
                   <Flex flex={"0 0 180px"}>
                       <Btn
                           disabled={props.disabled}
                           loading={props.procesando}
                           onClick={()=> props.onAppendClick(props.value)}>
                           {props.procesando ? "Consultando..." : props.btnAppendText}
                        </Btn>
                   </Flex>
               </AppendType>

                    :
                <Field
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                    name={props.name}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                />
            }

            <Collapse isOpened={props.error !== ""}>
                <small className={"error"}>{props.error}</small>
            </Collapse>
        </MyCampo>
    )
}


const MyCheckbox = styled(Flex)`
    width:100%;

   .cont-check{
    width:20px;
    height:20px;
    border-radius:4px;
    border:2px solid ${Colors.verde};
    position:relative;
     background:${props => props.active ? Colors.verde : "transparent"};
     flex:0 0 20px;
   }
   
    
    .camp{
    opacity:0;
    position:relative;
    z-index:3;
    width:100%;
    height:100%;
    }
    
    img{
    position:absolute;
    top:50%;
    left:0;
    width:90%;
    height:auto;
    transform:translateY(-50%)
    }
    
    .error{color:red;} 
`

export const Checkbox = ({value,onchange,checked,name,error,children})=> {
    return(
        <MyCheckbox active={checked}>
           <div className="cont-check">
               <Field
                   name={name}
                   type={"checkbox"}
                   value={value}
                   onChange={onchange}
                   checked={checked}
                   className={"camp"}
               />
               {checked &&
               <img src="/img/chulo.png" alt="" className={"imgr"}/>
               }
           </div>
           <Flex flex={"1 0 100px"} className={" pl-3 "} jc={"flex-start"}>{children}</Flex>
            <div className="wc">
                <Collapse isOpened={error!==""}>
                    <small className={"error"}>{error}</small>
                </Collapse>
            </div>
        </MyCheckbox>
    )
}

export const BtnT = styled.button`
    height:50px;
    width:100%;
    color:${props => props.brd ? Colors.verde :"white"};
    border: 2px solid ${props => props.brd ? Colors.verde : "transparent"};
    border-radius:25px;
    background:${props => props.loading ? "transparent url(https://www.estudiodigital.co/nuevoCotizador/img/patron.png) repeat-x left center" : (props.brd ? "transparent" : Colors.verde)}; 
    background-size:auto 100%;
    text-align:center;
    box-shadow: 0 3px 0 ${props => props.loading ? "transparent" : Colors.verde02};
    
    &:hover{
        background:${props => props.brd ? "white" : Colors.verde02};
    }
    
    &:focus{outline:none;}
    
    &:disabled{
        box-shadow: 0 3px 0 #cbcbcb;
        background:${props => props.loading ? "transparent url(https://www.estudiodigital.co/nuevoCotizador/img/patron.png) repeat-x left center"  : "#e4e4e4"};
        color:${props => props.loading ? "white": "#888888"};
        cursor:not-allowed;
    } 
`

const bounce = keyframes`
 from{background-position:0 center;}
 to {background-position:100% center;}
`

export const Btn = ({brd,loading,disabled,children,onClick=()=> null},type)=>{
    return(
        <BtnT
            type={type}
            brd={brd}
            loading={loading}
            disabled={disabled}
            css={css`
                animation: ${bounce} 5s linear infinite;`}
            onClick={()=> onClick()}
        >
            {children}
        </BtnT>

    )
}

export const BtnTab = styled.button`
    background:transparent;
    border-bottom:2px solid ${props => props.active ? Colors.verde : "transparent"};
    font-weight:${props => props.active ? "bold" : "regular"};
    width:100%;
    height:40px;
    border-radius:5px 5px 0 0;
    box-shadow:0 1px 5px rgba(0,0,0,.2);
    
    &:hover{
        background:white;
    }
    
    &:focus{outline:none;}
`

export const CardG = styled.div`
    border-radius:8px;
    background:${Colors.grey03};
    font-size:14px;
    
`


const Myswitch = styled.div`
    width:36px;
    height:24px;
    border-radius:18px;
    box-shadow:inset 0 1px 3px rgba(0,0,0,.1);
    position:relative;
    background:${props => props.active ? Colors.verde : "#cbcbcb"};
    
    input{
    opacity:0;
        width:36px;
        height:24px;
        position:absolute;
        top:0px;
        left:0;
        z-index:2;
    }
    
    .circle{
        width:19px;
        height:19px;
        border-radius:50%;
        background:white;
        position:absolute;
        top:2px;
        left:${props => props.active ? "15px" :"2px"};
        z-index:1;
        transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
`

export const Switch = ({onchange,value,checked,name})=>{
    return(
        <Myswitch active={checked}>
            <input
                type="checkbox"
                value={value}
                onChange={onchange}
                checked={checked}
                name={name}
            />
            <div className="circle"></div>
        </Myswitch>
    )
}

Campo.propTypes = {
    tipo:PropTypes.string,
    type :PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onchange:PropTypes.func,
    name :PropTypes.string,
    error:PropTypes.string,
    checked:PropTypes.bool,
    indName:PropTypes.string,
    telName:PropTypes.string,
    valueInd:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    valueTel:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChangeInd:PropTypes.func,
    onChangeTel:PropTypes.func,
    btnAppendText: PropTypes.string,
    onAppendClick: PropTypes.func,
    procesando:PropTypes.bool,
    disabled :PropTypes.bool,
    placeholder:PropTypes.string,
    options:PropTypes.array
};

Campo.defaultProps ={
    tipo:"",
    type :"text",
    value:"hola",
    onchange:"",
    name :"",
    error:"",
    checked:false,
    indName:"",
    telName:"",
    valueInd:"",
    valueTel:"",
    onChangeInd:()=> "",
    onChangeTel:()=> "",
    btnAppendText: "",
    onAppendClick: null,
    procesando:false,
    disabled :false,
    placeholder:"",
    options:[]
}

