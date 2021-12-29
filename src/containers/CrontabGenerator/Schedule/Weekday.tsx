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
    setWeekdayRadioButtonValue,
    setWeekdayOptionValue,
    setWeekdayHasError
} from "../../../actions/CrontabGenerator/Schedule/weekday";

const Weekday = ({
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
        if (value !== 'Weekday') {
            setOptionValue('');
        }
        setHasError(false);
    }

    const onOptionChange = ({target: {value}}: { target: { value: string } }) => {
        setOptionValue(value);
        setRadioButtonValue('Weekday');
        setHasError(false);
    }

    const period: PeriodPropsInterface = {
        period: 'Weekday',
        options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        radioButtons: [
            'Every Weekday',
            'Monday-Friday',
            'Weekend Days',
        ],
        selectedRadio, selectedOption, hasError,
        onRadioButtonChange, onOptionChange
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Period {...period} />
}

const mapStateToProps = (state: { crontabGenerator: { weekday: PeriodContainerStateInterface } }) => ({
    selectedRadio: state.crontabGenerator.weekday.selectedRadio,
    selectedOption: state.crontabGenerator.weekday.selectedOption,
    hasError: state.crontabGenerator.weekday.hasError,
});

export default compose(
    connect(mapStateToProps, {
        setRadioButtonValue: setWeekdayRadioButtonValue,
        setOptionValue: setWeekdayOptionValue,
        setHasError: setWeekdayHasError,
    }))(Weekday);
