import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Period
    from "../../../components/CrontabGenerator/FormFields/Schedule/Period";
import {
    PeriodContainerPropsInterface,
    PeriodContainerStateInterface,
    PeriodPropsInterface
} from "../../../types/crontabGenerator";
import {
    setHoursRadioButtonValue,
    setHoursOptionValue,
    setHourHasError
} from "../../../actions/CrontabGenerator/Schedule/hours";

const Hours = ({
                   selectedRadio,
                   selectedOption,
                   hasError,
                   setRadioButtonValue,
                   setOptionValue,
                   setHasError
               }
                   : PeriodContainerPropsInterface) => {

    const onRadioButtonChange = ({target: {value}}: { target: { value: string } }) => {
        setRadioButtonValue(value);
        if (value !== 'Hours') {
            setOptionValue('');
        }
        setHasError(false);
    }

    const onOptionChange = ({target: {value}}: { target: { value: string } }) => {
        setOptionValue(value);
        setRadioButtonValue('Hours');
        setHasError(false);
    }

    const period: PeriodPropsInterface = {
        period: 'Hours',
        options: ['Midnight', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
        radioButtons: [
            'Every Hour',
            'Even Hours',
            'Odd Hours',
            'Every 3 Hours',
            'Every 6 Hours',
            'Every 12 Hours',
        ],
        selectedRadio, selectedOption, hasError,
        onRadioButtonChange, onOptionChange
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Period {...period} />
}

const mapStateToProps = (state: { crontabGenerator: { hours: PeriodContainerStateInterface }; }) => ({
    selectedRadio: state.crontabGenerator.hours.selectedRadio,
    selectedOption: state.crontabGenerator.hours.selectedOption,
    hasError: state.crontabGenerator.hours.hasError,
});

export default compose(
    connect(mapStateToProps, {
        setRadioButtonValue: setHoursRadioButtonValue,
        setOptionValue: setHoursOptionValue,
        setHasError: setHourHasError,
    }))(Hours);
