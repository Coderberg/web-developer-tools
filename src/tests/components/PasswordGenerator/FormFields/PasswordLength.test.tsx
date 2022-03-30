import {render, screen} from "@testing-library/react";
import React from "react";
import PasswordLength
    from "../../../../components/PasswordGenerator/FormFields/PasswordLength";

const onChange = jest.fn();

it('shows the slider title', () => {
    render(<PasswordLength passwordLength="41"
                           onPasswordLengthChange={onChange}/>);
    expect(screen.getByText(/Password Length:/i)).toBeVisible();
});

it('shows the password length', () => {
    render(<PasswordLength passwordLength="41"
                           onPasswordLengthChange={onChange}/>);
    expect(screen.getByText(/41/i)).toBeVisible();
});
