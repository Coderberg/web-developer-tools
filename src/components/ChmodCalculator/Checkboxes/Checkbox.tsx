import React from "react";
import {Checkbox as PrimeCheckbox} from 'primereact/checkbox';
import {CheckboxPropsType} from "../../../types/chmodCalculator";

const Checkbox = ({ownership, permission, checked, handleOnChange}: CheckboxPropsType) =>
    <div className="p-field-checkbox">
        <PrimeCheckbox
            inputId={`${ownership + permission}Checkbox`}
            id={ownership + permission}
            value={permission}
            onChange={handleOnChange}
            checked={checked[ownership + permission]}/>

        <label htmlFor={`${ownership + permission}Checkbox`} className="p-checkbox-label">
            {permission}
        </label>
    </div>

export default Checkbox;
