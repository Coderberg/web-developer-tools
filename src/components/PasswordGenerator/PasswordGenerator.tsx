import {Fieldset} from "primereact/fieldset";
import React from "react";
import PasswordLength from "./FormFields/PasswordLength";
import Checkboxes from "./FormFields/Checkboxes";
import {PasswordGeneratorPropsInterface} from "../../types/passwordGenerator";
import GenerateAndCopy from "./GenerateAndCopy";

const PasswordGenerator = ({
                               result,
                               checked,
                               passwordLength,
                               copyToClipboardButtonState,
                               onCopyButtonClick,
                               onGenerateButtonClick,
                               onCheckboxChange,
                               onPasswordLengthChange
                           }: PasswordGeneratorPropsInterface) =>

    <Fieldset legend="Secure Password Generator" className="max-w-760 p-mb-6">
        <form className="form">

            <GenerateAndCopy result={result}
                             copyToClipboardButtonState={copyToClipboardButtonState}
                             onGenerateButtonClick={onGenerateButtonClick}
                             onCopyButtonClick={onCopyButtonClick}
            />

            <PasswordLength passwordLength={passwordLength}
                            onPasswordLengthChange={onPasswordLengthChange}/>

            <Checkboxes checked={checked} onCheckboxChange={onCheckboxChange}/>
        </form>
    </Fieldset>

export default PasswordGenerator;
