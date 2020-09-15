import React from 'react';
import {Select} from "antd";
import pays from "./Pays";


const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

function SelectCountry(props) {
    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a country"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        >
            {
                pays.map((pays, i)=>
                    <React.Fragment key={i}>
                        <optgroup  label={pays.regionName}>
                            { pays.region.map((p, index)=><option value={p} key={index}>{p}</option>) }
                        </optgroup>
                    </React.Fragment>)
            }
        </Select>
    );
}

export default SelectCountry;