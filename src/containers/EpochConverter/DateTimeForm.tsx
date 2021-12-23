import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {humanReadableDateToEpoch} from "../../utils/calculators/epochConverter";
import DateTimeFormComponent
    from "../../components/EpochConverter/Forms/DateTimeForm"
import {
    setDateTimeInputValue,
    setTimezoneInputValue,
    setDateToEpochResult
} from "../../actions/EpochConverter/dateTimeForm"
import {
    DateTimeFormContainerPropsInterface,
    DateTimeFormState
} from "../../types/epochConverter";

const DateTimeForm = ({
                          dateTimeInputValue,
                          timezoneInputValue,
                          dateToEpochResult,
                          setDateTimeInput,
                          setTimezoneInput,
                          setDateToEpochResultValue
                      }: DateTimeFormContainerPropsInterface) => {

    useEffect(() => {
        if (dateTimeInputValue === undefined) {
            setDateTimeInput(new Date);
        }
    });

    const onDateTimeChange = ({target: {value}}: { target: { value: string } }) => {
        setDateTimeInput(value);

        if (value === null || value === undefined) {
            setDateToEpochResultValue('');
        } else if (dateToEpochResult !== '') {
            setDateToEpochResultValue(humanReadableDateToEpoch(value.toString(), timezoneInputValue));
        }
    }

    const onTimezoneChange = ({target: {value}}: { target: { value: 'gmt' | 'local' } }) => {
        setTimezoneInput(value);
        if (dateToEpochResult && dateTimeInputValue) {
            setDateToEpochResultValue(humanReadableDateToEpoch(dateTimeInputValue.toString(), value));
        }
    }

    const onDateToEpochButtonClick = () => {
        if (dateTimeInputValue) {
            setDateToEpochResultValue(humanReadableDateToEpoch(dateTimeInputValue.toString(), timezoneInputValue));
        } else {
            setDateToEpochResultValue('');
        }
    }

    return <DateTimeFormComponent dateTimeInputValue={dateTimeInputValue}
                                  timezoneInputValue={timezoneInputValue}
                                  onDateTimeChange={onDateTimeChange}
                                  onTimezoneChange={onTimezoneChange}
                                  onDateToEpochButtonClick={onDateToEpochButtonClick}
                                  dateToEpochResult={dateToEpochResult}
    />

}

const mapStateToProps = (state: { epochConverter: { dateTimeForm: DateTimeFormState } }) => ({
    dateTimeInputValue: state.epochConverter.dateTimeForm.dateTimeInputValue,
    timezoneInputValue: state.epochConverter.dateTimeForm.timezoneInputValue,
    dateToEpochResult: state.epochConverter.dateTimeForm.dateToEpochResult,
});

export default compose(
    connect(mapStateToProps, {
        setDateTimeInput: setDateTimeInputValue,
        setTimezoneInput: setTimezoneInputValue,
        setDateToEpochResultValue: setDateToEpochResult,
    }))(DateTimeForm);
