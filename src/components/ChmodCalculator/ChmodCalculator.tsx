import React from "react";
import {InputText} from "primereact/inputtext";
import {Fieldset} from "primereact/fieldset";
import 'primeflex/primeflex.css';
import {ChmodCalculatorPropsInterface} from "../../types/chmodCalculator";
import Checkboxes from "./Checkboxes/Checkboxes";

const ChmodCalculator: React.FC<ChmodCalculatorPropsInterface> =
    ({
         checked, onCheckboxChange, numberFieldValue,
         onNumberChange, textFieldValue, onTextChange
     }) =>

        <Fieldset legend="Chmod Calculator" className="max-w-760 p-mb-6">
            <form className="form chmod">
                <Checkboxes checked={checked} handleOnChange={onCheckboxChange}/>

                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                        <InputText value={numberFieldValue} onChange={onNumberChange} placeholder="666"/>
                    </div>
                    <div className="p-field p-col">
                        <InputText value={textFieldValue} onChange={onTextChange} placeholder="rw-rw-rw-"/>
                    </div>
                </div>
            </form>
        </Fieldset>

export default ChmodCalculator;
