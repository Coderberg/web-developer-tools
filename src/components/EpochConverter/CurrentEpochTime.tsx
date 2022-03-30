import React from "react";
import {Chip} from "primereact/chip";
import {CurrentEpochTimeInterface} from "../../types/epochConverter";
import CopyToClipboard from "../common/CopyToClipboard";

const CurrentEpochTime: React.FC<CurrentEpochTimeInterface> =
    ({currentUnixTime, copyToClipboard, copyToClipboardButtonState}) =>

        <div className="p-grid p-mb-4">
            <div className="p-col-12 p-md-7">
                The current Unix epoch time is
            </div>
            <div className="p-col-12 p-md-3 p-sm-6">
                <Chip label={currentUnixTime} className="w-100"/>
            </div>
            <div className="p-col-12 p-md-2 p-sm-6">
                <CopyToClipboard copyToClipboard={copyToClipboard}
                                 copyToClipboardButtonState={copyToClipboardButtonState}/>
            </div>
        </div>

export default CurrentEpochTime;
