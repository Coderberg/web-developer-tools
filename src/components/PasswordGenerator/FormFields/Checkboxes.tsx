import React from "react";
import Checkbox from "./Checkbox";
import {CheckboxesPropsType} from "../../../types/passwordGenerator";

const Checkboxes = ({checked, onCheckboxChange}: CheckboxesPropsType) => {

    const checkboxes = [
        {id: "symbols", label: "Symbols"},
        {id: "numbers", label: "Numbers"},
        {id: "uppercase", label: "Uppercase"},
        {id: "lowercase", label: "Lowercase"},
        {id: "excludeSimilar", label: "Exclude Similar Characters"}
    ];

    return <div className="p-grid p-mb-4">

        {
            checkboxes.map(checkbox => {

                const className = checkbox.id === "excludeSimilar" ? "p-col-12" : "p-col";

                return <div key={checkbox.id} className={className}>
                    <Checkbox label={checkbox.label} id={checkbox.id}
                              checked={checked}
                              onCheckboxChange={onCheckboxChange}/>
                </div>
            })
        }
    </div>
}
export default Checkboxes;
