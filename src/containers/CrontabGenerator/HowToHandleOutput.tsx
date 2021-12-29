import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import HowToHandleOutputComponent
    from "../../components/CrontabGenerator/FormFields/HowToHandleOutput";
import {
    setEmailValue,
    setHowToHandleOutputValue, setPathToFileValue
} from "../../actions/CrontabGenerator/howToHandleOutput";
import {
    HowToHandleOutputContainerProps,
    HowToHandleOutputContainerState
} from "../../types/crontabGenerator";

const HowToHandleOutput = ({
                               howToHandleOutputValue,
                               pathToFileValue,
                               emailValue,
                               setHowToHandleOutput,
                               setPathToFile,
                               setEmail
                           }: HowToHandleOutputContainerProps) => {

    const onHowToHandleOutputChange = ({target: {value}}: { target: { value: string } }) => {
        setHowToHandleOutput(value);
    }

    const onPathToFileChange = ({target: {value}}: { target: { value: string } }) => {
        setPathToFile(value);
        setHowToHandleOutput('file');
    }

    const onEmailChange = ({target: {value}}: { target: { value: string } }) => {
        setEmail(value);
        setHowToHandleOutput('email');
    }

    return <HowToHandleOutputComponent
        selectedRadio={howToHandleOutputValue}
        pathToFileValue={pathToFileValue}
        emailValue={emailValue}
        onRadioButtonChange={onHowToHandleOutputChange}
        onPathToFileChange={onPathToFileChange}
        onEmailChange={onEmailChange}
    />
}

const mapStateToProps = (state: { crontabGenerator: { howToHandleOutput: HowToHandleOutputContainerState } }) => ({
    howToHandleOutputValue: state.crontabGenerator.howToHandleOutput.howToHandleOutputValue,
    pathToFileValue: state.crontabGenerator.howToHandleOutput.pathToFileValue,
    emailValue: state.crontabGenerator.howToHandleOutput.emailValue,
});

export default compose(
    connect(mapStateToProps, {
        setHowToHandleOutput: setHowToHandleOutputValue,
        setPathToFile: setPathToFileValue,
        setEmail: setEmailValue,
    }))(HowToHandleOutput);
