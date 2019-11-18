import React, {Component, Fragment} from "react";
//commit

import ReactCustomFlagSelect from 'react-custom-flag-select';


class FlagSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dn: true,
            areaCode: this.props.value,
            phone: '',
            hasPhoneError: true,
            validate: false,
        };
    }

    handleChangeFlag() {
        this.setState({
            dn: this.state.dn ? false : true,
        })
    }

    render() {
        const find = (arr, obj) => {
            const res = [];
            arr.filter(o => {
                let match = false;
                Object.keys(obj).map(i => {
                    if (obj[i] == o[i]) {
                        match = true;
                    }
                });
                if (match) {
                    res.push(o);
                }
            });
            return res;
        };

        const {areaCode, phone, validate} = this.state;

        const FLAG_SELECTOR_OPTION_LIST = this.props.paises;
        const currentItem = find(FLAG_SELECTOR_OPTION_LIST, {id: areaCode})[0];

        return (
            <React.Fragment>
                <ReactCustomFlagSelect
                    tabIndex={'1'} //Optional.[String or Number].Default: -1.
                    id={this.props.id} //Optional.[String].Default: "". Input ID.
                    name={this.props.name} //Optional.[String].Default: "". Input name.
                    value={areaCode} //Optional.[String].Default: "".
                    disabled={this.props.disabled} //Optional.[Bool].Default: false.
                    optionList={FLAG_SELECTOR_OPTION_LIST} //Required.[Array of Object(s)].Default: [].
                    // selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
                    // selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
                    classNameWrapper="flag-component" //Optional.[String].Default: "".
                    classNameContainer="" //Optional.[String].Default: "".
                    classNameOptionListContainer="" //Optional.[String].Default: "".
                    classNameOptionListItem="" //Optional.[String].Default: "".
                    classNameDropdownIconOptionListItem={''} //Optional.[String].Default: "".
                    customStyleWrapper={{}} //Optional.[Object].Default: {}.
                    customStyleContainer={{
                        fontSize: '16px',
                        borderRadius:'4px',
                        lineHeight:'30px',
                        border:"1px solid #c5c5c8",
                        position:"relative"
                    }} //Optional.[Object].Default: {}.
                    customStyleSelect={{width: '100%',height: "30px"}} //Optional.[Object].Default: {}.
                    customStyleOptionListItem={{width: '100%',height: "30px"}} //Optional.[Object].Default: {}.
                    customStyleOptionListContainer={{
                        maxHeight: '180px',
                        overflow: 'auto',
                        width: '180px',
                        marginTop: '0',
                        left: '100%',
                        top:"0",
                        transform:"translate(0,-50%)"

                    }} //Optional.[Object].Default: {}.
                    customStyleDropdownIcon={{

                    }} //Optional.[Object].Default: {}.
                    onChange={areaCode => {
                        this.setState({areaCode: areaCode}, () => {
                            this.props.handleInputChangePais(areaCode);
                        });
                    }}
                    // onBlur={() => {}} //Optional.[Func].Default: none.
                    // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                    // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                />
            </React.Fragment>

        )
    }

}

export default FlagSelect;