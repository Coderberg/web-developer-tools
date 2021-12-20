import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import 'primeflex/primeflex.css';
import {CheckboxesPropsType} from "../../../types/chmodCalculator";

const Checkboxes: React.FC<CheckboxesPropsType> = ({checked, handleOnChange}) => {

    const checkboxGroups = ['owner', 'group', 'others'].map(ownership =>
        <div className="p-field p-col" key={ownership}>
            <CheckboxGroup handleOnChange={handleOnChange} ownership={ownership} checked={checked}/>
        </div>
    );

    return <div className="row p-mb-4">
        <div className="p-fluid p-formgrid p-grid">
            {checkboxGroups}
        </div>
    </div>
}

export default Checkboxes;
