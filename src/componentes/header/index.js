import React from 'react';
import styled from "@emotion/styled";
import {Colors,Flex} from "../ui";


const MyHeader = styled.header`
    width:100%;
    position:absolute;
    top:0;
    left:0;
    color:${Colors.verde};

    .top{
        background: ${Colors.black};
        color:${Colors.verde}
        height:40px;
        width:100%;
    }
    
    .cont-logo{
        background:rgba(0,0,0,.2);        
    }
    
    .redes{
       color:${Colors.verde};
       line-height:25px;
       
        a{
           display:block;
           height:25px;
           width:25px;
           border-radius:15px;
           cursor:pointer; 
           color:${Colors.verde};
           line-height:25px;
           text-align:center;
           margin-left:5px;
           
           &:hover{
            background:rgba(255,255,255,.1);
           }
        }
    }
    
    @media all and (max-width: 480px){
       .logo{
        max-width:250px;
        max-height:40px;
        height:auto;
        width:auto;
        margin:auto;
       } 
       
       .redes{
        flex:1 0 100%;
       }
       
       .cont-logo{
       text-align:center;
       }
       
       .telefono{
        font-size:12px;
       }
    }
`

const IconoTelefono = ({icono,telefono}) =>{
        return(
            <Flex jc={"flex-start"} className={"pr-2 "} flex={"0 0 50%"}>
                <Flex className={"text-center pr-2 "} column >
                    <i className={`fa fa-${icono}`}></i>
                </Flex>
                <Flex flex={"0 0 auto"}  jc={"flex-start"} className={"telefono "}><a style={{color:Colors.verde}} href={`tel:${telefono}`}>{telefono}</a></Flex>
            </Flex>
        )
}

const Header = ()=>{
    return(
        <MyHeader>
            <div className="top">
                <div className="container f01 jcsb px-xl-0 py-2 ">
                    <Flex className={"col-md-6 px-0 justify-content-between"} style={{maxWidth:"400px"}}>
                        <IconoTelefono icono={"mobile"} telefono={"+57300 2976970"}/>
                        <IconoTelefono icono={"phone"} telefono={"+5745899320"}/>
                    </Flex>
                    <Flex className={"redes d-none d-md-flex"}>
                        <small className={" pr-3"}>Siguenos en nuestras redes</small>
                        <a href=""> <i className={"fa fa-twitter"}></i></a>
                        <a href=""> <i className={"fa fa-instagram"}></i></a>
                        <a href=""> <i className={"fa fa-facebook"}></i></a>
                    </Flex>
                </div>
            </div>
            <div className="cont-logo">
                <div className="container px-lg-0 py-3">
                    <img src="/img/logo-o.png" alt="" className={"logo"}/>
                </div>
            </div>
        </MyHeader>
    )
}

export default Header;