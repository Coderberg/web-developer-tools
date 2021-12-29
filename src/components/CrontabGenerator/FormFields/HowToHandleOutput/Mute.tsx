import {RadioButton} from "primereact/radiobutton";
import React from "react";

const Mute = ({value, onChange}: { value: string, onChange: any }) => {

    const label = 'Mute the execution (Don\'t save or send output)';

    return <div className="p-field-radiobutton p-pb-2">

        <RadioButton inputId="mute" name="mute"
                     value="mute"
                     onChange={onChange}
                     checked={value === "mute"}
        />
        <label htmlFor="mute">{label}</label>

    </div>
}

export default Mute;
