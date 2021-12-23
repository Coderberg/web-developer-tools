import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import CurrentEpoch
    from "../../components/EpochConverter/CurrentEpochTime/CurrentEpochTime";
import {getCurrentUnixTime} from "../../utils/calculators/epochConverter";
import {
    setCurrentUnixTime,
    setCopyToClipboardButtonState
} from "../../actions/EpochConverter/currentEpochTime"
import {
    CurrentEpochTimeContainerPropsInterface,
    CurrentEpochTimeContainerState
} from "../../types/epochConverter";

const CurrentEpochTime = ({
                              currentUnixTime,
                              copyToClipboardButtonState,
                              setCurrentUnixTimeValue,
                              setCopyToClipboardState
                          }: CurrentEpochTimeContainerPropsInterface) => {

    useEffect(() => {
        if (currentUnixTime === '') {
            setCurrentUnixTimeValue(getCurrentUnixTime());
        }

        const secTimer = setInterval(() => {
            setCurrentUnixTimeValue(getCurrentUnixTime());
            if (Number(getCurrentUnixTime()) % 5 === 0) {
                setCopyToClipboardState('default');
            }
        }, 1000)

        return () => clearInterval(secTimer);
    }, [currentUnixTime, setCopyToClipboardState, setCurrentUnixTimeValue]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentUnixTime);
        setCopyToClipboardState('pressed')
    }

    return <CurrentEpoch currentUnixTime={currentUnixTime}
                         copyToClipboard={copyToClipboard}
                         copyToClipboardButtonState={copyToClipboardButtonState}
    />
}

const mapStateToProps = (state: { epochConverter: { currentEpochTime: CurrentEpochTimeContainerState } }) => ({
    currentUnixTime: state.epochConverter.currentEpochTime.currentUnixTime,
    copyToClipboardButtonState: state.epochConverter.currentEpochTime.copyToClipboardButtonState,
});

export default compose(
    connect(mapStateToProps, {
        setCurrentUnixTimeValue: setCurrentUnixTime,
        setCopyToClipboardState: setCopyToClipboardButtonState,
    }))(CurrentEpochTime);
