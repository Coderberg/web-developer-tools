import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import CommandToExecuteComponent
    from "../../components/CrontabGenerator/FormFields/CommandToExecute";
import {
    setCommandToExecuteValue,
    setCommandHasError
} from "../../actions/CrontabGenerator/commandToExecute";
import {
    CommandToExecuteContainerPropsInterface,
    CommandToExecuteContainerState
} from "../../types/crontabGenerator";

const CommandToExecute = ({
                              commandToExecuteValue,
                              commandHasError,
                              setCommandToExecute,
                              setCommandHasErrorValue
                          }: CommandToExecuteContainerPropsInterface) => {

    const onCommandToExecuteChange = ({target: {value}}: { target: { value: string } }) => {
        setCommandToExecute(value);
        setCommandHasErrorValue(false);
    }

    return <CommandToExecuteComponent
        commandToExecuteValue={commandToExecuteValue}
        commandHasError={commandHasError}
        onCommandToExecuteChange={onCommandToExecuteChange}
    />
}

const mapStateToProps = (state: { crontabGenerator: { commandToExecute: CommandToExecuteContainerState } }) => ({
    commandToExecuteValue: state.crontabGenerator.commandToExecute.commandToExecuteValue,
    commandHasError: state.crontabGenerator.commandToExecute.commandHasError,
});

export default compose(
    connect(mapStateToProps, {
        setCommandToExecute: setCommandToExecuteValue,
        setCommandHasErrorValue: setCommandHasError,
    }))(CommandToExecute);
