import React, {Component} from "react";
import Select, {components} from 'react-select'
import {country} from './country'
import {Colors} from "../ui";




export default class ReactSelectFlag extends Component {
    render() {

        const singleOption = (props) => (
            <components.Option {...props}>
                <span className={"d-inline-block mr-2"}>
                    {props.data.flagPath ? props.data.flagPath : null}
                </span>
                {props.label}
            </components.Option>
        );


        const singleValue = (props) => (
            <components.SingleValue {...props}>
                <span className={"d-inline-block"}>
                {props.data.flagPath ? props.data.flagPath : null}
                </span>
                <small><b>{props.data.label}</b></small>
            </components.SingleValue>
        );

        const defaulValue = (value) => (
            country.map((objCountry, key) => {
                if (value == objCountry.value) {
                    return objCountry
                }
            })
        );

        const Mycaret = (props)=>(
            <components.DropdownIndicator {...props}>
                <img src="/img/sort_both.png"  width={"24px"} alt=""/>
            </components.DropdownIndicator>
        )

        return (
            <Select
                placeholder={"Buscar"}
                classNamePrefix={"flag-select"}
                options={country}
                name={this.props.name}
                defaultValue={defaulValue(this.props.value)}
                onChange={(props) => this.props.onChange(props.value)}
                components={{
                    Option: singleOption,
                    SingleValue: singleValue,
                    DropdownIndicator:Mycaret,
                    IndicatorSeparator:null

                }}
                styles={{
                    control: (base,state) => Object.assign({},base,
                        {
                            marginBottom:0,
                            minHeight:"40px",
                            boxShadow:"none",
                            borderColor: state.isFocused ? Colors.verde : "#e4e4e4" ,
                            borderWidth:"2px"
                        }),
                    DropdownIndicator: (base) => Object.assign({},base,
                        {
                            padding:"0 .5em",
                            height:"35px"
                        }),
                    valueContainer:(base) => Object.assign({},base,
                        {
                            padding:"0 0 0 5px",
                            height:"30px",
                        }),
                    singleValue:(base) => Object.assign({},base,
                        {
                            padding:"0",
                            height:"40px",
                            maxWidth: "100%",
                            top: "0",
                            transform: "translateY(0)",
                        }),

                    indicatorsContainer: (base) => Object.assign({},base,
                        {
                            height:"32px",
                            padding:"0",
                            width:"30px"
                        }),
                    input: (base) => Object.assign({},base,
                        {
                            height:"40px",
                            padding:"0",
                        }),
                    IndicatorSeparator: (base) => Object.assign({},base,
                        {
                            height:"32px",
                            padding:"0",
                            width:"30px"
                        }),
                }}

                isDisabled={this.props.isDisabled}
            />
        )
    }
}
