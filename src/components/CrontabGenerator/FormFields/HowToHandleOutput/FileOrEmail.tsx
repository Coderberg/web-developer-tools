import {RadioButton} from "primereact/radiobutton";
import {InputText} from "primereact/inputtext";
import React from "react";
import {FileOrEmailProps} from "../../../../types/crontabGenerator";

const FileOrEmail: React.FC<FileOrEmailProps> =
    ({
         name,
         label,
         radioButtonValue,
         textInputValue,
         radioButtonOnChange,
         textInputOnChange
     }) =>

        <div className="p-grid">
            <div className="p-col-12 p-md-3 p-lg-3">
                <div className="p-field-radiobutton p-pt-2">
                    <RadioButton inputId={name} name={name} value={name}
                                 onChange={radioButtonOnChange}
                                 checked={radioButtonValue === name}/>

                    <label htmlFor={name}>{label}</label>
                </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-5">
                <InputText className="w-100" value={textInputValue}
                           onChange={textInputOnChange}
                           onClick={textInputOnChange}/>
            </div>

        </div>

export default FileOrEmail;
