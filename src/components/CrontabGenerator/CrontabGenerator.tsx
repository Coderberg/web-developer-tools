import React from "react";
import {Fieldset} from "primereact/fieldset";
import 'primeflex/primeflex.css';
import Minutes from "../../containers/CrontabGenerator/Schedule/Minutes";
import Hours from "../../containers/CrontabGenerator/Schedule/Hours";
import Days from "../../containers/CrontabGenerator/Schedule/Days";
import Months from "../../containers/CrontabGenerator/Schedule/Months";
import Weekday from "../../containers/CrontabGenerator/Schedule/Weekday";
import CommandToExecute from "../../containers/CrontabGenerator/CommandToExecute";
import HowToHandleOutput from "../../containers/CrontabGenerator/HowToHandleOutput";
import GenerateCrontabLine from "../../containers/CrontabGenerator/GenerateCrontabLine";

const CrontabGenerator: React.FC = () =>

    <Fieldset legend="Crontab Generator" className="max-w-980 p-mb-6">
        <form>
            <div className="p-fluid p-formgrid p-grid">
                <Minutes/>
                <Hours/>
                <Days/>
                <Months/>
                <Weekday/>
            </div>

            <CommandToExecute/>
            <HowToHandleOutput/>
            <GenerateCrontabLine/>

        </form>
    </Fieldset>

export default CrontabGenerator;
