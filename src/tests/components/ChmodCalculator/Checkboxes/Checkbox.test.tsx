import { render, screen } from "@testing-library/react";
import React from "react";
import Checkbox from "../../../../components/ChmodCalculator/Checkboxes/Checkbox";

const checked = {
    ownerRead: true,
    ownerWrite: false,
    ownerExecute: false,
    groupRead: false,
    groupWrite: false,
    groupExecute: false,
    othersRead: false,
    othersWrite: false,
    othersExecute: false
}

it('shows the checked checkbox', () => {
    render(<Checkbox checked={checked} handleOnChange={null} ownership="owner" permission="Read"/>);
    const checkbox = screen.getByLabelText('Read');
    expect(checkbox).toBeVisible();
    expect(checkbox).toBeChecked();
});

it('shows the unchecked checkbox', () => {
    render(<Checkbox checked={checked} handleOnChange={null} ownership="owner" permission="Write"/>);
    const checkbox = screen.getByLabelText('Write');
    expect(checkbox).toBeVisible();
    expect(checkbox).not.toBeChecked();
});
