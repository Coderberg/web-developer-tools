import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import UnixTimeForm from "../../../../components/EpochConverter/Forms/UnixTimeForm";

const onEpochToDateButtonClick = jest.fn();

const setup = () => {
    render(<UnixTimeForm onUnixTimeChange={null}
                         unixTimeInputValue="1637051205"
                         epochToDateResult=""
                         onEpochToDateButtonClick={onEpochToDateButtonClick}/>)
    const button = screen.getByText('Timestamp to Human date')
    return {button}
}

it('should simulate button click', () => {
    const {button} = setup()
    fireEvent.click(button);
    expect(onEpochToDateButtonClick).toBeCalledTimes(1)
});
