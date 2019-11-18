import React from "react";
import styled from "@emotion/styled";
import {Colors, Flex} from "../ui";

const Myfooter = styled.footer`
 .negro{
    background:${Colors.black};  
 }
 
 .datos{
   
    p{
    i{color:${Colors.verde}};
    span{color:${Colors.grey02}!important;
        margin-left:10px;
    }
    }
 }
 
 .bottom{
    background:${Colors.verde};
 }
`

const Footer = ()=> {
    return(

        <Myfooter >
            <div className="wc negro py-4">
                <Flex className="container px-xl-0" alg={"center"}>
                    <div className="col-12 col-md-6 px-lg-0 ">
                        <p style={{maxWidth:"469px"}} className={"cb pb-md-3"}>
                            Grupo Estudio Digital SAS con NIT 901.124.864 es una empresa legalmente constituida, con sede principal en la Cra 81a #37d-25 int 501 de la ciudad de Medellín Colombia.
                        </p>
                        <div className="datos pb-4 pb-md-0">
                            <p className={"mb-2"}><i className={"fa fa-phone"}></i> <span>  +574-5899320</span></p>
                            <p className={"mb-2"}><i className={"fa fa-mobile"}></i> <span> +57 300 2976970</span></p>
                            <p className={"mb-2"}><i className={"fa fa-envelope"}></i> <span>  marketing@sigmasoft.co </span></p>
                        </div>
                    </div>
                    <Flex className="col-12 col-md-6 px-0" jc={"flex-end"}>
                        <div className={"col-6"} style={{maxWidth:"200px"}}>
                            <img src="/img/camaraColombia.png" alt="" className={"imgr"}/>
                        </div>
                        <div className={"col-6"} style={{maxWidth:"200px"}}>
                            <img src="/img/partner.png" alt="" className={"imgr"}/>
                        </div>
                    </Flex>
                </Flex>
            </div>
            <div className="bottom ">
                <div className="container py-2 px-xl-0">
                    <small>© Copyright 2018 Estudio Digital</small>
                </div>
            </div>
        </Myfooter>
    )
}

export default Footer;