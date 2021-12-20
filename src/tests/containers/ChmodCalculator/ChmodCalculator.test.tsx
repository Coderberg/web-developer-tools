import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import ChmodCalculator from "../../../containers/ChmodCalculator/ChmodCalculator";
import store from "../../../store/configureStore";

test('is able to check checkboxes and get the result', () => {
    render(<Provider store={store}><ChmodCalculator/></Provider>);
    const checkboxes = screen.getAllByLabelText('Read');
    checkboxes.forEach((checkbox) => {
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
    });

    checkboxes.forEach((checkbox) => {
        expect(checkbox).toBeChecked();
    });

    expect(screen.getByDisplayValue('444')).toBeInTheDocument();
    expect(screen.getByDisplayValue('r--r--r--')).toBeInTheDocument();
});

const setup = (placeholderText: string) => {
    const utils = render(<Provider store={store}><ChmodCalculator/></Provider>);
    const input = screen.getByPlaceholderText(placeholderText)
    return {input, ...utils,}
}

test('is able to calculate result based on number', () => {
    const { input } = setup('666')
    fireEvent.change(input, { target: { value: '147' } })
    expect(screen.getByDisplayValue('--xr--rwx')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '523' } })
    expect(screen.getByDisplayValue('r-x-w--wx')).toBeInTheDocument();
});

test('is able to calculate result based on symbolic value', () => {
    const { input } = setup('rw-rw-rw-')
    fireEvent.change(input, { target: { value: 'rwx-w-rwx' } })
    expect(screen.getByDisplayValue('727')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'r-xrw-rwx' } })
    expect(screen.getByDisplayValue('567')).toBeInTheDocument();
});
