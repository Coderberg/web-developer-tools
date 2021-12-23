import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    epochToHumanReadableDate,
    getCurrentUnixTime
} from "../../utils/calculators/epochConverter";
import UnixTimeFormComponent
    from "../../components/EpochConverter/Forms/UnixTimeForm"
import {
    setUnixTimeInputValue,
    setEpochToDateResult
} from "../../actions/EpochConverter/unixTimeForm";
import {
    UnixTimeFormContainerPropsInterface,
    UnixTimeFormStateType
} from "../../types/epochConverter";

const UnixTimeForm = ({
                          unixTimeInputValue,
                          epochToDateResult,
                          setUnixTimeInput,
                          setEpochToDateResultValue
                      }:
                          UnixTimeFormContainerPropsInterface) => {

    useEffect(() => {
        if (unixTimeInputValue === '*') {
            setUnixTimeInput(getCurrentUnixTime());
        }
    });

    const onUnixTimeChange = ({target: {value}}: { target: { value: string } }) => {
        setUnixTimeInput(value);
    }

    const onEpochToDateButtonClick = () => {
        setEpochToDateResultValue(epochToHumanReadableDate(unixTimeInputValue));
    }

    return <UnixTimeFormComponent unixTimeInputValue={unixTimeInputValue}
                                  onUnixTimeChange={onUnixTimeChange}
                                  onEpochToDateButtonClick={onEpochToDateButtonClick}
                                  epochToDateResult={epochToDateResult}
    />;

}

const mapStateToProps = (state: { epochConverter: { unixTimeForm: UnixTimeFormStateType } }) => ({
    unixTimeInputValue: state.epochConverter.unixTimeForm.unixTimeInputValue,
    epochToDateResult: state.epochConverter.unixTimeForm.epochToDateResult
});

export default compose(
    connect(mapStateToProps, {
        setUnixTimeInput: setUnixTimeInputValue,
        setEpochToDateResultValue: setEpochToDateResult
    }))(UnixTimeForm);
