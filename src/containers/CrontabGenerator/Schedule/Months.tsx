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
    setMonthHasError,
    setMonthsOptionValue,
    setMonthsRadioButtonValue
} from "../../../actions/CrontabGenerator/Schedule/months";

const Months = ({
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
        if (value !== 'Months') {
            setOptionValue('');
        }
        setHasError(false);
    }

    const onOptionChange = ({target: {value}}: { target: { value: string } }) => {
        setOptionValue(value);
        setRadioButtonValue('Months');
        setHasError(false);
    }

    const period: PeriodPropsInterface = {
        period: 'Months',
        options: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"],
        radioButtons: [
            'Every Month',
            'Even Months',
            'Odd Months',
            'Every 4 Months',
            'Every Half Year',
        ],
        selectedRadio, selectedOption, hasError,
        onRadioButtonChange, onOptionChange
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Period {...period} />
}

const mapStateToProps = (state: { crontabGenerator: { months: PeriodContainerStateInterface } }) => ({
    selectedRadio: state.crontabGenerator.months.selectedRadio,
    selectedOption: state.crontabGenerator.months.selectedOption,
    hasError: state.crontabGenerator.months.hasError,
});

export default compose(
    connect(mapStateToProps, {
        setRadioButtonValue: setMonthsRadioButtonValue,
        setOptionValue: setMonthsOptionValue,
        setHasError: setMonthHasError,
    }))(Months);
