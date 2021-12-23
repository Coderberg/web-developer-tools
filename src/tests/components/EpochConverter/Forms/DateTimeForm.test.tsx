import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import DateTimeForm from "../../../../components/EpochConverter/Forms/DateTimeForm";

const onDateToEpochButtonClick = jest.fn();

const setup = () => {
    render(<DateTimeForm dateTimeInputValue={new Date}
                         onDateTimeChange={null} dateToEpochResult=""
                         onDateToEpochButtonClick={onDateToEpochButtonClick}
                         onTimezoneChange={null}
                         timezoneInputValue="gmt"
    />)
    const button = screen.getByText('Human date to Timestamp')
    return {button}
}

it('should simulate button click', () => {
    const {button} = setup()
    fireEvent.click(button);
    expect(onDateToEpochButtonClick).toBeCalledTimes(1)
});
