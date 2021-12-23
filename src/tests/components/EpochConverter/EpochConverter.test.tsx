import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import EpochConverter from "../../../components/EpochConverter/EpochConverter";
import store from "../../../store/configureStore";

it('should simulate "Copy" button click', () => {
    render(<Provider store={store}><EpochConverter /></Provider>)
    const button = screen.getByText('Copy');
    expect(button).toBeInTheDocument();

    Object.defineProperty(navigator, "clipboard", {
        value: {
            writeText: () => {},
        },
    });

    fireEvent.click(button);
    expect(screen.queryByText('Copy')).toBeNull()
    expect(screen.queryByText('Copied')).toBeInTheDocument();
});

it('should simulate "Timestamp to Human date" button click', () => {
    render(<Provider store={store}><EpochConverter /></Provider>)
    const button = screen.getByText('Timestamp to Human date');
    expect(button).toBeInTheDocument();
    expect(screen.queryByTestId('epochToDateResult')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId('epochToDateResult')).toBeInTheDocument();
});

it('should simulate "Human date to Timestamp" button click', () => {
    render(<Provider store={store}><EpochConverter /></Provider>)
    const button = screen.getByText('Human date to Timestamp');
    expect(button).toBeInTheDocument();
    expect(screen.queryByTestId('dateToEpochResult')).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId('dateToEpochResult')).toBeInTheDocument();
});
