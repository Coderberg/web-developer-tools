import React from "react";
import {HowToHandleOutputProps} from "../../../types/crontabGenerator";
import Mute from "./HowToHandleOutput/Mute";
import FileOrEmail from "./HowToHandleOutput/FileOrEmail";

const HowToHandleOutput: React.FC<HowToHandleOutputProps> =
    ({
         selectedRadio,
         pathToFileValue,
         emailValue,
         onRadioButtonChange,
         onPathToFileChange,
         onEmailChange
     }) =>

        <div className="card p-pt-1 p-pl-2 p-pb-4 border-top">
            <h4>How to Handle Execution Output</h4>

            <Mute value={selectedRadio} onChange={onRadioButtonChange}/>

            <FileOrEmail name="file" label="Save output to file:"
                         radioButtonValue={selectedRadio}
                         textInputValue={pathToFileValue}
                         radioButtonOnChange={onRadioButtonChange}
                         textInputOnChange={onPathToFileChange}/>

            <FileOrEmail name="email" label="Send output to Email:"
                         radioButtonValue={selectedRadio}
                         textInputValue={emailValue}
                         radioButtonOnChange={onRadioButtonChange}
                         textInputOnChange={onEmailChange}/>

        </div>

export default HowToHandleOutput;
