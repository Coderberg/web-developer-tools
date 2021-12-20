import React from "react";
import {render, screen} from "@testing-library/react";
import ChmodCalculator from "../../../components/ChmodCalculator/ChmodCalculator";

const checked = {
    ownerRead: false,
    ownerWrite: false,
    ownerExecute: false,
    groupRead: false,
    groupWrite: false,
    groupExecute: false,
    othersRead: false,
    othersWrite: false,
    othersExecute: false
}

const setup = () => render(<ChmodCalculator
        checked={checked}
        numberFieldValue="000" textFieldValue="---------"
        onTextChange={() => {}} onNumberChange={() => {}} onCheckboxChange={() => {}}
    />)

it('shows the user types', () => {
    setup();
    ['owner', 'group', 'others'].forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
    });
});

it('shows the checkboxes', () => {
    setup();
    ['Read', 'Write', 'Execute'].forEach((permission) => {
        (screen.getAllByLabelText(permission)).forEach((checkbox) => {
            expect(checkbox).toBeInTheDocument();
            expect(checkbox).not.toBeChecked();
        });
    });
});

it('shows the text fields', () => {
    setup();
    expect(screen.getByPlaceholderText('rw-rw-rw-')).toBeVisible();
    expect(screen.getByPlaceholderText('666')).toBeVisible();
});
