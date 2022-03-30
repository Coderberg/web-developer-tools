import React from "react";
import {Slider} from "primereact/slider";

const PasswordLength = ({passwordLength, onPasswordLengthChange}: any) =>

    <div className="p-mb-6">
        <h4>Password Length: {passwordLength}</h4>
        <Slider value={passwordLength}
                onChange={onPasswordLengthChange}
                min={1} max={45}/>
    </div>

export default PasswordLength;
