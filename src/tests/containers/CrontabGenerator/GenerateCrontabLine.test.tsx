import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import React from "react";
import store from "../../../store/configureStore";
import GenerateCrontabLine
    from "../../../containers/CrontabGenerator/GenerateCrontabLine";

const setup = () => {
    render(<Provider store={store}><GenerateCrontabLine/></Provider>)
}

it('should simulate button click', () => {
    setup();
    const button = screen.getByText('Generate Crontab Line');
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(screen.queryByText('Please enter a command.')).toBeVisible();
});
