import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Checkboxes
    from "../../../../components/PasswordGenerator/FormFields/Checkboxes";

const checked = {
    symbols: true,
    numbers: true,
    uppercase: true,
    lowercase: false,
    excludeSimilar: false
}

const onCheckboxChange = jest.fn();

it('shows the checked checkbox', () => {
    render(<Checkboxes checked={checked} onCheckboxChange={onCheckboxChange}/>);
    const checkbox = screen.getByLabelText('Symbols');
    expect(checkbox).toBeVisible();
    expect(checkbox).toBeChecked();
});

it('shows the unchecked checkbox', () => {
    render(<Checkboxes checked={checked} onCheckboxChange={onCheckboxChange}/>);
    const checkbox = screen.getByLabelText('Exclude Similar Characters');
    expect(checkbox).toBeVisible();
    expect(checkbox).not.toBeChecked();
});

it('should handle checkbox change', () => {
    render(<Checkboxes checked={checked} onCheckboxChange={onCheckboxChange}/>);
    const checkbox = screen.getByLabelText('Lowercase');
    fireEvent.click(checkbox);
    expect(onCheckboxChange).toBeCalledTimes(1)
});
