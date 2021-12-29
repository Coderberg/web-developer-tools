import React from "react";
import {RadioButton as PrimeRadioButton} from "primereact/radiobutton";
import {MultiSelect} from "primereact/multiselect";
import {RadioButtonWithMultiSelectPropsInterface} from "../../../../types/crontabGenerator";

const RadioButtonWithMultiSelect =
    ({
         period,
         options,
         selectedOption,
         selectedRadio,
         onRadioButtonChange,
         onOptionChange
     }:
         RadioButtonWithMultiSelectPropsInterface) => {

        const arrayOfObjects = options.map(option => ({name: option, code: option}));
        const multiselect = <MultiSelect value={selectedOption}
                                         options={arrayOfObjects}
                                         optionLabel="name"
                                         placeholder="Custom period"
                                         onChange={onOptionChange}
                                         maxSelectedLabels={3}/>

        return <div className="p-field-radiobutton">
            <PrimeRadioButton inputId={period} name={period} value={period}
                              checked={(selectedRadio === period || selectedOption.length > 0)}
                              onChange={onRadioButtonChange}
            />
            <label htmlFor={period} aria-label={period}>
                {multiselect}
            </label>
        </div>
    }

export default RadioButtonWithMultiSelect;
