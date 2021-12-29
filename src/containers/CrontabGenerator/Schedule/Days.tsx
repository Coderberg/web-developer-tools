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
    setDaysRadioButtonValue,
    setDaysOptionValue,
    setDayHasError
} from "../../../actions/CrontabGenerator/Schedule/days";

const Days = ({
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
        if (value !== 'Days') {
            setOptionValue('');
        }
        setHasError(false);
    }

    const onOptionChange = ({target: {value}}: { target: { value: string } }) => {
        setOptionValue(value);
        setRadioButtonValue('Days');
        setHasError(false);
    }

    const period: PeriodPropsInterface = {
        period: 'Days',
        options: Array.from(Array(31).keys(), n => n + 1),
        radioButtons: [
            'Every Day',
            'Even Days',
            'Odd Days',
            'Every 5 Days',
            'Every 10 Days',
            'Every Half Month',
        ],
        selectedRadio, selectedOption, hasError,
        onRadioButtonChange, onOptionChange
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Period {...period} />
}

const mapStateToProps = (state: { crontabGenerator: { days: PeriodContainerStateInterface } }) => ({
    selectedRadio: state.crontabGenerator.days.selectedRadio,
    selectedOption: state.crontabGenerator.days.selectedOption,
    hasError: state.crontabGenerator.days.hasError,
});

export default compose(
    connect(mapStateToProps, {
        setRadioButtonValue: setDaysRadioButtonValue,
        setOptionValue: setDaysOptionValue,
        setHasError: setDayHasError,
    }))(Days);
