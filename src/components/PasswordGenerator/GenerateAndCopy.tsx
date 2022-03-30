import {Chip} from "primereact/chip";
import {Button} from "primereact/button";
import React from "react";
import CopyToClipboard from "../common/CopyToClipboard";
import {GenerateAndCopyComponentProps} from "../../types/passwordGenerator";

const GenerateAndCopy = ({
                             result,
                             copyToClipboardButtonState,
                             onGenerateButtonClick,
                             onCopyButtonClick
                         }: GenerateAndCopyComponentProps) =>

    <div className="p-grid p-mb-4">
        <div className="p-col-12 p-md-8 p-sm-12">
            <Chip label={result} className="w-100"/>
        </div>

        <div className="p-col-12 p-md-2 p-sm-6">
            <CopyToClipboard copyToClipboard={onCopyButtonClick}
                             copyToClipboardButtonState={copyToClipboardButtonState}/>
        </div>

        <div className="p-col-12 p-md-2 p-sm-6">
            <Button label="Generate"
                    icon="pi pi-refresh"
                    type="button"
                    onClick={onGenerateButtonClick}
                    className="p-button-sm w-100"/>
        </div>

    </div>

export default GenerateAndCopy;
