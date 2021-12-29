import React from "react";
import {PeriodPropsInterface} from "../../../../types/crontabGenerator";
import RadioButtonList from "./RadioButtonList";
import RadioButtonWithMultiSelect from "./RadioButtonWithMultiSelect";

const Period: React.FC<PeriodPropsInterface> =
    ({
         period, radioButtons, options,
         selectedRadio, selectedOption, hasError,
         onRadioButtonChange, onOptionChange
     }) =>

        <div className="p-field p-col-12 p-md-6 p-lg-4">
            <div
                className={`card p-pt-1 p-pl-2 p-pb-2${hasError ? ' card-invalid' : ''}`}>
                <h4>{period}</h4>
                <div className="p-field">

                    {/* Standard options */}
                    <RadioButtonList radioButtons={radioButtons}
                                     selectedRadio={selectedRadio}
                                     onRadioButtonChange={onRadioButtonChange}/>

                    {/* Custom options */}
                    <RadioButtonWithMultiSelect period={period}
                                                options={options}
                                                selectedOption={selectedOption}
                                                selectedRadio={selectedRadio}
                                                onRadioButtonChange={onRadioButtonChange}
                                                onOptionChange={onOptionChange}/>
                </div>
            </div>
        </div>

export default Period;
