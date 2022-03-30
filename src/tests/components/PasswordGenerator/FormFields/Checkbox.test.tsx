import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Checkbox
    from "../../../../components/PasswordGenerator/FormFields/Checkbox";

const checked = {
    symbols: true,
    numbers: false,
    uppercase: true,
    lowercase: false,
    excludeSimilar: true
}

const onCheckboxChange = jest.fn();

it('shows the checked checkbox', () => {
    render(<Checkbox label="Exclude Similar Characters" id="excludeSimilar"
                     checked={checked} onCheckboxChange={onCheckboxChange}/>);
    const checkbox = screen.getByLabelText('Exclude Similar Characters');
    expect(checkbox).toBeVisible();
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(onCheckboxChange).toBeCalledTimes(1)
});

it('shows the unchecked checkbox', () => {
    render(<Checkbox label="Numbers" id="numbers" checked={checked}
                     onCheckboxChange={onCheckboxChange}/>);
    const checkbox = screen.getByLabelText('Numbers');
    expect(checkbox).toBeVisible();
    expect(checkbox).not.toBeChecked();
});
