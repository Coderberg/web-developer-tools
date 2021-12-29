import React from "react";
import {RadioButton as PrimeRadioButton} from "primereact/radiobutton";

const RadioButton = ({button, id, checked, onRadioButtonChange}:
                         { button: string, id: string, checked: boolean, onRadioButtonChange: any }) =>

    <div className="p-field-radiobutton">
        <PrimeRadioButton inputId={id} name={id} value={button}
                          checked={checked} onChange={onRadioButtonChange}/>
        <label htmlFor={id}>{button}</label>
    </div>

export default RadioButton;
