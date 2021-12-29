import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Mute
    from "../../../../../components/CrontabGenerator/FormFields/HowToHandleOutput/Mute";

const onChange = jest.fn();

const setup = (value: string) => {
    render(<Mute value={value} onChange={onChange}/>)
}

describe('<Mute/> component', () => {
    it('should render "mute" radio button', () => {
        setup('mute')
        expect(screen.getByText(/Mute the execution/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mute the execution/i)).toBeChecked();
    });

    it('should simulate radio button change', () => {
        setup('')
        const radioButton = screen.getByLabelText(/Mute the execution/i);
        expect(radioButton).not.toBeChecked();
        fireEvent.click(radioButton);
        expect(onChange).toBeCalledTimes(1)
    });
});
