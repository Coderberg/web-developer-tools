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
    setMinutesRadioButtonValue,
    setMinutesOptionValue,
    setMinuteHasError
} from "../../../actions/CrontabGenerator/Schedule/minutes";

const Minutes = ({
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
        if (value !== 'Minutes') {
            setOptionValue('');
        }
        setHasError(false);
    }

    const onOptionChange = ({target: {value}}: { target: { value: string } }) => {
        setOptionValue(value);
        setRadioButtonValue('Minutes');
        setHasError(false);
    }

    const period: PeriodPropsInterface = {
        period: 'Minutes',
        options: Array.from(Array(60).keys()),
        radioButtons: [
            'Every Minute',
            'Even Minutes',
            'Odd Minutes',
            'Every 5 Minutes',
            'Every 15 Minutes',
            'Every 30 Minutes',
        ],
        selectedRadio, selectedOption, hasError,
        onRadioButtonChange, onOptionChange
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Period {...period} />
}

const mapStateToProps = (state: { crontabGenerator: { minutes: PeriodContainerStateInterface } }) => ({
    selectedRadio: state.crontabGenerator.minutes.selectedRadio,
    selectedOption: state.crontabGenerator.minutes.selectedOption,
    hasError: state.crontabGenerator.minutes.hasError,
});

export default compose(
    connect(mapStateToProps, {
        setRadioButtonValue: setMinutesRadioButtonValue,
        setOptionValue: setMinutesOptionValue,
        setHasError: setMinuteHasError,
    }))(Minutes);
