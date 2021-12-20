import { render, screen } from "@testing-library/react";
import React from "react";
import CheckboxGroup from "../../../../components/ChmodCalculator/Checkboxes/CheckboxGroup";

const checked = {
    ownerRead: false,
    ownerWrite: false,
    ownerExecute: true,
    groupRead: false,
    groupWrite: false,
    groupExecute: true,
    othersRead: false,
    othersWrite: false,
    othersExecute: false
}

it('shows the unchecked checkboxes', () => {
    render(<CheckboxGroup checked={checked} handleOnChange={null} ownership="group"/>);
    expect(screen.getByLabelText('Read')).not.toBeChecked();
    expect(screen.getByLabelText('Write')).not.toBeChecked();
});

it('shows the checked checkbox', () => {
    render(<CheckboxGroup checked={checked} handleOnChange={null} ownership="group"/>);
    const checkbox = screen.getByLabelText('Execute');
    expect(checkbox).toBeVisible();
    expect(checkbox).toBeChecked();
});
