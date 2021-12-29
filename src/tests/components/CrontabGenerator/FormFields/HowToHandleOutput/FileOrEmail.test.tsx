import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import FileOrEmail
    from "../../../../../components/CrontabGenerator/FormFields/HowToHandleOutput/FileOrEmail";

const onChange = jest.fn();

const setup = (value: string) => {
    render(<FileOrEmail
        name="email"
        label="Send output to Email:"
        radioButtonValue={value}
        textInputValue="info@example.com"
        radioButtonOnChange={onChange}
        textInputOnChange={onChange}/>)
}

describe('<FileOrEmail/> component', () => {

    it('should render radio button & text field', () => {
        setup('email')
        expect(screen.getByText(/Send output to Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Send output to Email/i)).toBeChecked();
    });

    it('should simulate radio button change', () => {
        setup('')
        const radioButton = screen.getByLabelText(/Send output to Email/i);
        expect(radioButton).not.toBeChecked();
        fireEvent.click(radioButton);
        expect(onChange).toBeCalledTimes(1)
    });

    it('should simulate input change', () => {
        setup('email')
        const input = screen.getByDisplayValue("info@example.com");
        fireEvent.change(input, {target: {value: 'mail@example.com'}})
        expect(onChange).toBeCalledTimes(1);
    });

});
