import React from "react";
import RadioButton from "./RadioButton";
import {RadioButtonListProps} from "../../../../types/crontabGenerator";

const RadioButtonList = ({
                             radioButtons,
                             selectedRadio,
                             onRadioButtonChange
                         }: RadioButtonListProps) => {

    const result = radioButtons.map((button: string) =>

        <RadioButton button={button}
                     key={button.replace(/\s/g, '')}
                     id={button.replace(/\s/g, '')}
                     checked={selectedRadio === button}
                     onRadioButtonChange={onRadioButtonChange}
        />
    );

    return <>{result}</>
}
export default RadioButtonList;
