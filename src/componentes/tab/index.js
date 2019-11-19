import React from "react";
import styled from "@emotion/styled";
import {Collapse} from 'react-collapse';
import {Colors, Flex} from "../ui";


const Myt = styled.section`
     width:100%;
     background:#f5f5f5;
     border-radius:10px;
     position:relative;
     box-shadow:0 1px 5px rgba(0,0,0,.28);
     margin-bottom:40px;
     
     &:before{
        content:"";
        position:absolute;
        top:100%;
        left:55px;
        background:${props => props.completado ? Colors.verde : "#f5f5f5"};
        width:5px;
        height:45px;
        border:2px solid ${props => props.completado ? Colors.verde : "#e4e4e4"};
     }
     
     &:last-child{
          &:before{
        content:"";
        display:none;
        }
     }
     
     .cont-icon{
        position:absolute;
        left:10px;
        top:0;
        height:100px;
        width:100px;
        border-radius:50%;
        background:#f5f5f5;
        border:4px solid ${props => props.activo ? "transparent" : "#e4e4e4"};
        transform:translateY(-20%);
        box-shadow:0 1px 3px rgba(0,0,0,.4);
        padding:.7em;
        transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);

        
        .icon{
            background: transparent url(/img/iconos.png) no-repeat ${props => (props.activo || props.completado) ? "100%" : "0%"} ${props => props.icon ? props.icon : "0"}   ;
            background-size:200% auto;
            height:100%; 
            width:100%; 
        }
     }
     
     .title{
        padding:10px 10px 10px 130px;
        font-weight:bold;
        font-size:30px;
        color:#999999;
        line-height:70px;      
     }
     .caret{
        max-width:20px;
     }
     
     @media all and (max-width:480px){
     
     margin-bottom:35px;
     
     
         .title{
            padding:10px 10px 10px 70px;
            color:#999999;
            font-size:16px;
            line-height:24px;      
         }
         
        .cont-icon{
            left:10px;
            height:50px;
            width:50px;
            border:2px solid ${props => props.activo ? "transparent" : "#e4e4e4"};
            transform:translateY(-30%);
            padding:.3em;
        }
        
        &:before{
        left:35px;
     }
     
        
     }
     
     .ReactCollapse--collapse {
      transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
}
     
     
     
`


const MyTab = ({title,icon,open,children,handle,completado,current,tabN})=>{
    return(
      <Myt icon={ icon ? `${(12.5 * icon).toString()}%` :"0%"} activo={open} completado={completado}>
          <div className="cont-icon">
              <div className="icon"></div>
          </div>
          <Flex className={"wc"} onClick={()=> handle(open ? 0 : tabN)}>
              <Flex className="title" flex={"1 0 200px"} jc={"flex-start"}>
                  <span>{title}</span>
              </Flex>
              {current !== tabN &&
              <Flex flex={" 0 0 10%"} className={"px-2"}>
                  <img src={open ? "/img/up.png" : "/img/caret.png"} alt="" className={"wc caret"} />
              </Flex>}
          </Flex>

          <Collapse isOpened={ open || current === tabN }>
              <div className="wc px-2 px-md-4 px-lg-3 px-xl-4 mx-auto pt-3" style={{maxWidth:"700px",borderTop:"1px solid #cbcbcb"}}>
                  {children}
              </div>
          </Collapse>
      </Myt>
    )
}



export default MyTab;