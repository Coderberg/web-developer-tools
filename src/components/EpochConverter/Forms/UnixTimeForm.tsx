import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React from "react";
import {UnixTimeInputPropsInterface} from "../../../types/epochConverter";

const UnixTimeForm: React.FC<UnixTimeInputPropsInterface> =
    ({
         unixTimeInputValue, onUnixTimeChange,
         onEpochToDateButtonClick, epochToDateResult
     }) =>

        <div className="p-mb-6">
            <form className="p-grid p-fluid p-mb-4">
                <div className="p-col-12 p-md-7">
                    <InputText value={unixTimeInputValue} onChange={onUnixTimeChange} keyfilter="pint" maxLength={14}/>
                </div>
                <div className="p-col-12 p-md-5">
                    <Button label="Timestamp to Human date"
                            className="w-100" type="button"
                            onClick={onEpochToDateButtonClick}/>
                </div>
            </form>
            {epochToDateResult &&
                <div data-testid="epochToDateResult">{epochToDateResult}</div>
            }
        </div>

export default UnixTimeForm;
