import {Button} from "primereact/button";
import React, {Fragment} from "react";
import {GenerateCrontabLineProps} from "../../types/crontabGenerator";

const GenerateCrontabLine:
    React.FC<GenerateCrontabLineProps> = ({result, onClick}) =>

    <>
        {result &&
        <div className="card p-pt-1 p-pl-2 p-pb-3">
            <div className="p-inline-message p-inline-message-success w-100">
                <div className="p-message-wrapper">
                    <code>
                        {result.split('\n').map((item: any, key: any) =>
                            <Fragment key={`${key.toString()}`}>{item}<br/></Fragment>
                        )}
                    </code>
                </div>
            </div>
        </div>
        }

        <div className="card p-pt-1 p-pl-2 p-pb-6">
            <Button label="Generate Crontab Line" onClick={onClick} type="button"/>
        </div>
    </>


export default GenerateCrontabLine;
