import React from "react";
import Checkbox from "./Checkbox";
import {CheckboxGroupType} from "../../../types/chmodCalculator";

const CheckboxGroup: React.FC<CheckboxGroupType> = ({ownership, checked, handleOnChange}) =>
    <div className="p-text-left p-text-capitalize">

        <h3>{ownership}</h3>

        {['Read', 'Write', 'Execute'].map(permission =>
            <Checkbox handleOnChange={handleOnChange}
                      permission={permission}
                      ownership={ownership}
                      checked={checked}
                      key={permission}/>)}

    </div>

export default CheckboxGroup;
