import React from "react";
import {Fieldset} from "primereact/fieldset";
import CurrentEpochTime from "../../containers/EpochConverter/CurrentEpochTime";
import UnixTimeForm from "../../containers/EpochConverter/UnixTimeForm";
import DateTimeForm from "../../containers/EpochConverter/DateTimeForm";

const EpochConverter: React.FC = () =>

    <Fieldset legend="Unix Timestamp Converter" className="max-w-760 p-mb-6">
        <CurrentEpochTime/>
        <UnixTimeForm/>
        <DateTimeForm/>
    </Fieldset>

export default EpochConverter;
