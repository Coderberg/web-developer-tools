import {Button} from "primereact/button";
import React from "react";
import {Calendar} from 'primereact/calendar';
import {Dropdown} from "primereact/dropdown";
import {DateTimeInputPropsInterface} from "../../../types/epochConverter";

const timeOptions = [
    {label: 'Local Time', value: 'local'},
    {label: 'GMT', value: 'gmt'},
];

const DateTimeForm: React.FC<DateTimeInputPropsInterface> =
    ({
         dateTimeInputValue,
         timezoneInputValue,
         onDateTimeChange,
         onTimezoneChange,
         onDateToEpochButtonClick,
         dateToEpochResult
     }) =>
        <>
            <form className="p-grid p-fluid p-mb-4">
                <div className="p-col-12 p-md-4 p-sm-6">
                    <Calendar value={dateTimeInputValue}
                              onChange={onDateTimeChange}
                              showTime showSeconds/>
                </div>
                <div className="p-col-12 p-md-3 p-sm-6">
                    <Dropdown options={timeOptions} value={timezoneInputValue}
                              onChange={onTimezoneChange}/>
                </div>
                <div className="p-col-12 p-md-5">
                    <Button label="Human date to Timestamp"
                            className="w-100" type="button"
                            onClick={onDateToEpochButtonClick}/>
                </div>
            </form>

            {dateToEpochResult &&
            <div className="p-mb-6" data-testid="dateToEpochResult">
                <strong>Unix Timestamp:</strong> {dateToEpochResult}
            </div>
            }
        </>

export default DateTimeForm;
