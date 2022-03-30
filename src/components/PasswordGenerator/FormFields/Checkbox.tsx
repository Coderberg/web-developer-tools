import React from "react";
import {Checkbox as PrimeCheckbox} from "primereact/checkbox";
import {CheckboxPropsInterface} from "../../../types/passwordGenerator";

const Checkbox = ({
                      label,
                      id,
                      checked,
                      onCheckboxChange
                  }: CheckboxPropsInterface) =>

    <div className="p-field-checkbox">
        <PrimeCheckbox inputId={id} name={id} value={id}
                       onChange={onCheckboxChange} checked={checked[id]}/>
        <label htmlFor={id}>{label}</label>
    </div>

export default Checkbox;
