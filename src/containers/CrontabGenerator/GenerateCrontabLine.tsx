import React, {useRef} from "react";
import {Toast} from 'primereact/toast';
import {compose} from "redux";
import {connect} from "react-redux";
import GenerateCrontabLineComponent
    from '../../components/CrontabGenerator/GenerateCrontabLine';
import {setResult} from "../../actions/CrontabGenerator/generateCrontabLine";
import {
    getCronExpression,
    getFormState,
    getResult
} from "../../selectors/crontabGenerator";
import {setMinuteHasError} from "../../actions/CrontabGenerator/Schedule/minutes";
import {setDayHasError} from "../../actions/CrontabGenerator/Schedule/days";
import {setHourHasError} from "../../actions/CrontabGenerator/Schedule/hours";
import {setMonthHasError} from "../../actions/CrontabGenerator/Schedule/months";
import {setWeekdayHasError} from "../../actions/CrontabGenerator/Schedule/weekday";
import {setCommandHasError} from "../../actions/CrontabGenerator/commandToExecute";
import {GenerateCrontabLineContainerState} from "../../types/crontabGenerator";

const GenerateCrontabLine = ({
                                 formState,
                                 result,
                                 setResultValue,
                                 setMinuteError,
                                 setHourError,
                                 setDayError,
                                 setMonthError,
                                 setWeekdayError,
                                 setCommandError
                             }: GenerateCrontabLineContainerState) => {

    const toast: React.MutableRefObject<any> = useRef(null);

    const showError = (message: string) => {
        toast.current.show({severity: 'error', summary: message});
    }

    const onButtonClick = () => {

        const expression: string = getCronExpression(formState);

        switch (expression) {
            case 'Invalid Minutes':
                showError('Please choose at least one entry in minutes field.');
                setMinuteError(true);
                break;
            case 'Invalid Hours':
                showError('Please choose at least one entry in hours field.');
                setHourError(true);
                break;
            case 'Invalid Days':
                showError('Please choose at least one entry in days field.');
                setDayError(true)
                break;
            case 'Invalid Months':
                showError('Please choose at least one entry in months field.');
                setMonthError(true);
                break;
            case 'Invalid Weekday':
                showError('Please choose at least one entry in weekday field.');
                setWeekdayError(true);
                break;
            case 'Invalid Command':
                showError('Please enter a command.');
                setCommandError(true);
                break;
            case 'Invalid Email':
                showError('Please enter a valid Email address.');
                break;
            case 'Invalid Path':
                showError('Please enter a file path for saving output.');
                break;
            default:
                setResultValue(expression);
        }
    }

    return <>
        <Toast ref={toast} position="top-center"/>
        <GenerateCrontabLineComponent result={result} onClick={onButtonClick}/>
    </>
}

const mapStateToProps = (state: any) => ({
    formState: getFormState(state),
    result: getResult(state),
});

export default compose(
    connect(mapStateToProps, {
        setMinuteError: setMinuteHasError,
        setHourError: setHourHasError,
        setDayError: setDayHasError,
        setMonthError: setMonthHasError,
        setWeekdayError: setWeekdayHasError,
        setCommandError: setCommandHasError,
        setResultValue: setResult
    })
)(GenerateCrontabLine);
